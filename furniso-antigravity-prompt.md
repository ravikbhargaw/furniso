# Furniso — Full Website Build Prompt for Antigravity

## Project Overview

Build a complete, production-ready website for **Furniso** — a factory-direct custom soft furnishings brand based in Bangalore, India. Furniso manufactures and supplies custom sofas, upholstered chairs, bed headboards, and similar upholstered furniture pieces to order.

**Target clients:** Coworking space operators, hospitality businesses (hotels, boutique stays), cafes and restaurants, and interior designers / architects.

**Positioning:** Factory-direct means no middleman markup, full customisation control (fabric, dimensions, finish), and direct communication with the manufacturing team. This is not a retail store — every piece is made to order.

**Brand feel:** Clean, minimal, modern. White and light grey dominant palette. Elevated but approachable. Think: a premium fabric studio, not a furniture showroom. The brand should feel completely distinct from any other vendor or supplier site — no dark themes, no industrial tones.

---

## Brand Identity

### Logo
- Wordmark: **FURNISO** in a clean, slightly spaced uppercase sans-serif
- Tagline: *Made to order. Crafted to last.*
- Use the logo in dark ink on light backgrounds, and white on any dark or image backgrounds

### Colour Palette
| Role | Name | Hex |
|---|---|---|
| Background | White | `#FFFFFF` |
| Surface | Off-white | `#F8F8F6` |
| Surface 2 | Warm grey | `#EEECE8` |
| Text primary | Ink | `#1C1C1A` |
| Text secondary | Mid grey | `#888884` |
| Text muted | Muted | `#B2B0AB` |
| Accent | Warm clay | `#B5714A` |
| Accent light | Clay tint | `#F5EDE8` |
| Border | Light rule | `#E2E0DB` |

### Typography
- **Display / Headlines:** Cormorant Garamond (Google Font) — elegant, editorial, fabric-world feel. Use Italic for hero statements.
- **Body / UI:** Inter (Google Font) — clean, functional, modern
- **Type scale:**
  - Hero headline: 52–64px, Cormorant Garamond Italic, weight 400
  - Section headline: 32–40px, Cormorant Garamond, weight 400
  - Sub-headline: 18–20px, Inter, weight 400
  - Body: 15px, Inter, weight 300–400
  - Label / eyebrow: 10–11px, Inter, weight 500, letter-spacing 0.2em, UPPERCASE
  - Caption: 12px, Inter, weight 300

### Spacing and Layout
- Max content width: 1200px, centred
- Section padding: 88px top/bottom on desktop, 56px on mobile
- Generous whitespace — this is a minimal brand, let sections breathe
- Use thin hairline rules (`1px solid #E2E0DB`) to divide sections, not heavy borders or shadows
- No border-radius on cards, buttons, or containers — keep all corners square
- No box shadows

### Buttons
- **Primary:** Background `#1C1C1A`, text white, no border-radius, padding 14px 32px, uppercase label, 11px, letter-spacing 0.14em
- **Secondary:** Transparent background, border `1px solid #1C1C1A`, same sizing
- **Accent:** Background `#B5714A`, text white — use sparingly, for one key CTA per page
- Hover: slight opacity shift (0.85), no animations

### Eyebrow labels
All section eyebrows follow this pattern: a short horizontal rule (20px, clay colour) + label text in uppercase small caps. Example: `— OUR PRODUCTS`

---

## Site Structure — Pages

### 1. Home (`index.html`)
### 2. Products (`products.html`)
### 3. How It Works (`how-it-works.html`)
### 4. About (`about.html`)
### 5. Contact (`contact.html`)

All pages share the same nav and footer. Build nav as a sticky top bar.

---

## Page 1 — Home (`index.html`)

### Navigation (shared across all pages)
- Left: FURNISO wordmark logo (links to home)
- Right: Nav links — Products | How It Works | About | Contact
- Far right: CTA button — "Request a Quote" (primary style, links to contact page)
- Background: White, border-bottom: 1px solid `#E2E0DB`
- Height: 64px
- On scroll: stays sticky, no background change needed
- Mobile: Hamburger menu, full-screen overlay

---

### Hero Section
- Full-width section, white background
- Left column (60%): Text content
- Right column (40%): A large fabric swatch / texture image — use a warm linen or bouclé texture placeholder image

**Eyebrow:** `— FACTORY DIRECT · BANGALORE`

**Headline (Cormorant Garamond Italic, ~56px):**
*Every piece, made for the space it will live in.*

