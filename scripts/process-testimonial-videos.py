#!/usr/bin/env python3
"""Convert testimonial videos, extract thumbnails, and transcribe."""
import json
import re
import subprocess
import sys
from pathlib import Path

FFMPEG = "/opt/homebrew/bin/ffmpeg"
FFPROBE = "/opt/homebrew/bin/ffprobe"
ROOT = Path(__file__).resolve().parents[1]
VIDEOS_DIR = ROOT / "public" / "videos"
THUMBS_DIR = ROOT / "public" / "images" / "thumbnails"
DOWNLOADS = Path("/Users/michaelvanhoutte/Downloads")

SOURCES = [
    "1776307300754.mp4",
    "1776977719307.mp4",
    "1776986543187.mov",
    "1777056369432.mov",
    "1777072742573.mp4",
    "1777581722796.mov",
    "1777603777199.MOV",
    "1777672757977.mp4",
    "1778275278498.mov",
    "1778611839786.mp4",
    "1778768933412.mp4",
    "ME9b6b7a7934102f24e1f057270d23c63e.3gpp",
]


def slugify(text: str) -> str:
    text = re.sub(r"[^a-zA-Z0-9]+", "", text.strip())
    return text[:40] or "Testimonial"


def convert_and_thumbnail(src: Path, base_name: str) -> Path:
    out_video = VIDEOS_DIR / f"{base_name}.mp4"
    out_thumb = THUMBS_DIR / f"{base_name}.jpg"

    subprocess.run(
        [
            FFMPEG,
            "-y",
            "-i",
            str(src),
            "-c:v",
            "libx264",
            "-preset",
            "fast",
            "-crf",
            "23",
            "-c:a",
            "aac",
            "-b:a",
            "128k",
            "-movflags",
            "+faststart",
            str(out_video),
        ],
        check=True,
        capture_output=True,
    )

    subprocess.run(
        [
            FFMPEG,
            "-y",
            "-ss",
            "0.5",
            "-i",
            str(out_video),
            "-vframes",
            "1",
            "-q:v",
            "2",
            str(out_thumb),
        ],
        check=True,
        capture_output=True,
    )
    return out_video


def transcribe(video_path: Path) -> str:
    from faster_whisper import WhisperModel

    model = WhisperModel("base", device="cpu", compute_type="int8")
    segments, _ = model.transcribe(str(video_path), language="en")
    return " ".join(s.text.strip() for s in segments if s.text.strip())


def guess_name(transcript: str) -> str:
    patterns = [
        r"(?:my name is|i'm|i am|this is)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)",
        r"(?:shoutout to|shout out to|thanks to)\s+([A-Z][a-z]+)",
    ]
    for pat in patterns:
        m = re.search(pat, transcript, re.I)
        if m:
            return slugify(m.group(1).split()[0])
    return ""


def main():
    VIDEOS_DIR.mkdir(parents=True, exist_ok=True)
    THUMBS_DIR.mkdir(parents=True, exist_ok=True)

    results = []
    used_names = set()

    for idx, filename in enumerate(SOURCES, start=1):
        src = DOWNLOADS / filename
        if not src.exists():
            print(f"Missing: {src}", file=sys.stderr)
            continue

        temp_base = f"TestimonialNew{idx:02d}"
        print(f"Processing {filename} -> {temp_base}...")
        video_path = convert_and_thumbnail(src, temp_base)
        print(f"  Transcribing...")
        transcript = transcribe(video_path)
        name_guess = guess_name(transcript)
        final_base = name_guess if name_guess and name_guess not in used_names else temp_base
        if final_base != temp_base:
            final_video = VIDEOS_DIR / f"{final_base}.mp4"
            final_thumb = THUMBS_DIR / f"{final_base}.jpg"
            video_path.rename(final_video)
            (THUMBS_DIR / f"{temp_base}.jpg").rename(final_thumb)
            video_path = final_video
        used_names.add(final_base.split(".")[0] if "." in final_base else final_base)

        results.append(
            {
                "source": filename,
                "baseName": final_base,
                "videoSrc": f"/videos/{final_base}.mp4#t=0.1",
                "videoThumbnail": f"/images/thumbnails/{final_base}.jpg",
                "transcript": transcript,
            }
        )
        print(f"  Done: {final_base}\n  {transcript[:120]}...")

    out = ROOT / "scripts" / "testimonial-import.json"
    out.write_text(json.dumps(results, indent=2))
    print(f"\nWrote {out}")


if __name__ == "__main__":
    main()
