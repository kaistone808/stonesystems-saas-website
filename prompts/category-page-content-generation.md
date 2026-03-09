# Category Page Content Generation Prompt (HTML Format)

## Inputs Required
- City: {{ $('Category Page Input Data1').last().json.City }}
- Main Service Area: {{ $('Category Page Input Data1').last().json.mainServiceArea }}
- GBP Category: {{ $('Category Page Input Data1').last().json.category }}
- GBP Primary Category: {{ $('Category Page Input Data1').last().json['GBP Primary Category'] }}
- Services Under This Category: {{ $('Category Page Input Data1').last().json.services.join(", ") }}

## Output Requirements
- Format: JSON object with five fields: content (HTML), meta_description, slug, title_tag, description
- Length caps: Intro ≤ 60 words; each service section 40-70 words; meta description 150-160 characters; title tag 55-60 characters; description < 20 words (one sentence)
- Reading level: Grade 5-6 (sentences ≤ 20 words)
- Style: Use concrete nouns and verbs; no fluff; no prices; no brand information
- Geo spice: Mention the city once per section; use a neighborhood reference every 2-3 sections
- Keyword use: Include "[GBP Category] [City]" in H1 and naturally throughout content

<!-- ✅ ADDED: No-timeline rule — primary enforcement point near top-level output requirements -->
**CRITICAL: Do NOT include any timeline, duration, or time estimate information anywhere on the page. No phrases like "completed in X days", "takes 2–4 hours", "within 24 hours", "same-day", "next-day", "turnaround time", or any similar wording. Timelines must be completely absent from all sections, steps, cards, FAQs, meta fields, and all other content.**

## Overall Mental Model
- **Think of the page as a guided tour, not a document**
- Fast scrolling should communicate:
  - **What you do** in 5 seconds (clear service offerings)
  - **How you work** in 10 seconds (process-focused content)
  - **Why to trust you** before reviews (value & differentiation)
- Reduce "Wall of Sections" fatigue by grouping related sections into visual "chapters"
- Each chapter should have: a strong section header (H2), a subheading (optional H3 or intro text), and a background color change (alternating white/gray/neutral)
- Example chapter structure: [Hero/Intro] → [How We Work] → [Our Services] → [Why It Matters] → [Coverage Area] → [CTA] → [FAQs] → [Reviews]
- Visual pauses between chapters (via background changes) massively improve readability and make the page feel half as long psychologically

## Complete Output Structure
### 1. Content (HTML)

**1. H1 Header**
- Use `<h1 class='text-primary' style='font-size: 36px; font-weight: 600; margin-top: 0; margin-bottom: 24px; letter-spacing: 0.2px;'>[GBP Category] in [City]</h1>` (use `text-primary` class for strong text color)
- Include exact GBP Category and City; natural phrasing

**2. Introduction Paragraph**
- Start directly with introduction, don't go for headings
- Add a label above the highlight block: `<p style='font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #666; margin-bottom: 8px;'>Local [GBP Category] Expertise</p>` (e.g., "Local Remodeling Expertise", "Local Plumbing Expertise" based on GBP Primary Category)
- Place intro inside a highlight block: `<div class='bg-primary' style='padding: 24px 28px; border-left: 4px solid; border-left-color: var(--main-color); margin-bottom: 32px; border-radius: 8px;'>` (use `bg-primary` class and Main color for border accent)
- Use `<p style='font-size: 18px; font-weight: 400; line-height: 1.9; margin-bottom: 16px; color: #444;'>` tags inside the highlight
- Start "In [City], …"; cover category + related services; set light expectations; tie value promise to GBP Primary Category; ≤ 60 words
- Include "[GBP Category] in [City]" keyword once in this section

**Service Selection Logic (DO NOT OUTPUT — internal guidance)**
- Review all services provided; select 4-8 most valuable for local ranking
- Prioritize: high search volume potential; strong commercial intent; clear differentiation; natural fit under the GBP Category
- Omit: too niche/low-demand; redundant; better suited for other category pages

**Service Sections (H2 per service, ordered by priority)**

Wrap all content in a max-width container:
`<div style='margin: 0 auto; padding: 0 20px; font-family: sans-serif; max-width: 900px;'>`