**Sub-text (Inter, 15px, mid grey):**
Furniso manufactures custom sofas, upholstered chairs, and bed headboards directly from our factory — built to your specification, in the fabric and dimensions you choose. No showroom markup. No compromise.

**CTAs:**
- Primary: "Explore Products" → products.html
- Secondary: "How It Works" → how-it-works.html

**Below the fold — thin horizontal rule, then a single strip of 4 stats:**
| Stat | Label |
|---|---|
| 100% | Custom — every order |
| 14–21 days | Average lead time |
| 50+ | Fabric options |
| Zero | Middleman markup |

---

### Section 2 — Product Categories (Home teaser)

**Eyebrow:** `— WHAT WE MAKE`

**Headline:** Built for commercial and hospitality spaces

**Sub:** From boutique hotel lobbies to coworking lounges — we make furniture that holds up to real use, and looks the part doing it.

**3-column grid of product category cards:**

Each card:
- Square-ratio placeholder image (warm background)
- Category name in Cormorant Garamond, 20px
- One-line description in Inter, 13px, mid grey
- Link: "View →" in clay accent colour

Categories:
1. **Sofas & Sectionals** — Modular and fixed-frame sofas. Fully upholstered, custom dimensions.
2. **Upholstered Chairs** — Lounge chairs, armchairs, accent chairs. Fabric and foam spec to your brief.
3. **Bed Headboards** — Panel and buttoned headboards for hospitality. Single to king, custom height.

Below the grid: centred secondary button — "See All Products" → products.html

---

### Section 3 — Why Furniso (differentiator)

**Eyebrow:** `— THE FURNISO DIFFERENCE`

**Headline:** What factory-direct actually means for you

**Layout:** 2-column grid — left column is a warm grey surface box with a pull quote, right column is a list of 4 differentiators

**Pull quote (left, Cormorant Garamond Italic, 22px):**
*"We don't stock furniture. We build it — for your space, your spec, your timeline."*

**Right column — 4 points (each with a thin top rule and eyebrow number):**

1. **No showroom markup** — You pay for material, craft, and delivery. Not for our real estate.
2. **Your specification** — Dimensions, fabric, foam density, leg finish. You choose every variable.
3. **Direct communication** — Your brief goes straight to the production team. No account manager in between.
4. **Commercial grade** — FR-rated foam, reinforced frames, contract-spec fabrics available on request.

---

### Section 4 — Who We Work With

**Eyebrow:** `— OUR CLIENTS`

**Headline:** Made for spaces that demand more than off-the-shelf

**4 client type cards in a horizontal row (light warm grey background section):**
Each card: icon (simple line), title, 2-line description

1. **Coworking Operators** — Lounge seating, breakout sofas, and cabin chairs that hold up to daily commercial use.
2. **Hotels & Boutique Stays** — Custom headboards and room chairs built to your room spec and brand palette.
3. **Cafes & Restaurants** — Banquette seating, accent chairs, and host furniture in fabric or leather-look.
4. **Architects & Interior Designers** — Factory access for specification-grade pieces. Custom finish samples available.

---

### Section 5 — Process Teaser (3 steps)

**Eyebrow:** `— HOW IT WORKS`

**Headline:** From brief to delivery in 3 steps

**3-step horizontal strip (white background, thin border top and bottom):**

Each step: large Cormorant number (01 / 02 / 03) in light grey, bold step name, 2-line description

1. **Share your brief** — Tell us the piece, the dimensions, the fabric direction, and the quantity. We'll confirm feasibility within 24 hours.
2. **Approve the spec** — We share a full spec sheet with material samples, dimensions, and lead time. You approve before a single cut is made.
3. **We build and deliver** — Production begins on approval. We deliver to site with installation support available on request.

**CTA below:** "See the full process" → how-it-works.html

---

### Section 6 — CTA Banner

Full-width section, background: `#1C1C1A` (dark ink)

**Headline (Cormorant Garamond, white, 38px):**
Have a project in mind?

**Sub (Inter, white at 50% opacity, 15px):**
Share the space, the scale, and the timeline — we'll come back with a spec and a number.

**Button:** "Request a Quote" → contact.html (accent clay button)

---

### Footer (shared across all pages)

- Top row: Logo left | Nav links centre | "Request a Quote" button right
- Bottom row: © 2026 Furniso. All rights reserved. | Bengaluru, India | furniso.in
- Background: `#F8F8F6`, border-top: `1px solid #E2E0DB`
- Font: Inter 11px, muted grey

---

