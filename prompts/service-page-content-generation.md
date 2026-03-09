# Service Page Content Generation Prompt (HTML Format)

## Inputs Required
- **City:** `{{ $('Service Page Input Data').last().json.City }}`
- **Main Service Area:** `{{ $('Service Page Input Data').last().json.mainServiceArea }}`
- **Service Focus:** `{{ $('Service Page Input Data').last().json["Service Focus"] }}`
- **GBP Primary Category:** `{{ $('Service Page Input Data').last().json["GBP Primary Category"] }}`

## Output Requirements

**CRITICAL: You will receive ONLY the inputs above. Do NOT ask follow-up questions. Generate the complete output immediately using your knowledge of the city and standard content best practices. Select appropriate local references, landmarks, and area-specific details autonomously.**

<!-- ✅ ADDED: No-timeline rule — primary enforcement point near top-level CRITICAL block -->
**CRITICAL: Do NOT include any timeline, duration, or time estimate information anywhere on the page. No phrases like "completed in X days", "takes 2–4 hours", "within 24 hours", "same-day", "next-day", "turnaround time", or any similar wording. Timelines must be completely absent from all sections, steps, cards, FAQs, meta fields, and all other content.**

Output Requirements

Format & Style

- Output format: JSON with four fields: `content` (HTML), `meta_description`, `title_tag`, `description`
- Reading level: Grade 5-6 (sentences ≤ 20 words)
- Style: Concrete nouns and verbs; no fluff; no prices
- Geo spice: Mention the city once per section; use a neighborhood reference every 2-3 sections
- Keyword use: Include "[Service] in [City]" in H1 or within the first 100 words

Length Caps

- Intro ≤ 60 words
- Each section 30-70 words
- Meta description: 150-160 characters
- Title tag: 55-60 characters
- Description: < 20 words (one sentence)

## HTML Styling Requirements

When generating HTML content, you must include inline CSS styling to create visually appealing, professional-looking content. You may use these specific color classes where appropriate: `bg-primary`, `bg-secondary`, `bg-main`, `text-primary`. For all other styling, use inline CSS. Follow these formatting guidelines:

**Typography & Spacing:**
- **H1:** Use `class='text-primary' style='font-size: 36px; font-weight: 700; margin-top: 0; margin-bottom: 24px; letter-spacing: 0.2px; line-height: 1.3;'` for the main page title (use `text-primary` class)
- **H2 (Chapter Headers):** Use `class='text-primary' style='font-size: 38px; font-weight: 700; margin-top: 0; margin-bottom: 16px; letter-spacing: -0.3px; line-height: 1.2;'` - Big, bold, confident (use `text-primary` class)
- **H2 (Section Headers within chapters):** Use `class='text-primary' style='font-size: 32px; font-weight: 700; margin-top: 44px; margin-bottom: 20px; letter-spacing: 0.2px; line-height: 1.3;'` - Bold and distinct (use `text-primary` class)
- **H3:** Use `class='text-primary' style='font-size: 24px; font-weight: 600; margin-top: 32px; margin-bottom: 16px; letter-spacing: 0.1px; line-height: 1.4;'` - Smaller but clearly distinct from body text (use `text-primary` class)
- **Body Text:** Use `style='font-size: 18px; font-weight: 400; line-height: 1.8; margin-bottom: 20px; color: #666;'` on paragraph tags - Lighter weight, increased line-height, limited width for readability (use slightly muted color #666 for secondary text hierarchy)
- **Lead Paragraphs:** Use `style='font-size: 18px; font-weight: 400; line-height: 1.85; margin-bottom: 20px; color: #333;'` for opening paragraphs after headers
- Use a clean sans font stack everywhere: `font-family: sans-serif;`
- Increase white space between major sections using containers with `margin-bottom: 60px;` minimum and dividers every 2–3 blocks

**Content Structure:**
- Wrap the entire content in `<div style='margin: 0 auto; padding: 0 20px; font-family: sans-serif; max-width: 1200px;'>` to control width, add side padding, apply the font globally, and prevent overly wide layouts
- Break long paragraphs into 2-3 sentence chunks with proper margin spacing
- Add `style='margin-bottom: 16px;'` between list items for better visual separation

**Visual Enhancements:**

- **4-Color System Usage:**
  - **bg-primary (Background):** Use for card backgrounds, page backgrounds, and section containers. Creates clean separation between blocks.
  - **bg-secondary (Accent/Warmth):** Use sparingly for step number badges, icons, small highlights, bullets, or separators. Never dominates—it supports Main color. This removes dullness without being loud.
  - **bg-main (Brand Power Color):** Use sparingly but consistently for section headings, card titles (or underline/accent), hover states, dividers, borders, and section-level color anchors. Rule: If everything is Main color, nothing is.
  - **text-primary (Text Hierarchy):** Use for headings (H1, H2, H3), card titles, and strong emphasis. For body text and descriptions, use slightly muted inline color (#666) to create visual hierarchy. Split text into primary (strong) and secondary (muted) for refined, calm layouts.
  - **Color should guide attention, not decorate:** When users squint, headings should stand out, steps should be obvious, and body text should fade back.

- For important callouts or statistics, use: `<div style='padding: 24px; border-left: 4px solid; border-left-color: var(--main-color); margin: 32px 0;'>content here</div>` (do NOT use `bg-primary` class - callout has white background, use Main color for border accent)
- Style lists with `style='padding-left: 20px; margin-bottom: 24px;'` on `<ul>` or `<ol>` tags and individual items with `style='margin-bottom: 12px;'` on `<li>` tags. For bullet points, you may use `class='bg-secondary'` with inline styling to create subtle bullet indicators if desired.
- Add subtle emphasis with `<strong class='text-primary'>` for key phrases (use `text-primary` class)
- Alternate two-column rows for service sections: `<div style='display: flex; flex-wrap: wrap; gap: 22px; align-items: center; margin-bottom: 50px;'>` with image/text blocks that swap order each section
- Image block example: `<div style='flex: 1 1 320px;'><img src='INSERT_IMAGE_SRC_HERE' alt='Service project' style='width: 100%; max-width: 520px; border-radius: 10px; box-shadow: 0 8px 24px rgba(0,0,0,0.08);'><p style='font-size: 13px; color: #666; margin-top: 8px; font-style: italic;'>[Descriptive caption with neighborhood/area reference]</p></div>`
- **Image src requirement:** Always use the literal text `INSERT_IMAGE_SRC_HERE` as the placeholder text inside the `src` attribute for all images. Do not put anything else, any value, or any actual image source. Use this exact literal text as-is.
- Text block example: `<div style='flex: 1 1 320px;'>...</div>`
- For card grids (services or steps), wrap in `<div style='display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin-bottom: 40px;'>`
- **Card styling with visual hierarchy and color system:**
  - Card container: `<div style='border: 1px solid #e6e6e6; border-radius: 10px; padding: 28px 24px; box-shadow: 0 6px 18px rgba(0,0,0,0.06); transition: all 0.2s ease;'>` (do NOT use `bg-primary` class for cards - cards have white background)
  - Hover state: Add `onmouseover="this.style.borderColor='var(--main-color)'; this.style.boxShadow='0 8px 24px rgba(0,0,0,0.1)'" onmouseout="this.style.borderColor='#e6e6e6'; this.style.boxShadow='0 6px 18px rgba(0,0,0,0.06)'"` for subtle interaction
  - Ensure consistent vertical alignment: all card titles start at the same height, number badges align horizontally, padding is generous (minimum 28px vertical, 24px horizontal)
- Accordion FAQs: `<details style='border: 1px solid #e5e5e5; border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;'><summary class='text-primary' style='font-size: 16px; font-weight: 700; cursor: pointer;'>Question</summary><p style='font-size: 18px; line-height: 1.6; margin: 12px 0 0 0;'>Answer</p></details>` (use `text-primary` class for summary)

**Consistency:**
- Maintain consistent spacing: small gaps (12-16px), medium gaps (24-32px), large gaps (48-64px)
- Ensure all styling is inline (no external stylesheets or `<style>` blocks)
- Use semantic HTML5 tags: `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<div>` with inline CSS styling
- Use `<strong>` sparingly for critical terms
- Paragraph breaks: use `</p><p>`, not `<br>`

**Structure hierarchy**
- **Chapter Headers:** Use large H2 tags for major chapter sections (How We Work, Our Services, Why It Matters, Coverage Area)
- **Section Headers:** Use standard H2 tags for subsections within chapters
- `<h3>` only within featured snippet and FAQ questions
- Proper nesting (no orphaned tags)

**Page Mental Model:**
- Think of the page as a **guided tour, not a document**
- Structure should allow fast scrollers to understand:
  - **What you do** in 5 seconds (clear hero/intro)
  - **How you work** in 10 seconds (process-focused chapter)
  - **Why to trust you** before reviews (value & differentiation chapter)
- Reduce "wall of sections" fatigue by grouping related content into visual chapters

**Alternating Background Colors (Chapter Rhythm):**
- Use a repeating background pattern to create visual "chapters" and reduce psychological page length. Apply backgrounds to chapter containers with alternating subtle tints.
- Each chapter should be wrapped in a background container with inner content wrapper:
  - **For colored background chapters:** Use `<div class='bg-primary' style='padding: 24px 32px 24px 32px; margin: 0 -20px; border-radius: 8px'>` (use `bg-primary` class ONLY for colored backgrounds like #f8f9fa or #faf9f7)
  - **For white background chapters:** Use `<div style='padding: 24px 32px 24px 32px; margin: 0 -20px;'>` (do NOT use `bg-primary` class for white backgrounds)
  - Inner wrapper (for both): `<div style='max-width: 1200px; margin: 0 auto;'>` (centers content and constrains width)
- Apply background colors to entire chapter sections, not individual content blocks
- This creates clear visual separation between chapters and makes the page feel shorter

**Section Dividers (between chapters):**
Add subtle visual break between major chapters:
`<div style='border-top: 1px solid #e5e5e5; margin: 0;'></div>`

**Neighborhood/Key Benefit Callout (optional, 1-2 per page):**
When highlighting neighborhood-specific info or major benefits:
`<div style='padding: 16px 20px; border-left: 3px solid; border-left-color: var(--main-color); margin: 24px 0; border-radius: 4px;'>
  <p class='text-primary' style='font-size: 18px; line-height: 1.6; margin: 0;'>callout text</p>
</div>` (use Main color for border, `text-primary` class for text)

Complete Content Structure (HTML Output)

**CRITICAL: Chapter-Based Structure**
Organize content into visual "chapters" to reduce wall-of-sections fatigue. Each chapter should:
- Have a strong chapter header (large H2)
- Include a subheading or brief intro paragraph
- Use alternating background colors (white → light gray #f8f9fa → white → light neutral/beige, repeating)
- Group related sections together logically

**Chapter Structure Pattern:**
Each major chapter should be wrapped in a container with alternating background:

**For colored background chapters (e.g., #f8f9fa):**
```
<div class='bg-primary' style='padding: 24px 32px 24px 32px; margin: 0 -20px; border-radius: 8px'>
  <div style='max-width: 1200px; margin: 0 auto;'>
    <h2 class='text-primary' style='font-size: 38px; font-weight: 700; margin-top: 0; margin-bottom: 16px; letter-spacing: -0.3px; line-height: 1.2;'>Chapter Title</h2>
    <div class='bg-main' style='width: 60px; height: 3px; margin-bottom: 32px; border-radius: 2px;'></div>
    <p style='font-size: 18px; font-weight: 400; line-height: 1.7; margin-bottom: 32px; color: #555;'>Optional subheading that sets context</p>
    [Chapter content here]
  </div>
</div>
```

**For white background chapters:**
```
<div style='padding: 24px 32px 24px 32px; margin: 0 -20px;'>
  <div style='max-width: 1200px; margin: 0 auto;'>
    <h2 class='text-primary' style='font-size: 38px; font-weight: 700; margin-top: 0; margin-bottom: 16px; letter-spacing: -0.3px; line-height: 1.2;'>Chapter Title</h2>
    <div class='bg-main' style='width: 60px; height: 3px; margin-bottom: 32px; border-radius: 2px;'></div>
    <p style='font-size: 18px; font-weight: 400; line-height: 1.7; margin-bottom: 32px; color: #555;'>Optional subheading that sets context</p>
    [Chapter content here]
  </div>
</div>
```

Note: Use `bg-primary` class ONLY for colored background chapter containers (not white). Use `text-primary` class for H2 headers, and `bg-main` class for the section-level color anchor divider line.

**Recommended Chapter Structure:**
1. Hero/Introduction (white background)
2. How We Work (colored background #f8f9fa) - Process-focused content
3. Our Services (white background) - What you actually offer
4. Why It Matters (colored background #f8f9fa) - Value & differentiation
5. Coverage Area (white background) - Local trust
6. CTA Section (colored background #f8f9fa)
7. FAQs (white background)

Note: Always alternate between white and colored backgrounds (white → light gray #f8f9fa → white → light neutral/beige) throughout the page. Each chapter container should use the structure above for proper content centering and width control.

1. Introduction Paragraph (Hero Chapter - White Background)

- Start directly with introduction, don't go for headings
- Wrap in chapter container: `<div style='padding: 24px 32px 24px 32px; margin: 0 -20px;'>` (do NOT use `bg-primary` class for white background)
- Add inner content wrapper: `<div style='max-width: 1200px; margin: 0 auto;'>`
- Add a label above the highlight block: `<p style='font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #666; margin-bottom: 8px;'>Local [Service Focus] Expertise</p>` (based on Service Focus)
- Place intro inside a highlight block: `<div style='padding: 24px 28px; border-left: 4px solid; border-left-color: var(--main-color); margin-bottom: 32px; border-radius: 8px;'>` (do NOT use `bg-primary` class - highlight block has white background, use Main color for border accent)
- Use `<p style='font-size: 18px; font-weight: 400; line-height: 1.8; margin-bottom: 16px; color: #444;'>` tags inside the highlight
- Start with "In [City], ..."
- Cover the service focus and common use cases
- Set light expectations (availability/next steps)
- Tie value promise to the GBP Primary Category
- Include the city once and keep to ≤ 60 words
- Include "[Service] in [City]" keyword once in this section
- Close inner wrapper: `</div>`
- Close chapter container: `</div>`

2. Chapter Structure: How We Work (Light Gray Background)

- Wrap entire chapter in: `<div class='bg-primary' style='padding: 24px 32px 24px 32px; margin: 0 -20px; border-radius: 8px'>` (use `bg-primary` class with colored background #f8f9fa)
- Add inner content wrapper: `<div style='max-width: 1200px; margin: 0 auto;'>`
- **Chapter Header:** Use `<h2 class='text-primary' style='font-size: 38px; font-weight: 700; margin-top: 0; margin-bottom: 16px; letter-spacing: -0.3px; line-height: 1.2;'>How We Work</h2>` (use `text-primary` class)
- **Section-level color anchor:** Add a thin horizontal divider line under chapter H2 header using: `<div class='bg-main' style='width: 60px; height: 3px; margin-bottom: 32px; border-radius: 2px;'></div>` to visually frame the chapter content
- **Chapter Subheading:** Add `<p style='font-size: 18px; font-weight: 400; line-height: 1.7; margin-bottom: 32px; color: #555;'>Brief 1-2 sentence overview of your process approach</p>`
- Include 2-3 H2 sections within this chapter covering the process (diagnose, prepare, perform, verify)
- **If using step cards:** See detailed step card instructions below (section 2a)
- Close inner wrapper: `</div>`
- Close chapter container: `</div>`

2a. What's Involved / Steps Section (Part of "How We Work" Chapter)

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

3. Chapter Structure: Our Services (White Background)

- Wrap entire chapter in: `<div style='padding: 24px 32px 24px 32px; margin: 0 -20px;'>` (do NOT use `bg-primary` class for white background)
- Add inner content wrapper: `<div style='max-width: 1200px; margin: 0 auto;'>`
- **Chapter Header:** Use `<h2 class='text-primary' style='font-size: 38px; font-weight: 700; margin-top: 0; margin-bottom: 16px; letter-spacing: -0.3px; line-height: 1.2;'>Our Services</h2>` (use `text-primary` class)
- **Section-level color anchor:** Add a thin horizontal divider line under chapter H2 header using: `<div class='bg-main' style='width: 60px; height: 3px; margin-bottom: 32px; border-radius: 2px;'></div>` to visually frame the chapter content
- **Chapter Subheading:** Add `<p style='font-size: 18px; font-weight: 400; line-height: 1.7; margin-bottom: 32px; color: #555;'>What you actually offer in [City]</p>`
- Include 2-3 H2 sections within this chapter covering specific services
- **Service Sections:** See detailed service section instructions below (section 3a)
- Close inner wrapper: `</div>`
- Close chapter container: `</div>`

3a. Service Sections (Part of "Our Services" Chapter)

- Use alternating layouts: Section 1 text left/image right, Section 2 image left/text right, then repeat
- For a card-based variant, use the improved card grid style with color system: do NOT use `bg-primary` class for service cards (cards have white background), use `class='text-primary'` for service titles, and include hover states. Each card should have 2–3 bullet benefits and a short CTA line
- **Service card hierarchy:** Service title uses `class='text-primary'` (strongest text), description uses muted color #666 (softer text), bullets may use subtle `bg-secondary` accents
- Keep each service block 40-70 words plus bullets; include one local factor (permits, parking, building type) and rotate nearby neighborhoods every other block
- All text content should have `line-height: 1.8;` or `line-height: 1.85;`
- Add captions under images: `<p style='font-size: 13px; color: #666; margin-top: 8px; font-style: italic;'>[Descriptive caption with neighborhood/area reference]</p>` (e.g., "Full kitchen remodel in [City]", "Open-concept renovation")
- Service sections are already within chapter containers with alternating backgrounds, so no additional background wrapping needed
- **Card alignment:** Ensure consistent padding (28px vertical, 24px horizontal minimum), all titles align at same height, and cards have hover states with Main color border shift

4. Chapter Structure: Why It Matters (Light Neutral Background)

- Wrap entire chapter in: `<div class='bg-primary' style='padding: 24px 32px 24px 32px; margin: 0 -20px; border-radius: 8px'>` (use `bg-primary` class with colored background #f8f9fa)
- Add inner content wrapper: `<div style='max-width: 1200px; margin: 0 auto;'>`
- **Chapter Header:** Use `<h2 class='text-primary' style='font-size: 38px; font-weight: 700; margin-top: 0; margin-bottom: 16px; letter-spacing: -0.3px; line-height: 1.2;'>Why It Matters</h2>` (use `text-primary` class)
- **Section-level color anchor:** Add a thin horizontal divider line under chapter H2 header using: `<div class='bg-main' style='width: 60px; height: 3px; margin-bottom: 32px; border-radius: 2px;'></div>` to visually frame the chapter content
- **Chapter Subheading:** Add `<p style='font-size: 18px; font-weight: 400; line-height: 1.7; margin-bottom: 32px; color: #555;'>Value proposition and differentiation</p>`
- Include 1-2 H2 sections within this chapter covering value and trust factors
- Close inner wrapper: `</div>`
- Close chapter container: `</div>`

5. Chapter Structure: Coverage Area (White Background)

- Wrap entire chapter in: `<div style='padding: 24px 32px 24px 32px; margin: 0 -20px;'>` (do NOT use `bg-primary` class for white background)
- Add inner content wrapper: `<div style='max-width: 1200px; margin: 0 auto;'>`
- **Chapter Header:** Use `<h2 class='text-primary' style='font-size: 38px; font-weight: 700; margin-top: 0; margin-bottom: 16px; letter-spacing: -0.3px; line-height: 1.2;'>Serving [City] and Surrounding Areas</h2>` (use `text-primary` class)
- **Section-level color anchor:** Add a thin horizontal divider line under chapter H2 header using: `<div class='bg-main' style='width: 60px; height: 3px; margin-bottom: 32px; border-radius: 2px;'></div>` to visually frame the chapter content
- **Chapter Subheading:** Add `<p style='font-size: 18px; font-weight: 400; line-height: 1.7; margin-bottom: 32px; color: #555;'>Local trust and neighborhood coverage</p>`
- Include neighborhood references and local factors
- Close inner wrapper: `</div>`
- Close chapter container: `</div>`

6. H2 Sections (within chapters, 4-6 statement-style sections total)

- Use statement headings (not questions); map each H2 to a distinct job (diagnose, decide, prepare, perform, verify, prevent)
- Prioritize "ready-to-book" intent over research
- Add city only where natural; no pricing, brand comparisons, or warranties

For each H2 section within a chapter, structure as follows:

**Section Container:**
Wrap each H2 + content in:
`<div style='margin-bottom: 50px;'>`

**Statement H2 (Section Header within chapter):**
- Use `<h2 class='text-primary' style='font-size: 32px; font-weight: 700; margin-top: 44px; margin-bottom: 20px; letter-spacing: 0.2px; line-height: 1.3;'>` tag (use `text-primary` class)
- No question format; keep tone conversational

**Lead Paragraph (first P after H2):**
- Wrap in paragraph container: `<div>`
- Use `<p style='font-size: 18px; font-weight: 400; line-height: 1.85; margin-bottom: 20px; color: #333;'>` tag for opening paragraph
- Close container: `</div>`

**Subsequent Paragraphs:**
- Wrap in paragraph container: `<div>`
- Use `<p style='font-size: 18px; font-weight: 400; line-height: 1.8; margin-bottom: 18px; color: #666;'>` tag (use slightly muted color #666 for secondary text hierarchy)
- Close container: `</div>`

Content should cover (30-70 words total):
- Audience/use case in [City]
- Key benefit or what to expect
- One local factor (climate, building type, regulation, seasonality, neighborhood)
- Neighborhood mention every 2-3 sections
- Pair content with either an alternating image/text row or a grid of mini-cards to keep rhythm varied

**Emphasis Sentences:**
For short, punchy single-line sentences (every other section):
- Wrap in paragraph container: `<div>`
- Use `<p style='font-size: 18px; font-weight: 500; color: #222; margin: 24px 0; line-height: 1.7;'>`
- Close container: `</div>`

**Neighborhood/Key Benefit Callout (optional, 1-2 per page):**
When highlighting neighborhood-specific info or major benefits:
`<div style='padding: 16px 20px; border-left: 3px solid; border-left-color: var(--main-color); margin: 24px 0; border-radius: 4px;'>
  <p class='text-primary' style='font-size: 18px; font-weight: 400; line-height: 1.7; margin: 0;'>callout text</p>
</div>` (use Main color for border, `text-primary` class for text)

**Transition Lines (max 2 total):**
Use sparingly between sections for flow:
- Wrap in paragraph container: `<div>`
- Use `<p style='font-size: 18px; font-weight: 400; line-height: 1.8; margin-bottom: 18px; color: #666; font-style: italic;'>`
- Close container: `</div>`

**Service Section Layout Options:**
- Option A: Use alternating layouts - Section 1 text left/image right, Section 2 image left/text right, then repeat
- Option B: Use card-based variant with improved card grid style and color system: apply `class='bg-primary'` to cards, use `class='text-primary'` for service titles, and include hover states. Each card should have 2–3 bullet benefits and a short CTA line
- **Service card hierarchy:** Service title uses `class='text-primary'` (strongest text), description uses muted color #666 (softer text), bullets may use subtle `bg-secondary` accents
- For service sections with images, consider wrapping the entire section in a light background: `<div style='padding: 32px 24px; border-radius: 12px; margin: 32px 0;'>` to visually separate it from surrounding content (do NOT use `bg-primary` class - this wrapper has white background)
- Add captions under images: `<p style='font-size: 13px; color: #666; margin-top: 8px; font-style: italic;'>[Descriptive caption with neighborhood/area reference]</p>`
- **Card alignment:** Ensure consistent padding (28px vertical, 24px horizontal minimum), all titles align at same height, and cards have hover states with Main color border shift

Close section container: `</div>`

**Visual Pacing Tips:**
- Vary sentence length within paragraphs
- Use emphasis sentences strategically (not every section)
- Place callout boxes after 2-3 standard paragraphs for rhythm
- Visual rhythm: Alternate layouts (text left/image right, then swap), mix cards and grids
- Scannability: Keep paragraphs tight; favor bullets, callouts, and stat chips over long text blocks
- Breaks: Use chapter background alternation to create visual pauses - this alone makes the page feel half as long psychologically
- Stats: Include 1-3 short stat or proof points (e.g., "20+ years experience", "500+ projects completed") using callout boxes
- **Chapter Transitions:** The alternating background colors (white → light gray #f8f9fa → white → light neutral/beige) with negative margins create natural visual breaks between chapters, eliminating the need for excessive dividers

7. Featured Snippet + AI Overview Target (within appropriate chapter)

- Wrap in: `<div style='padding: 24px; border-left: 4px solid; border-left-color: var(--main-color); margin: 32px 0; border-radius: 8px;'>` (do NOT use `bg-primary` class - snippet block has white background, use Main color for border)
- Use `<h2 class='text-primary' style='font-size: 32px; font-weight: 700; margin-top: 44px; margin-bottom: 18px; letter-spacing: 0.2px; line-height: 1.3;'>` for question heading (use `text-primary` class)
- Wrap answer text in paragraph container: `<div>`
- Use `<p style='font-size: 18px; font-weight: 400; line-height: 1.8; margin-bottom: 18px; color: #666;'>` for answer text (use slightly muted color #666 for secondary text hierarchy)
- Close paragraph container: `</div>`
- Use `<ul style='padding-left: 20px; margin-bottom: 18px;'>` and `<li style='margin-bottom: 10px; font-weight: 400; line-height: 1.7;'>` for bullet lists OR `<ol style='padding-left: 20px; margin-bottom: 18px;'>` and `<li style='margin-bottom: 10px; font-weight: 400; line-height: 1.7;'>` for numbered steps
- Target question with area-specific variant
- Answer shape: Definition (2-3 sentences + 3 bullets) OR Steps (5-7 numbered steps) with one short lead-in line to keep the block feeling lighter
- Length cap: ≤ 115 words
- Add a CTA emphasis line right after the snippet block
- Close with: `</div>`

8. FAQs Chapter (White Background - 4–6 intent-matched questions)

- Wrap entire chapter in: `<div style='padding: 24px 32px 24px 32px; margin: 0 -20px;'>` (do NOT use `bg-primary` class for white background)
- Add inner content wrapper: `<div style='max-width: 1200px; margin: 0 auto;'>`
- **Chapter Header:** Use `<h2 class='text-primary' style='font-size: 38px; font-weight: 700; margin-top: 0; margin-bottom: 16px; letter-spacing: -0.3px; line-height: 1.2;'>Frequently Asked Questions</h2>` (use `text-primary` class)
- **Section-level color anchor:** Add a thin horizontal divider line under chapter H2 header using: `<div class='bg-main' style='width: 60px; height: 3px; margin-bottom: 32px; border-radius: 2px;'></div>` to visually frame the chapter content
- **Chapter Subheading:** Add `<p style='font-size: 18px; font-weight: 400; line-height: 1.7; margin-bottom: 32px; color: #555;'>Common questions about [Service] in [City]</p>`
- Present FAQs as accordions using: `<details style='border: 1px solid #e5e5e5; border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;'><summary class='text-primary' style='font-size: 16px; font-weight: 700; cursor: pointer;'>[Question with local intent?]</summary><p style='font-size: 18px; font-weight: 400; line-height: 1.7; margin: 12px 0 0 0; color: #666;'>One-line answer (direct, no fluff)</p></details>` (use `text-primary` class for summary, muted color #666 for answer text)
- Questions drawn from PAA and rephrased for booking intent
- One-line answers; avoid pricing and guarantees
- Prioritize booking intent
- Close inner wrapper: `</div>`
- Close chapter container: `</div>`


Meta Description Requirements

- 150-160 characters (hard limit, including spaces)
- Must include: Target keyword ([Service] in [City]), an action word (Get, Find, Schedule, Book, Request, Call), a local benefit or value proposition, and a soft CTA or availability mention
- Must NOT include: Prices, phone numbers, brand names, promotional language ("best", "top-rated", "#1"), year/date references, multiple punctuation marks (!!!, ???)
- Style: Grade 5-6 reading level, active voice, benefit-focused, natural keyword integration
- Format patterns (rotate):
  - `[Action] [service] in [city]. [Local benefit]. [Soft CTA].`
  - `[Service] in [city] for [use cases]. [What you do] + [availability].`
  - `[City] [service] specialists. [Unique factor]. [Next step].`


Title Tag Requirements

- 55-60 characters (including separators and spaces)
- Format: `[Service] in [City] | [Business Type/Qualifier]`
- Must include: Primary service focus, city name, business type or qualifier
- Separators: `|`, `-`, `•`
- Style: Title case, front-load primary keyword, natural phrasing, no promotional language
- Format patterns (rotate):
  - `[Service] in [City] | [Business Type]`
  - `[City] [Service] | [State Abbreviation]`
  - `[Service Type] [City] | [Qualifier]`
  - `[Specific Service] in [City]` (if under 60 chars)

Description Requirements

- Word limit: Less than 20 words (one sentence)
- Must include: Service Focus and City name; concise value proposition or service overview
- Must NOT include: price mentions; phone numbers; brand names; promotional language ("best", "top-rated", "#1"); multiple punctuation marks
- Style: Grade 5-6 reading level; active voice; natural phrasing; clear and direct
- Format patterns (rotate):
  - `[Service] services in [City] for [benefit/use case].`
  - `Professional [Service] in [City] [value proposition].`
  - `[City] [Service] [service overview].`
- Examples: HVAC repair services in Austin for reliable home comfort. | Professional plumbing in Houston for quality repairs. | Austin electrician services for safe electrical solutions.

Uniqueness Requirements

- Avoid template language: vary structure between services; rotate format patterns every 3-5 pages; change action words and phrasing; use different local factors (climate, building types, regulations)
- Local specificity: reference real neighborhoods where relevant; include city-specific factors (weather, building codes, local trends); avoid generic phrases like "in your area"
- Quality checks: Meta description 150-160 characters; title tag 55-60 characters; description < 20 words (one sentence); all metadata includes service + city; no repetitive phrasing across content and metadata

Expected JSON Output Format
```json
{
  "content": "valid html",
  "meta_description": "string",
  "title_tag": "string",
  "description": "string"
}
```

Critical Formatting Requirements

<!-- ✅ ADDED: No-timeline rule — secondary enforcement point at output validation stage -->
- **NO TIMELINES:** Never include any time estimates, durations, turnaround times, scheduling windows, or completion timeframes anywhere in the content, metadata, or any field. This is a hard rule with no exceptions.
- Return raw JSON only—no markdown code fences; no additional commentary
- The output must be immediately parseable by JSON.parse() with no preprocessing
- All HTML tags must be properly closed and include inline styles as specified
- Use semantic HTML5 tags: `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<ol>`, `<li>` with inline CSS styling
- Enclose the entire content in `<div style='margin: 0 auto; padding: 0 20px; font-family: sans-serif; max-width: 1200px;'>`
- Structure content into chapters with alternating background colors using `bg-primary` classes. Each chapter should be wrapped in a background container: `<div style='padding: 24px 32px 24px 32px; margin: 0 -20px;'>` with inner content wrapper: `<div style='max-width: 1200px; margin: 0 auto;'>`
- All paragraphs must be constrained to max-width: 65ch for optimal readability
- Generate clean, semantic HTML with all styling inline for direct paste into HTML editors
- Use single quotes for all attributes and inline styles to avoid escape characters
- Avoid escape sequences; return literal HTML characters
- Make the layout feel natural and flowing rather than blocky; vary spacing and phrasing while keeping the inline styles consistent
- Use `\n` for line breaks between HTML elements within the content string
- Field names must match exactly: `content`, `meta_description`, `title_tag`, `description`
- All four fields must be present: content, meta_description, title_tag, description
- HTML must be valid and properly nested