**Chapter-Based Organization:**
- Group related service sections into visual "chapters" to reduce wall-of-sections fatigue
- Each chapter should be wrapped in a background container with alternating treatments: one chapter uses the `bg-primary` class on the container, the next chapter does not, then repeat (bg-primary → no bg-primary → bg-primary → no bg-primary)
- **Chapter Container Pattern (for chapters using background):**
  ```
  <div class='bg-primary' style='padding: 24px 32px 24px 32px; margin: 0 -20px; border-radius: 8px'>
    <div style='max-width: 900px; margin: 0 auto;'>
      [Chapter content]
    </div>
  </div>
  ```
  Apply this pattern to every other chapter only, so that chapter containers alternate between having `bg-primary` and having no background class.
- Within each chapter, include a strong H2 header and optional subheading/intro text before service sections
- Close chapter inner container: `</div>`
- Close chapter background container: `</div>`

For each service section, structure as follows:

**Section Container:**
Wrap each H2 + content in:
`<div style='margin-bottom: 40px;'>` (reduced from 60px since chapters provide spacing)

**Service H2:**
- Use `<h2 class='text-primary' style='font-size: 36px; font-weight: 700; line-height: 1.3; margin-top: 48px; margin-bottom: 20px; letter-spacing: -0.3px;'>[Service] in [City]</h2>` for big, bold, confident hierarchy (use `text-primary` class for strong text color)

**Lead Paragraph (first P after H2):**
- Use `<p style='font-size: 18px; font-weight: 400; line-height: 1.9; margin-bottom: 20px; color: #333;'>` tag for opening paragraph

**Subsequent Paragraphs:**
- Use `<p style='font-size: 18px; font-weight: 400; line-height: 1.9; margin-bottom: 18px; color: #444;'>` tag

Content should include: audience/use case in [City]; key benefit; one local factor (climate, building type, regulation, seasonality, neighborhood characteristic); length 40-70 words; include city name once; use one synonym/variant where appropriate

**Service Section Layout Options:**
- Option A: Use alternating layouts - Section 1 text left/image right, Section 2 image left/text right, then repeat
- Option B: Use card-based variant with card grid style, 2–3 bullet benefits, and a short CTA line per card. Apply `class='bg-primary'` to cards, use `class='text-primary'` for service titles, and include hover states.
- For service sections with images, consider wrapping the entire section in a light background: `<div class='bg-primary' style='padding: 32px 24px; border-radius: 12px; margin: 32px 0; border-radius: 8px'>` to visually separate it from surrounding content (use `bg-primary` class)
- Add captions under images: `<p style='font-size: 13px; color: #666; margin-top: 8px; font-style: italic;'>[Descriptive caption with neighborhood/area reference]</p>`

Close section container: `</div>`
Close max-width container at end: `</div>`

**Local Integration Guidelines**
- Every 2-3 sections, mention a specific neighborhood/district/area (e.g., "Downtown," "Northside," "Historic District," "[Neighborhood Name]"); keep references natural and relevant

**Visual Pacing Tips:**
- Vary sentence length within paragraphs
- Use emphasis sentences strategically (not every section): `<p style='font-size: 18px; font-weight: 500; color: #222; margin: 24px 0; line-height: 1.8;'>`
- Place callout boxes after 2-3 standard paragraphs for rhythm
- Add dividers before major topic shifts (e.g., before featured snippet section)
- Visual rhythm: Alternate layouts (text left/image right, then swap), mix cards and grids
- Scannability: Keep paragraphs tight; favor bullets, callouts, and stat chips over long text blocks
- Breaks: Add section dividers and generous spacing so no wall of text forms
- Stats: Include 1-3 short stat or proof points (e.g., "20+ years experience", "500+ projects completed") using callout boxes

**Featured Snippet + AI Overview Target**
- Wrap in: `<div class='bg-primary' style='padding: 24px; border-left: 4px solid; border-left-color: var(--main-color); margin: 32px 0; border-radius: 8px;'>` (use `bg-primary` class and Main color for border accent)
- Use `<h3 class='text-primary' style='font-size: 24px; font-weight: 600; line-height: 1.4; margin-top: 0; margin-bottom: 18px;'>` for question heading with "[GBP Category] in [City]" (smaller but distinct from H2; use `text-primary` class)
- Choose ONE format (≤ 115 words):
  - Option A (definition): Use `<p style='font-size: 18px; font-weight: 400; line-height: 1.9; margin-bottom: 18px; color: #444;'>` for 2-3 sentence definition + `<ul style='padding-left: 20px; margin-bottom: 18px;'><li style='margin-bottom: 10px; line-height: 1.8;'>Key point 1</li><li style='margin-bottom: 10px; line-height: 1.8;'>Key point 2</li><li style='margin-bottom: 10px; line-height: 1.8;'>Key point 3</li></ul>`
  - Option B (steps): Use `<ol style='padding-left: 20px; margin-bottom: 18px;'><li style='margin-bottom: 10px; line-height: 1.8;'>Step 1 (brief, actionable)</li><li style='margin-bottom: 10px; line-height: 1.8;'>Step 2</li><li style='margin-bottom: 10px; line-height: 1.8;'>Step 3</li><li style='margin-bottom: 10px; line-height: 1.8;'>Step 4</li><li style='margin-bottom: 10px; line-height: 1.8;'>Step 5-7 (as needed)</li></ol>`