## Page 2 — Products (`products.html`)

### Hero
- Page hero: light warm grey background, no image
- Eyebrow: `— OUR PRODUCTS`
- Headline: *Furniture built to your specification*
- Sub: Every piece is made to order. Choose the form, the fabric, the finish.

---

### Product Category Sections

Build each category as a full-width section with alternating layout (image left / text right, then text left / image right).

---

#### Category 1 — Sofas & Sectionals

**Eyebrow:** `— SOFAS & SECTIONALS`
**Headline:** Structured comfort. Commercial durability.
**Body:** From 2-seaters to large L-shaped sectionals, every sofa is built on a hardwood frame with high-density foam and your choice of upholstery. Suitable for coworking lounges, hotel lobbies, and hospitality breakout zones.

**Spec list (right column or below text):**
- Available in 2-seater, 3-seater, L-shape, and modular configurations
- High-density foam (32D–40D) — commercial grade available
- Leg options: solid wood (walnut/oak stain), metal (matte black/chrome)
- 50+ fabric options including bouclé, linen, velvet, and leather-look
- Custom dimensions accepted — share your floor plan

**Placeholder image:** warm linen-textured background, furniture silhouette

---

#### Category 2 — Upholstered Chairs

**Eyebrow:** `— UPHOLSTERED CHAIRS`
**Headline:** Lounge chairs that earn their place.
**Body:** Armchairs, accent chairs, and lounge chairs for hospitality, coworking breakout zones, and reception areas. Built on steel or hardwood frames, fully upholstered in your chosen fabric.

**Spec list:**
- Styles: armchair, lounge, barrel, accent, wingback
- Frame: steel or hardwood — both commercial grade
- Seat height customisation available
- Suitable for FR (fire-rated) fabric specification on request
- Minimum order: 4 units per fabric/finish combination

---

#### Category 3 — Bed Headboards

**Eyebrow:** `— BED HEADBOARDS`
**Headline:** The first thing a guest sees.
**Body:** Panel, buttoned, and arched headboards for hotel rooms, serviced apartments, and boutique stays. Built to your room dimensions, in any fabric from our range.

**Spec list:**
- Single, double, queen, and king sizes
- Standard and tall-height options (120cm to 180cm)
- Buttoned, panelled, or plain face styles
- Fabric: velvet, linen, faux leather, bouclé — full range available
- Wall-mounted or divan-base fixing options
- Minimum order: 5 units per style/fabric

---

#### Category 4 — Custom & Contract

**Eyebrow:** `— CUSTOM & CONTRACT`
**Headline:** If you can sketch it, we can build it.
**Body:** Working on a project that doesn't fit a standard category? Banquette seating, booth sofas, window seats, ottomans, custom daybeds — bring the brief and we'll work through the spec with you.

**CTA:** "Talk to us about your project" → contact.html

---

### Fabric & Finish Guide (bottom of Products page)

**Eyebrow:** `— MATERIALS`
**Headline:** 50+ fabrics. Every finish.

**3-column grid of material categories:**
1. **Bouclé & Textured Weaves** — Tactile, contemporary, excellent for lounge and hospitality settings
2. **Linen & Natural Blends** — Breathable, relaxed finish, suited to boutique and café environments
3. **Velvet** — Rich, dramatic, ideal for accent chairs and headboards
4. **Leather-look (PU)** — Easy-clean, commercial-grade, available in 12 colours
5. **Contract FR Fabrics** — Fire-rated upholstery for hotel and commercial compliance requirements
6. **Custom Fabric Supply** — You source, we upholster. We work with customer-supplied fabric on request.

**CTA below:** "Request a fabric sample pack" → contact.html (link text, not button)

---

## Page 3 — How It Works (`how-it-works.html`)

### Hero
- White background
- Eyebrow: `— THE PROCESS`
- Headline (Cormorant Garamond Italic): *No mystery. Just craft.*
- Sub: Every order follows the same clear process — from brief to factory floor to your site.

---

### Full Process — 5 Steps

Each step is a full-width horizontal section with alternating text/image layout. Step number in large Cormorant Garamond, muted.

**Step 01 — Share Your Brief**
Tell us what you need: the piece type, quantity, approximate dimensions, fabric direction, and timeline. Use the contact form or WhatsApp — whichever is easier. We respond within 24 hours with initial feasibility and a rough cost indication.

**Step 02 — Spec Confirmation**
We send a full specification sheet: exact dimensions, material callouts, foam grade, leg/base finish, and production lead time. This is your reference document — nothing goes to the factory floor until you sign off on it.

