# Service Area Content Generation Prompt (HTML Format)

## Inputs I'll Provide Each Run

- City: {{ $('Service Area Input Data').last().json.City }}
- Target Keyword: {{ $('Service Area Input Data').last().json['Target Keyword'][0] }}, {{ $('Service Area Input Data').last().json['Target Keyword'][1] }}
- GBP Primary Category: {{ $('Service Area Input Data').last().json['GBP Primary Category'] }}

**CRITICAL: You will receive ONLY the inputs above. Do NOT ask follow-up questions. Do NOT request additional information about landmarks, neighborhoods, local facts, or preferences. Generate the complete output immediately using your knowledge of the city and standard content best practices. Select appropriate local references, landmarks, and area-specific details autonomously.**

<!-- ✅ ADDED: No-timeline rule — primary enforcement point near top-level CRITICAL block -->
**CRITICAL: Do NOT include any timeline, duration, or time estimate information anywhere on the page. No phrases like "completed in X days", "takes 2–4 hours", "within 24 hours", "same-day", "next-day", "turnaround time", or any similar wording. Timelines must be completely absent from all sections, steps, cards, FAQs, meta fields, and all other content.**

## Output Requirements
Format & Style

- Output format: Valid JSON with two main fields: 'content' (full HTML with inline CSS) and 'description' (meta description)
- Reading level: Grade 5–6. Sentences ≤ 20 words
- No brand info. No prices. No links
- Keyword use: Include the exact target keyword once in the intro
- Geo spice: Mention the neighborhood/landmark naturally; rotate nearby areas every 2–3 sections
- Similarity guard: If any wording feels generic, rewrite with new local facts. Aim for ≤20% overlap with other geo pages
- Research depth: Consider looking at Reddit or similar areas to find information about this very hyper-local area
- Content length caps: Intro ≤ 60 words, Each section 30-70 words
- Description: 150-160 characters
- Visual rhythm: Alternate layouts (text left/image right, then swap), mix cards and grids
- Scannability: Keep paragraphs tight; favor bullets, callouts, and stat chips over long text blocks
- Imagery: Include inline-styled images or placeholders to break text; keep them responsive with rounded corners and soft shadows
- Breaks: Add section dividers and generous spacing so no wall of text forms
- Stats: Include 1-3 short stat or proof points (e.g., "20+ years experience", "500+ projects completed")

## HTML Styling Requirements

When generating HTML content, you must include inline CSS styling to create visually appealing, professional-looking content. You may use these specific color classes where appropriate: `bg-primary`, `bg-secondary`, `bg-main`, `text-primary`. For all other styling, use inline CSS. Follow these formatting guidelines:

**Typography & Spacing:**
- **H2 Headers (Big, Bold, Confident):** Use `class='text-primary' style='font-size: 42px; font-weight: 700; line-height: 1.2; margin-top: 60px; margin-bottom: 16px; letter-spacing: -0.5px;'` for chapter headers and major section headers (use `text-primary` class for strong text color)
- **H3 Headers (Smaller but Distinct):** Use `class='text-primary' style='font-size: 26px; font-weight: 600; line-height: 1.3; margin-top: 32px; margin-bottom: 12px;'` for subsections (use `text-primary` class)
- **Body Text (Lighter Weight, Readable):** Use `style='font-size: 18px; font-weight: 400; line-height: 1.9; margin-bottom: 20px; color: #666;'` on paragraph tags to limit line length to 65-75 characters for optimal readability (use slightly muted color #666 for secondary text hierarchy)
- Use a clean sans font stack everywhere: `font-family: sans-serif;`
- Increase white space between major sections using containers with `margin-bottom: 60px;` minimum and dividers every 2–3 blocks

**Content Structure:**
- Wrap the entire content in `<div style='margin: 0 auto; padding: 0 20px; font-family: sans-serif; max-width: 1200px;'>` to control width, add side padding, and apply the font globally
- Break long paragraphs into 2-3 sentence chunks with proper margin spacing
- Add `style='margin-bottom: 16px;'` between list items for better visual separation

**Visual Enhancements:**

- **4-Color System Usage:**
  - **bg-primary (Background):** Use for card backgrounds, page backgrounds, and section containers. Creates clean separation between blocks.
  - **bg-secondary (Accent/Warmth):** Use sparingly for step number badges, icons, small highlights, bullets, or separators. Never dominates—it supports Main color. This removes dullness without being loud.
  - **bg-main (Brand Power Color):** Use sparingly but consistently for section headings, card titles (or underline/accent), hover states, dividers, borders, and section-level color anchors. Rule: If everything is Main color, nothing is.
  - **text-primary (Text Hierarchy):** Use for headings (H2, H3), card titles, and strong emphasis. For body text and descriptions, use slightly muted inline color (#666) to create visual hierarchy. Split text into primary (strong) and secondary (muted) for refined, calm layouts.
  - **Color should guide attention, not decorate:** When users squint, headings should stand out, steps should be obvious, and body text should fade back.

- **Alternating Background Colors (Chapter Rhythm):** Use a repeating background pattern to create visual "chapters" and reduce psychological page length. Apply backgrounds to chapter containers using the `bg-primary` class (which provides the base background color) with alternating subtle tints.
- **For colored background chapters:** Use `<div class='bg-primary' style='padding: 24px 32px 24px 32px; margin: 0 -20px; border-radius: 8px'>` (use `bg-primary` class ONLY for colored backgrounds like #f8f9fa or #faf9f7)
- **For white background chapters:** Use `<div style='padding: 24px 32px 24px 32px; margin: 0 -20px;'>` (do NOT use `bg-primary` class for white backgrounds)
- For important callouts or statistics, use: `<div class='bg-primary' style='padding: 24px; border-left: 4px solid; border-left-color: var(--main-color); margin: 32px 0; border-radius: 8px'>content here</div>` (use `bg-primary` class and Main color for border accent)
- Style lists with `style='padding-left: 20px; margin-bottom: 24px;'` on `<ul>` or `<ol>` tags and individual items with `style='margin-bottom: 12px; line-height: 1.8;'` on `<li>` tags. For bullet points, you may use `class='bg-secondary'` with inline styling to create subtle bullet indicators if desired.
- Add subtle emphasis with `<strong class='text-primary' style='font-weight: 600;'>` for key phrases (use `text-primary` class)
- Alternate two-column rows for service sections: `<div style='display: flex; flex-wrap: wrap; gap: 22px; align-items: center; margin-bottom: 50px;'>` with image/text blocks that swap order each section
- Image block example: `<div style='flex: 1 1 320px;'><img src='INSERT_IMAGE_SRC_HERE' alt='Service project' style='width: 100%; max-width: 520px; border-radius: 10px; box-shadow: 0 8px 24px rgba(0,0,0,0.08);'><p style='font-size: 13px; color: #666; margin-top: 8px; font-style: italic;'>[Descriptive caption with neighborhood/area reference]</p></div>`
- **Image src requirement:** Always use the literal text `INSERT_IMAGE_SRC_HERE` as the placeholder text inside the `src` attribute for all images. Do not put anything else, any value, or any actual image source. Use this exact literal text as-is.
- Text block example: `<div style='flex: 1 1 320px;'>...</div>`
- For card grids (services or steps), wrap in `<div style='display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin-bottom: 40px;'>`
- **Card styling with visual hierarchy and color system:**
  - Card container: `<div class='bg-primary' style='border: 1px solid #e6e6e6; border-radius: 10px; padding: 28px 24px; box-shadow: 0 6px 18px rgba(0,0,0,0.06); transition: all 0.2s ease;'>` (use `bg-primary` class for white background)
  - Hover state: Add `onmouseover="this.style.borderColor='var(--main-color)'; this.style.boxShadow='0 8px 24px rgba(0,0,0,0.1)'" onmouseout="this.style.borderColor='#e6e6e6'; this.style.boxShadow='0 6px 18px rgba(0,0,0,0.06)'"` for subtle interaction
  - Ensure consistent vertical alignment: all card titles start at the same height, number badges align horizontally, padding is generous (minimum 28px vertical, 24px horizontal)
- Accordion FAQs: `<details style='border: 1px solid #e5e5e5; border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;'><summary style='font-size: 16px; font-weight: 700; cursor: pointer;'>Question</summary><p style='font-size: 18px; line-height: 1.8; margin: 12px 0 0 0;'>Answer</p></details>`

**Consistency:**
- Maintain consistent spacing: small gaps (12-16px), medium gaps (24-32px), large gaps (48-64px)
- Ensure all styling is inline (no external stylesheets or `<style>` blocks)

## Complete Content Structure (HTML Output with Inline Styles)

**Mental Model: Guided Tour, Not Document**
- Think of the page as a guided tour where fast scrollers should understand: what you do (5 seconds), how you work (10 seconds), why to trust you (before reviews)
- Group related sections into visual "chapters" with alternating backgrounds
- Each chapter should have: a strong H2 header, optional subheading, and background color change
- Structure chapters in this logical flow: Hero/Intro → How We Work → Our Services → Why It Matters → Coverage Area → CTA → FAQs

**Chapter Structure Pattern:**
Each major chapter should be wrapped in a container with alternating background:
```
<div class='bg-primary' style='padding: 24px 32px 24px 32px; margin: 0 -20px; border-radius: 8px'>
  <div style='max-width: 1200px; margin: 0 auto;'>
    <h2 class='text-primary' style='font-size: 42px; font-weight: 700; line-height: 1.2; margin-top: 0; margin-bottom: 16px; letter-spacing: -0.5px;'>Chapter Title</h2>
    <div class='bg-main' style='width: 60px; height: 3px; margin-bottom: 32px; border-radius: 2px;'></div>
    <p style='font-size: 18px; font-weight: 500; color: #555; margin-bottom: 32px;'>Optional subheading that sets context</p>
    [Chapter content here]
  </div>
</div>
```
Note: Use `bg-primary` class for chapter containers, `text-primary` class for H2 headers, and `bg-main` class for the section-level color anchor divider line.

### 1. Introduction Paragraph (Hero Chapter - White Background)

- Start directly with introduction, don't go for headings
- Wrap in chapter container: `<div class='bg-primary' style='padding: 24px 32px 24px 32px; margin: 0 -20px; border-radius: 8px'>` (use `bg-primary` class)
- Add a label above the highlight block: `<p style='font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #666; margin-bottom: 8px;'>Local [Service Category] Expertise</p>` (e.g., "Local Remodeling Expertise", "Local Plumbing Expertise" based on GBP Primary Category)
- Place intro inside a highlight block: `<div class='bg-primary' style='padding: 24px 28px; border-left: 4px solid; border-left-color: var(--main-color); margin-bottom: 32px; border-radius: 8px;'>` (use `bg-primary` class and Main color for border accent)
- Use `<p style='font-size: 18px; font-weight: 400; line-height: 1.9; margin-bottom: 16px; color: #444;'>` tags inside the highlight
- Localizer: Start with '[Landmark/Neighborhood] in [City], …'
- Page coverage: What this page covers (service/category + area focus)
- Expectations: Why proximity matters (access, building types, rules)
- Value promise: Soft next step (availability/call)
- Include the target keyword once in this section

### 2. Chapter-Based H2 Sections (Organized into Visual Chapters)

**Chapter Organization:**
Organize content into these logical chapters with alternating backgrounds:
- **Chapter 1: How We Work** (Light Gray Background) - Process-focused content, steps, methodology
- **Chapter 2: Our Services** (White Background) - What you actually offer, service types
- **Chapter 3: Why It Matters** (Light Neutral/Beige Background) - Value & differentiation, local benefits
- **Chapter 4: Coverage Area** (Light Gray Background) - Local trust, directions, getting here

Each chapter follows this structure:

**Chapter Container:**
```
<div class='bg-primary' style='padding: 24px 32px 24px 32px; margin: 0 -20px; border-radius: 8px'>
  <div style='max-width: 1200px; margin: 0 auto;'>
    [Chapter content]
  </div>
</div>
```
Use `bg-primary` class for chapter containers.

**Chapter H2 Header (Big, Bold, Confident):**
Use `<h2 class='text-primary' style='font-size: 42px; font-weight: 700; line-height: 1.2; margin-top: 0; margin-bottom: 16px; letter-spacing: -0.5px;'>` for chapter titles (use `text-primary` class for strong text color)
- No question format; keep tone conversational
- Examples: "How We Work", "Our Services", "Why Local Expertise Matters"
- **Section-level color anchor:** Add a thin horizontal divider line under chapter H2 headers using: `<div class='bg-main' style='width: 60px; height: 3px; margin-bottom: 32px; border-radius: 2px;'></div>` to visually frame the chapter content

**Optional Chapter Subheading:**
Use `<p style='font-size: 18px; font-weight: 500; color: #555; margin-bottom: 32px;'>` for chapter context/subheading

**Section H3 Headers (Within Chapters):**
Use `<h3 class='text-primary' style='font-size: 26px; font-weight: 600; line-height: 1.3; margin-top: 40px; margin-bottom: 12px;'>` for subsections within chapters (use `text-primary` class)

**Lead Paragraph (first P after H2/H3):**
Use `<p style='font-size: 18px; font-weight: 400; line-height: 1.9; margin-bottom: 20px; color: #333;'>` tag for opening paragraph

**Subsequent Paragraphs:**
Use `<p style='font-size: 18px; font-weight: 400; line-height: 1.9; margin-bottom: 18px; color: #444;'>` tag

Content should cover (30-70 words total):
- Audience/use case specific to this area
- Key benefit or what to expect
- One local factor (building type, access, event days, HOA/permits, transit/parking, etc.)
- Neighborhood mention every 2-3 sections
- Pair content with either an alternating image/text row or a grid of mini-cards to keep rhythm varied

**Emphasis Sentences:**
For short, punchy single-line sentences (every other section):
`<p style='font-size: 18px; font-weight: 500; color: #222; margin: 24px 0; line-height: 1.8;'>`

**Neighborhood/Key Benefit Callout (optional, 1-2 per page):**
When highlighting neighborhood-specific info or major benefits:
`<div style='padding: 16px 20px; border-left: 3px solid; border-left-color: var(--main-color); margin: 24px 0; border-radius: 4px;'>
  <p class='text-primary' style='font-size: 18px; line-height: 1.8; margin: 0;'>callout text</p>
</div>` (use Main color for border, `text-primary` class for text)

**Chapter Transitions:**
Chapters are separated by background color changes, so no dividers needed between chapters. Within chapters, use subtle dividers sparingly:
`<div style='border-top: 1px solid #e5e5e5; margin: 40px 0;'></div>`

**Transition Lines (max 2 total):**
Use sparingly between sections for flow:
`<p style='font-size: 18px; line-height: 1.8; margin-bottom: 18px; color: #666; font-style: italic;'>`

Close chapter inner container: `</div>`
Close chapter background container: `</div>`

---

Chapter & Section Requirements:

- **Chapter H2s** should be broad, confident statements: "How We Work", "Our Services", "Why Local Expertise Matters", "Getting Here"
- **Section H3s** within chapters map to distinct job types or service areas (diagnose | decide | prepare | perform | verify | prevent | logistics | directions). Use `class='text-primary'` for H3 headers to maintain color consistency.
- Include one chapter or section focused on 'how to reach us / directions / getting here' (typically in Coverage Area chapter)
- Prioritize 'ready-to-book' intent over generic research
- Add city/area only where natural
- Exclude pricing, brand comparisons, warranties
- If service where people travel TO business: mention serving customers in this area worth the trip
- If service where business travels TO them: mention examples of services performed near this geographic landmark
- Alternate layout usage: text left/image right, then image left/text right; swap again for following sections or use cards to avoid repetition
- Each chapter should feel like a complete "story" that can be understood quickly when scrolling

Visual Pacing Tips:
- Vary sentence length within paragraphs
- Use emphasis sentences strategically (not every section)
- Place callout boxes after 2-3 standard paragraphs for rhythm
- Background color changes between chapters create natural pauses—no need for dividers between chapters
- Insert images every other service section to break text and keep scannability high
- Each chapter should be scannable in 5-10 seconds for fast readers
- Use subheadings (H3) to break up long chapters into digestible sections

### 2a. What's Involved / Steps Section (Part of "How We Work" Chapter)

- Present steps as cards in a grid: use the improved card and grid styles above
- Group steps into phases such as Planning & Demo, Install & Build, Finish & Inspection; label each card with phase and step number
- **Step number badge (visual anchor):** Use circular badge with Secondary color: `<div class='bg-secondary' style='width: 48px; height: 48px; border-radius: 50%; color: white; display: inline-flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 700; margin-bottom: 16px;'>[Number]</div>` (use `bg-secondary` class for step number background - this is the visual anchor)
- **Step title (strongest text):** Use `<h3 class='text-primary' style='font-size: 22px; font-weight: 700; margin-bottom: 14px; margin-top: 0;'>` for step titles within cards (use `text-primary` class for strong title color)
- **Step description (softer, secondary):** Reduce paragraph text under each step to 2-3 lines max (approximately 30-50 words per step description), with `style='font-size: 18px; font-weight: 400; line-height: 1.8; color: #666; margin-bottom: 0;'` (slightly muted text color for hierarchy)
- **Card structure with clear hierarchy:** Each step card should follow this order: Step number badge (largest visual element) → Title (strongest text) → Description (softer text), with generous vertical spacing (16px between badge and title, 14px between title and description)
- Add a trust-building line below the steps grid: `<p class='text-primary' style='font-size: 18px; font-weight: 500; margin-top: 32px; text-align: center; font-style: italic; margin-left: auto; margin-right: auto;'>You'll always know what's happening next—and when.</p>`
- Maintain generous spacing between cards (24px gap minimum)
- **Card hover state:** Include hover interaction: `onmouseover="this.style.borderColor='var(--main-color)'; this.style.boxShadow='0 8px 24px rgba(0,0,0,0.1)'" onmouseout="this.style.borderColor='#e6e6e6'; this.style.boxShadow='0 6px 18px rgba(0,0,0,0.06)'"` for subtle depth
- **Alignment:** Ensure all step number badges align horizontally across cards, all titles start at the same vertical height, and padding is consistent (28px vertical, 24px horizontal minimum)

### 2b. Service Sections (Part of "Our Services" Chapter)

- Use alternating layouts: Section 1 text left/image right, Section 2 image left/text right, then repeat
- For a card-based variant, use the improved card grid style with color system: apply `class='bg-primary'` to cards, use `class='text-primary'` for service titles, and include hover states. Each card should have 2–3 bullet benefits and a short CTA line
- **Service card hierarchy:** Service title uses `class='text-primary'` (strongest text), description uses muted color #666 (softer text), bullets may use subtle `bg-secondary` accents
- Keep each service block 40-70 words plus bullets; include one local factor (permits, parking, building type) and rotate nearby neighborhoods every other block
- All text content should have `line-height: 1.8;` or `line-height: 1.9;`
- Add captions under images: `<p style='font-size: 13px; color: #666; margin-top: 8px; font-style: italic;'>[Descriptive caption with neighborhood/area reference]</p>` (e.g., "Full kitchen remodel in Clinton, PA", "Open-concept renovation")
- Service sections are already within chapter containers with alternating backgrounds, so no additional background wrapping needed
- **Card alignment:** Ensure consistent padding (28px vertical, 24px horizontal minimum), all titles align at same height, and cards have hover states with Main color border shift

### 3. Featured Snippet Target Section (Can be part of "Why It Matters" or standalone chapter)

- Use `<h2 class='text-primary' style='font-size: 42px; font-weight: 700; line-height: 1.2; margin-top: 0; margin-bottom: 16px; letter-spacing: -0.5px;'>` for question heading if standalone chapter, or `<h3 class='text-primary' style='font-size: 26px; font-weight: 600; line-height: 1.3; margin-top: 40px; margin-bottom: 12px;'>` if within a chapter (use `text-primary` class)
- Use `<p style='font-size: 18px; font-weight: 400; line-height: 1.9; margin-bottom: 18px; color: #444;'>` for answer text
- Use `<ul style='padding-left: 20px; margin-bottom: 18px;'>` and `<li style='margin-bottom: 10px; line-height: 1.8;'>` for bullet lists OR `<ol style='padding-left: 20px; margin-bottom: 18px;'>` and `<li style='margin-bottom: 10px; line-height: 1.8;'>` for numbered steps
- Target question with area-specific variant
- Answer shape: Definition (2-3 sentences + 3 bullets) OR Steps (5-7 numbered steps) with one short lead-in line to keep the block feeling lighter
- Length cap: ≤ 115 words
- Add a CTA emphasis line right after the snippet block

### 4. FAQs (4–6 hyper-local questions) - Final Chapter

- Wrap in final chapter container with appropriate background color (continue alternating pattern)
- Start with `<h2 class='text-primary' style='font-size: 42px; font-weight: 700; line-height: 1.2; margin-top: 0; margin-bottom: 16px; letter-spacing: -0.5px;'>Frequently Asked Questions</h2>` before the questions (use `text-primary` class)
- Present FAQs as accordions using the `<details>` pattern above for compactness
- Inside each accordion, use one-line answers with `<p style='font-size: 18px; font-weight: 400; line-height: 1.8; margin: 12px 0 0 0;'>`
- Questions focused on: Access timing, High-rise rules, Event-day scheduling, Permit basics, Area-specific considerations
- Prioritize booking intent; no prices

## Description Requirements

- 150-160 character meta description
- Include target keyword
- Action-oriented with local relevance
- Mention proximity benefit

## Internal Content Strategy (apply throughout)

- **Chapter-based organization:** Group content into visual chapters (How We Work, Our Services, Why It Matters, Coverage Area, FAQs) with alternating backgrounds
- **Fast-scroll optimization:** Ensure each chapter can be understood in 5-10 seconds when scrolling quickly
- CTA placements: after snippet block, mid-page (between chapters), end
- Anchor text patterns:
  - '[Service] near [Landmark] in [City]'
  - 'Check availability in [Neighborhood]'
- Claims limit: max 3 statistical claims
- Service sections: Use either alternating image/text rows or service cards; each card includes a service title, 2–3 bullet benefits, and a 'Learn more' style CTA line
- What's Involved section: Convert the list into visual step cards with step numbers; group steps into phases such as Planning & Demo, Install & Build, Finish & Inspection
- Background color alternation creates natural whitespace and visual pauses—no need for excessive dividers
- Introduce at least one stat callout block per chapter to break monotony
- All body text should use `line-height: 1.8;` or `line-height: 1.9;` for improved readability

## Uniqueness Requirements

- Use 5–8 area-specific facts throughout content
- Include unique local details: building types, parking patterns, event schedules, permit rules, neighborhood characteristics

## Expected JSON Output Format

```json
{
  "content": "valid html with inline styles",
  "description": "string."
}
```

## Critical Formatting Requirements

<!-- ✅ ADDED: No-timeline rule — secondary enforcement point at output validation stage -->
- **NO TIMELINES:** Never include any time estimates, durations, turnaround times, scheduling windows, or completion timeframes anywhere in the content, metadata, or any field. This is a hard rule with no exceptions.
- Return raw JSON only—no markdown code fences
- No ```json wrapper at the beginning
- No ``` closing fence at the end
- Use \n for line breaks between HTML elements within the content string
- The output must be immediately parseable by JSON.parse() with no preprocessing
- All HTML tags must be properly closed and include inline styles as specified
- Use semantic HTML5 tags: `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<ol>`, `<li>` with inline CSS styling
- Enclose the entire content in `<div style='margin: 0 auto; padding: 0 20px; font-family: sans-serif; max-width: 1200px;'>`
- Structure content into chapters with alternating background colors using `bg-primary` classes
- Each chapter should be wrapped in a background container: `<div style='padding: 24px 32px 24px 32px; margin: 0 -20px;'>` with inner content wrapper: `<div style='max-width: 1200px; margin: 0 auto;'>`
- Generate clean, semantic HTML with all styling inline for direct paste into HTML editors
- Use single quotes for all attributes and inline styles to avoid escape characters
- Avoid escape sequences; return literal HTML characters
- Make the layout feel natural and flowing rather than blocky; vary spacing and phrasing while keeping the inline styles consistent
- Ensure all typography follows the hierarchy: H2 (42px, bold 700), H3 (26px, semibold 600), Body (16px, regular 400, max-width 70ch, line-height 1.8-1.9)

**AUTOMATIC EXECUTION: Upon receiving the City, Target Keyword, and GBP Primary Category inputs, immediately generate the complete content and description using your knowledge of well-known neighborhoods, landmarks, and local characteristics of that city. Research local details autonomously if needed. Select appropriate area-specific facts, building types, parking patterns, and other local details on your own. Do not wait for clarification or ask questions. Return only the JSON output with no additional commentary.**