- Target: question naturally incorporates "[GBP Category] in [City]"
- Add a CTA emphasis line right after the snippet block
- Close with: `</div>`

**FAQs Section (4-6 local questions)**
- Start with `<h2 class='text-primary' style='font-size: 36px; font-weight: 700; line-height: 1.3; margin-top: 48px; margin-bottom: 24px; letter-spacing: -0.3px;'>Frequently Asked Questions</h2>` before the questions (big, bold, confident; use `text-primary` class)
- Present FAQs as accordions using: `<details style='border: 1px solid #e5e5e5; border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;'><summary class='text-primary' style='font-size: 16px; font-weight: 700; cursor: pointer;'>[Question with local intent?]</summary><p style='font-size: 18px; line-height: 1.8; margin: 12px 0 0 0;'>One-line answer (direct, no fluff)</p></details>` (use `text-primary` class for summary)
- Guidelines: questions from common searches for this category + city; rephrase for booking/decision intent; one-line answers; avoid pricing/guarantees/brand comparisons; include city name naturally in 2-3 questions

### 2. Meta Description Requirements
- Character limit: 150-160 (hard)
- Must include: target keyword ([GBP Category] in [City]); action word (Find, Explore, Discover, Get, Schedule, Book); local benefit or value proposition; soft CTA or availability mention
- Must NOT include: price mentions; phone numbers; brand names; promotional language ("best", "top-rated", "#1"); year/date references; multiple punctuation marks (!!!, ???)
- Style: Grade 5-6 reading level; active voice; benefit-focused; natural keyword integration
- Format patterns (rotate): [Action] [GBP Category] in [City]. [Local benefit]. [Soft CTA]. | [GBP Category] in [City] for [use cases]. [What we cover] + [availability]. | [City] [GBP Category] services. [Unique factor]. [Next step].

### 3. Slug Requirements
- Format: kebab-case (lowercase, hyphen-separated); length 2-4 segments max
- Structure patterns: [category-keyword]-[city] | [city]-[category-keyword] | [category-keyword]-in-[city]
- Rules: remove common words ("the", "a", "an", "in", "at", "and"); use category keyword (simplified if long); include city identifier; max 50 characters; only hyphens; concise and readable
- Examples: hvac-contractor-austin; austin-plumbing-services; electrician-houston; roofing-contractor-dallas

### 4. Title Tag Requirements
- Character limit: 55-60 (including separators and spaces)
- Format: [GBP Category] in [City] | [State/Qualifier]
- Must include: GBP Category (or simplified version), City name, State abbreviation or service qualifier
- Separator options: |, -, •
- Style: Title case; front-load primary keyword; natural phrasing; no promotional language
- Format patterns (rotate): [GBP Category] in [City] | [State Abbreviation] | [City] [GBP Category] | [State/Area] | [Category] [City] | [Qualifier]
- Examples: HVAC Contractor in Austin | TX; Austin Plumbing Services | Texas; Electrician Houston | Licensed; Roofing Contractor Dallas | TX

### 5. Description Requirements
- Word limit: Less than 20 words (one sentence)
- Must include: GBP Category and City name; concise value proposition or service overview
- Must NOT include: price mentions; phone numbers; brand names; promotional language ("best", "top-rated", "#1"); multiple punctuation marks
- Style: Grade 5-6 reading level; active voice; natural phrasing; clear and direct
- Format patterns (rotate): [GBP Category] services in [City] for [benefit/use case]. | Professional [GBP Category] in [City] [value proposition]. | [City] [GBP Category] [service overview].
- Examples: HVAC services in Austin for reliable home comfort. | Professional plumbing in Houston for quality repairs. | Austin electrician services for safe electrical solutions.

## 4-Color System (Color Discipline)

You have access to four colors only: **Background Color**, **Main Color**, **Secondary Color**, and **Text Color**. These colors are applied via CSS classes: `bg-primary`, `bg-secondary`, `bg-main`, and `text-primary`. These classes have specific roles and should be used consistently throughout the page.