**Step 03 — Fabric Selection**
Choose from our in-house range of 50+ fabrics, or supply your own. For larger orders we can courier physical swatches to your office or site. FR-rated and contract-grade options are clearly marked.

**Step 04 — Production**
Once the spec is approved and the deposit received, your order enters the production queue. Lead time is typically 14–21 working days depending on order size and complexity. We send a mid-production update with photos if requested.

**Step 05 — Delivery & Installation**
We deliver to site in Bangalore and surrounding areas. Packaging is protective and easy to remove on site. Installation support is available on request for large commercial orders.

---

### FAQ Section

**Eyebrow:** `— COMMON QUESTIONS`
**Headline:** What most clients ask before they start

Build as a clean accordion or stacked Q&A list. Questions:

1. **What's the minimum order quantity?**
   For standard pieces, minimum is 4 units per style and fabric combination. For fully custom or one-off pieces, we'll discuss on a case-by-case basis.

2. **Can I see a sample before the full order goes into production?**
   Yes — for orders above 10 units we build one approval sample before full production begins. Sample cost is adjusted against the final order.

3. **Do you deliver outside Bangalore?**
   Currently we primarily serve Bangalore and nearby cities. For outstation orders, we arrange freight on actuals. Contact us to confirm your location.

4. **What if I have my own fabric?**
   We work with customer-supplied fabric. You'll need to supply the quantity we specify (we'll calculate this from the spec), and we'll upholster to the same standard as our in-house range.

5. **What are your payment terms?**
   50% deposit on order confirmation, balance before dispatch. For ongoing commercial relationships we can discuss revised terms.

6. **How do I get started?**
   Use the contact form, email, or WhatsApp number on the contact page. Tell us the piece, the quantity, and a rough timeline — that's enough to start the conversation.

---

### CTA Banner (same dark ink style as Home)
Headline: *Ready to place an order?*
Sub: Share your brief and we'll come back with a full spec and quote within 24 hours.
Button: "Get a Quote" → contact.html

---

## Page 4 — About (`about.html`)

### Hero
- Warm grey surface background
- Eyebrow: `— ABOUT FURNISO`
- Headline (Cormorant Garamond Italic): *Factory-direct. No shortcuts.*
- Sub: Furniso was built on one idea — that custom furniture shouldn't cost the earth or take months to arrive. We connect clients directly to the factory floor, cutting the chain without cutting quality.

---

### Story Section

**Headline:** Why we exist

**Body copy (2–3 paragraphs):**

Most furniture you see in commercial spaces went through three or four hands before it reached you — a brand, a distributor, a showroom, a dealer. Each hand added a margin. By the time it arrived, you paid retail for a product that cost a fraction of that to make.

Furniso was set up to close that gap. We work directly with a manufacturing setup in Bangalore that has been producing upholstered furniture for over a decade. By going direct — and keeping our operations lean — we pass real cost savings to clients while maintaining full specification control.

Every piece is made to order. That means no warehouse, no dead stock, no compromise on dimensions or fabric. It also means we're genuinely invested in getting the spec right before production starts.

---

### What We Stand For — 3 values

**Eyebrow:** `— OUR VALUES`

**3-column layout:**

1. **Transparency** — You see the full spec before we build. No surprises at delivery.
2. **Craft over speed** — We won't rush a piece to hit a deadline. We'll plan the timeline properly from the start.
3. **Direct relationships** — You talk to the people making decisions. No layers, no account managers.

---

### Who We Work Best With

**Eyebrow:** `— OUR CLIENTS`
**Headline:** We're a fit if you value specification over selection

**Body:** Furniso works best with clients who know what they want — or who are open to working through a spec. We're not the right choice if you need to walk into a showroom and pick something off the floor today. We are the right choice if you care about quality, customisation, and getting real value for your budget.

---

### CTA Banner
Same dark ink style.
Headline: *Let's talk about your next project.*
Sub: Whether it's 4 chairs or 400 — start with a brief.
Button: "Get in Touch" → contact.html

---

## Page 5 — Contact (`contact.html`)

### Hero
- White background
- Eyebrow: `— GET IN TOUCH`
- Headline (Cormorant Garamond): *Start with a brief.*
- Sub: Tell us the piece, the quantity, and the timeline — we'll take it from there.

---

### Contact Layout — 2 columns

**Left column — Contact form:**

Fields (all text inputs, square corners, 1px border, light grey):
- Name *
- Company / Project name
- Email address *
- Phone number
- What are you looking for? (dropdown: Sofa / Upholstered Chair / Headboard / Custom / Multiple items)
- Approximate quantity *
- Tell us more (textarea — brief description, dimensions if known, timeline)
- Submit button: "Send Enquiry" (primary dark button, full width)

Below form: small muted text — *We respond to all enquiries within 24 hours.*

**Right column — Direct contact info:**

**WhatsApp (primary):**
+91 [number]
"Fastest way to reach us — share a reference image, a sketch, or just a message."

**Email:**
hello@furniso.in

**Location:**
Bengaluru, Karnataka, India
(Factory visits by appointment only)

**Working hours:**
Monday – Saturday, 10am – 6pm IST

---

### Fabric Sample Request

**Below the main contact section, a warm grey strip:**

**Headline:** Want to see the fabrics first?

**Body:** For large commercial orders, we can send a physical sample pack of up to 8 fabric swatches to your office or site — at no charge.

**CTA:** Email us at samples@furniso.in with your delivery address and project brief.

---

## Global Design Rules for Antigravity

1. **No border-radius anywhere** — all corners are square (0px)
2. **No box-shadows** — use border rules only
3. **No gradients** — flat colour only
4. **No icons from icon libraries** — use simple SVG line icons only, drawn in the same stroke weight
5. **Image placeholders:** use warm neutral backgrounds (`#EEECE8`) with the category label centred in muted text — do not use stock photo services or random placeholder images
6. **Hover states:** opacity change only (0.75–0.85) — no colour shifts, no scale transforms
7. **Transitions:** 0.2s ease on opacity only — no slide or bounce animations
8. **Mobile:** single column layout, navigation collapses to hamburger, all padding reduces to 20px horizontal
9. **Font loading:** Google Fonts — Cormorant Garamond (weights: 400, 400 italic) and Inter (weights: 300, 400, 500, 600)
10. **Active nav link:** clay underline (`2px solid #B5714A`) beneath the current page link
11. **All links:** no underline by default, clay colour on hover
12. **Forms:** inputs have `1px solid #E2E0DB` border, `4px` padding top/bottom, full-width on mobile, focus state: `1px solid #1C1C1A` (no glow, no colour)
13. **Section alternation:** alternate between white (`#FFFFFF`) and off-white (`#F8F8F6`) backgrounds across sections — do not use the warm grey (`#EEECE8`) more than once per page outside of cards/strips
14. **WhatsApp CTA:** include a floating WhatsApp button (bottom right, fixed, clay accent background) visible on all pages — links to `https://wa.me/91XXXXXXXXXX` — replace number before going live

---

## Content and Copy Notes

- All copy should be direct, confident, and without hype. No exclamation marks. No "world-class" or "best-in-class" language.
- Write from the client's side — focus on what they get, not what Furniso does
- All headlines in Cormorant Garamond — can be sentence case, not all-caps
- Eyebrow labels always UPPERCASE, always preceded by the `—` dash element
- Avoid the word "bespoke" — use "custom" or "made to order" instead
- Avoid "luxury" — the brand is premium but functional, not aspirational in a lifestyle sense
- Price is never mentioned on the site — all pricing via quote only

---

## Technical Requirements

- Pure HTML/CSS — no JavaScript frameworks
- Single CSS file (`furniso.css`) linked from all pages
- Google Fonts loaded via `<link>` tag in `<head>`
- Mobile-first responsive CSS using media queries at 768px breakpoint
- All images referenced as relative paths — use `/images/` folder
- `<meta>` tags on every page: title, description, viewport
- Favicon: simple "F" lettermark in clay on white background
- WhatsApp float button: position fixed, bottom 24px right 24px, z-index 999
- Contact form: HTML5 form with `action` pointing to a form handler or `mailto:` fallback — Antigravity to configure backend
- All anchor links scroll smoothly (`scroll-behavior: smooth` on html element)

---

## File Structure

```
furniso.in/
├── index.html
├── products.html
├── how-it-works.html
├── about.html
├── contact.html
├── furniso.css
├── favicon.ico
└── images/
    ├── logo.svg
    ├── hero-texture.jpg         ← warm linen/fabric texture
    ├── sofa-placeholder.jpg
    ├── chair-placeholder.jpg
    ├── headboard-placeholder.jpg
    └── custom-placeholder.jpg
```

---

*End of Furniso build prompt. All decisions above are final — build to spec without deviation. Replace placeholder phone numbers and email addresses before going live.*