**Color Roles & Usage:**

1. **bg-primary (Background):**
   - Use for: Card backgrounds, page backgrounds, and section containers. Creates clean separation between blocks.
   - Example: Page background = bg-primary; Cards = bg-primary; Sections alternate with bg-primary class

2. **bg-main (Brand Power Color):**
   - Use for: Section headings (H2), card titles (or underline/accent), hover states, dividers, borders, and section-level color anchors. Rule: If everything is Main color, nothing is.
   - Example: Horizontal dividers under section headers, border accents on callouts, hover border colors

3. **bg-secondary (Accent/Warmth):**
   - Use for: Step number badges, icons, small highlights, bullets, or separators. Never dominates—it supports Main color. This removes dullness without being loud.
   - Example: Step number circle backgrounds, micro-icon colors, accent elements

4. **text-primary (Text Hierarchy):**
   - Use for: Headings (H1, H2, H3), card titles, and strong emphasis. For body text and descriptions, use slightly muted inline color (#666) to create visual hierarchy. Split text into primary (strong) and secondary (muted) for refined, calm layouts.
   - Example: H1, H2, H3 headers use `text-primary` class; body text uses muted color #666

**Golden Rule:** Color should guide attention, not decorate. When users squint, headings should stand out, steps should be obvious, and body text should fade back.

## HTML Styling Requirements

When generating HTML content, you must include inline CSS styling to create visually appealing, professional-looking content. You may use these specific color classes where appropriate: `bg-primary`, `bg-secondary`, `bg-main`, `text-primary`. For all other styling, use inline CSS. Follow these formatting guidelines:

**Typography & Spacing:**
- **H2 Headers (Big, Bold, Confident):** Use `class='text-primary' style='font-size: 36px; font-weight: 700; line-height: 1.3; margin-top: 48px; margin-bottom: 20px; letter-spacing: -0.3px;'` for strong visual hierarchy (use `text-primary` class for strong text color)
- **H3 Headers (Smaller but Distinct):** Use `class='text-primary' style='font-size: 24px; font-weight: 600; line-height: 1.4; margin-top: 32px; margin-bottom: 16px;'` for subsections (use `text-primary` class)
- **Body Text (Lighter Weight, Readable):** Use `style='font-size: 18px; font-weight: 400; line-height: 1.9; margin-bottom: 20px; color: #666;'` on paragraph tags to limit line length to 65-75 characters for optimal readability (use slightly muted color #666 for secondary text hierarchy)
- **Lead Paragraphs:** Use `style='font-size: 18px; font-weight: 400; line-height: 1.85; margin-bottom: 20px; color: #333;'` for opening paragraphs after headers
- Use a clean sans font stack everywhere: `font-family: sans-serif;`
- Increase white space between major sections using containers with `margin-bottom: 60px;` minimum and dividers every 2–3 blocks

**Content Structure:**
- Wrap the entire content in `<div style='margin: 0 auto; padding: 0 20px; font-family: sans-serif; max-width: 900px;'>` to control width, add side padding, and apply the font globally
- Break long paragraphs into 2-3 sentence chunks with proper margin spacing
- Add `style='margin-bottom: 16px;'` between list items for better visual separation

**Visual Enhancements:**

- **4-Color System Usage:**
  - **bg-primary (Background):** Use for card backgrounds, page backgrounds, and section containers. Creates clean separation between blocks.
  - **bg-secondary (Accent/Warmth):** Use sparingly for step number badges, icons, small highlights, bullets, or separators. Never dominates—it supports Main color. This removes dullness without being loud.
  - **bg-main (Brand Power Color):** Use sparingly but consistently for section headings, card titles (or underline/accent), hover states, dividers, borders, and section-level color anchors. Rule: If everything is Main color, nothing is.
  - **text-primary (Text Hierarchy):** Use for headings (H2, H3), card titles, and strong emphasis. For body text and descriptions, use slightly muted inline color (#666) to create visual hierarchy. Split text into primary (strong) and secondary (muted) for refined, calm layouts.
  - **Color should guide attention, not decorate:** When users squint, headings should stand out, steps should be obvious, and body text should fade back.

- **Alternating Background Colors (Chapter Rhythm):** Use a repeating background pattern to create visual "chapters" and reduce psychological page length. Apply backgrounds to chapter containers using the `bg-primary` class (which provides the base background color) with alternating subtle tints. Each chapter container should have: `class='bg-primary' style='padding: 24px 32px 24px 32px; margin: 0 -20px; border-radius: 8px'` (negative margin to break out of parent padding).
- For important callouts or statistics, use: `<div class='bg-primary' style='padding: 24px; border-left: 4px solid; border-left-color: var(--main-color); margin: 32px 0; border-radius: 8px;'>content here</div>` (use `bg-primary` class and Main color for border accent)
- Style lists with `style='padding-left: 20px; margin-bottom: 24px;'` on `<ul>` or `<ol>` tags and individual items with `style='margin-bottom: 12px; line-height: 1.8;'` on `<li>` tags. For bullet points, you may use `class='bg-secondary'` with inline styling to create subtle bullet indicators if desired.
- Add subtle emphasis with `<strong class='text-primary' style='font-weight: 600;'>` for key phrases (use `text-primary` class)
- Alternate two-column rows for service sections: `<div style='display: flex; flex-wrap: wrap; gap: 22px; align-items: center; margin-bottom: 50px;'>` with image/text blocks that swap order each section
- Image block example: `<div style='flex: 1 1 320px;'><img src='INSERT_IMAGE_SRC_HERE' alt='Service project' style='width: 100%; max-width: 520px; border-radius: 10px; box-shadow: 0 8px 24px rgba(0,0,0,0.08);'><p style='font-size: 13px; color: #666; margin-top: 8px; font-style: italic;'>[Descriptive caption with neighborhood/area reference]</p></div>`
- **Image src requirement:** Always use the literal text `INSERT_IMAGE_SRC_HERE` as the placeholder text inside the `src` attribute for all images. Do not put anything else, any value, or any actual image source. Use this exact literal text as-is.
- Text block example: `<div style='flex: 1 1 320px;'>...</div>`

**Card styling with visual hierarchy and color system:**

For card grids (services or steps), wrap in: `<div style='display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin-bottom: 40px;'>`

- Card container: `<div class='bg-primary' style='border: 1px solid #e6e6e6; border-radius: 10px; padding: 28px 24px; box-shadow: 0 6px 18px rgba(0,0,0,0.06); transition: all 0.2s ease;'>` (use `bg-primary` class for white background)
- Hover state: Add `onmouseover="this.style.borderColor='var(--main-color)'; this.style.boxShadow='0 8px 24px rgba(0,0,0,0.1)'" onmouseout="this.style.borderColor='#e6e6e6'; this.style.boxShadow='0 6px 18px rgba(0,0,0,0.06)'"` for subtle interaction
- Ensure consistent vertical alignment: all card titles start at the same height, number badges align horizontally, padding is generous (minimum 28px vertical, 24px horizontal)

**Card Visual Hierarchy:**

1. **Step number badge (visual anchor):** Use circular badge with Secondary color: `<div class='bg-secondary' style='width: 48px; height: 48px; border-radius: 50%; color: white; display: inline-flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 700; margin-bottom: 16px;'>[Number]</div>` (use `bg-secondary` class for step number background - this is the visual anchor)

2. **Card title (strongest text):** Use `<h3 class='text-primary' style='font-size: 22px; font-weight: 700; margin-bottom: 14px; margin-top: 0;'>` for step titles within cards (use `text-primary` class for strong title color)

3. **Card description (softer, secondary):** Reduce paragraph text under each step to 2-3 lines max (approximately 30-50 words per step description), with `style='font-size: 18px; font-weight: 400; line-height: 1.8; color: #666; margin-bottom: 0;'` (slightly muted text color for hierarchy)

4. **Card structure with clear hierarchy:** Each step card should follow this order: Step number badge (largest visual element) → Title (strongest text) → Description (softer text), with generous vertical spacing (16px between badge and title, 14px between title and description)

5. **Card hover state:** Include hover interaction: `onmouseover="this.style.borderColor='var(--main-color)'; this.style.boxShadow='0 8px 24px rgba(0,0,0,0.1)'" onmouseout="this.style.borderColor='#e6e6e6'; this.style.boxShadow='0 6px 18px rgba(0,0,0,0.06)'"` for subtle depth

6. **Alignment:** Ensure all step number badges align horizontally across cards, all titles start at the same vertical height, and padding is consistent (28px vertical, 24px horizontal minimum)

**Section-Level Color Anchor:**
- Add a thin horizontal divider line under major section headers (H2) using: `<div class='bg-main' style='width: 60px; height: 3px; margin-bottom: 32px; border-radius: 2px;'></div>` to visually frame the section content (use `bg-main` class for section-level color anchor)
- Accordion FAQs: `<details style='border: 1px solid #e5e5e5; border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;'><summary class='text-primary' style='font-size: 16px; font-weight: 700; cursor: pointer;'>Question</summary><p style='font-size: 18px; line-height: 1.8; margin: 12px 0 0 0;'>Answer</p></details>` (use `text-primary` class for summary)

**Consistency:**
- Maintain consistent spacing: small gaps (12-16px), medium gaps (24-32px), large gaps (48-64px)
- Ensure all styling is inline (no external stylesheets or `<style>` blocks)
- Use semantic HTML5 tags: `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<div>` with inline CSS styling
- Use color classes (`bg-primary`, `bg-secondary`, `bg-main`, `text-primary`) where specified; use inline styles for all other styling
- Use `<strong>` sparingly for critical terms
- Paragraph breaks: use `</p><p>`, not `<br>`

**Structure hierarchy**
- One `<h1>` only (page title)
- Multiple `<h2>` tags (service sections + FAQs heading)
- `<h3>` only within featured snippet and FAQ questions
- Proper nesting (no orphaned tags)

**Section Dividers (between every 2-3 sections):**
Add subtle visual break:
`<div style='border-top: 1px solid #e5e5e5; margin: 50px 0;'></div>`

**Neighborhood/Key Benefit Callout (optional, 1-2 per page):**
When highlighting neighborhood-specific info or major benefits:
`<div style='padding: 16px 20px; border-left: 3px solid; border-left-color: var(--main-color); margin: 24px 0; border-radius: 4px;'>
  <p class='text-primary' style='font-size: 18px; line-height: 1.8; margin: 0;'>callout text</p>
</div>` (use Main color for border, `text-primary` class for text)

## Uniqueness Requirements
- Avoid template language: vary structure between pages; rotate patterns every 3-5 pages; use different local factors (climate, building types, regulations, demographics); change action words and phrasing
- Local specificity: reference actual neighborhoods; include city-specific factors (weather, building codes, local trends, area characteristics); avoid generic phrases like "in your area" or "locally"
- Quality checks: meta description 150-160 characters; title tag 55-60 characters; description < 20 words (one sentence); slug URL-safe (lowercase, hyphens only); all metadata includes category + city; HTML valid; no repetitive phrasing across content and metadata

## Output Instructions
- Return ONLY valid JSON with no additional text
- Field names must match exactly: content, meta_description, slug, title_tag, description
- No markdown code fences (no ```json wrapper)
- Must be immediately parseable by JSON.parse() with zero preprocessing
- Use single quotes for all attributes and inline styles to avoid escape characters
- Use \n for line breaks between HTML elements within the content string
- All HTML tags must be properly closed and include inline styles as specified
- Enclose the entire content in `<div style='margin: 0 auto; padding: 0 20px; font-family: sans-serif; max-width: 900px;'>`
- Generate clean, semantic HTML with all styling inline for direct paste into HTML editors
- Avoid escape sequences; return literal HTML characters
- Make the layout feel natural and flowing rather than blocky; vary spacing and phrasing while keeping the inline styles consistent

## Expected Output Schema
```json
{
  "content": "valid html",
  "meta_description": "string",
  "slug": "string",
  "title_tag": "string",
  "description": "string"
}
```

## Critical Formatting Requirements

<!-- ✅ ADDED: No-timeline rule — secondary enforcement point at output validation stage -->
- **NO TIMELINES:** Never include any time estimates, durations, turnaround times, scheduling windows, or completion timeframes anywhere in the content, metadata, or any field. This is a hard rule with no exceptions.
- Return raw JSON only—no markdown code fences; no additional commentary
- The output must be immediately parseable by JSON.parse() with no preprocessing
- All HTML tags must be properly closed and include inline styles as specified
- Use semantic HTML5 tags: `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<ol>`, `<li>` with inline CSS styling
- Enclose the entire content in `<div style='margin: 0 auto; padding: 0 20px; font-family: sans-serif; max-width: 900px;'>`
- Generate clean, semantic HTML with all styling inline for direct paste into HTML editors
- Use single quotes for all attributes and inline styles to avoid escape characters
- Avoid escape sequences; return literal HTML characters
- Make the layout feel natural and flowing rather than blocky; vary spacing and phrasing while keeping the inline styles consistent
- All five fields must be present: content, meta_description, slug, title_tag, description
- HTML must be valid and properly nested
