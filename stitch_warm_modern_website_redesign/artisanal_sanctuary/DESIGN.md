---
name: Artisanal Sanctuary
colors:
  surface: '#f8f9ff'
  surface-dim: '#c3dcfe'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e5efff'
  surface-container-high: '#dbe9ff'
  surface-container-highest: '#d1e4ff'
  on-surface: '#001d36'
  on-surface-variant: '#4c463e'
  inverse-surface: '#18324c'
  inverse-on-surface: '#e9f1ff'
  outline: '#7d766d'
  outline-variant: '#cfc5bb'
  surface-tint: '#685d4d'
  primary: '#685d4d'
  on-primary: '#ffffff'
  primary-container: '#b7a997'
  on-primary-container: '#483e30'
  inverse-primary: '#d3c4b1'
  secondary: '#615e58'
  on-secondary: '#ffffff'
  secondary-container: '#e7e2da'
  on-secondary-container: '#67645e'
  tertiary: '#795917'
  on-tertiary: '#ffffff'
  tertiary-container: '#cea55c'
  on-tertiary-container: '#553b00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f0e0cd'
  primary-fixed-dim: '#d3c4b1'
  on-primary-fixed: '#221a0e'
  on-primary-fixed-variant: '#4f4537'
  secondary-fixed: '#e7e2da'
  secondary-fixed-dim: '#cac6be'
  on-secondary-fixed: '#1d1c17'
  on-secondary-fixed-variant: '#494741'
  tertiary-fixed: '#ffdea8'
  tertiary-fixed-dim: '#ebc074'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4200'
  background: '#f8f9ff'
  on-background: '#001d36'
  surface-variant: '#d1e4ff'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 3.5rem
    fontWeight: '600'
    lineHeight: '1.15'
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 2.5rem
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: '1.35'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.65'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a welcoming, grounded sanctuary aesthetic for a modern holistic therapy and clinical massage environment. The design movement marries organic minimalism with high-end editorial warmth. It replaces clinical sterility with natural materials, restorative earth tones, tactile depth, and refined typography.

The target audience seeks refuge from modern sensory overload—individuals seeking relief from chronic physical tension, prenatal recovery, deep fascia release, and somatic balance. The visual language evokes feelings of safety, deliberate slowness, therapeutic excellence, and serene quiet luxury.

Key visual pillars:
- **Serene Warmth:** Grounded earth tones and warm cream layered over taupe, evoking linen sheets, smooth stone, and botanicals.
- **Editorial Poise:** High-contrast, elegant serif typography conveys mastery, clinical heritage, and artisanal attention to detail.
- **Generous Respite:** Expansive negative space and intentional vertical breathing room allow clients to decompress while browsing modalities and booking care.

## Colors

The palette draws directly from organic tactile elements: sun-bleached linen, natural stone, botanical gold, and deep midnight waters. 

- **Primary Background (`#B7A997`):** Warm Taupe serves as the canvas foundation, instantly softening visual glare and creating a soothing envelopment.
- **Secondary Surface (`#F2EDE5`):** Warm Cream defines elevated container cards, treatment module wrappers, and interactive panels, offering luminous contrast against the taupe background.
- **Deep Anchor (`#0F2A44`):** Navy provides grounded authority, utilized for primary headlines, prominent button states, and high-emphasis anchors.
- **Charcoal Readability (`#2A2D31`):** Applied to running body copy and therapeutic descriptions to maintain exceptional reading comfort without harsh starkness.
- **Accent Gold (`#B08A44`):** Antique Gold is reserved for deliberate focal points: treatment badges, active selection borders, key CTAs, and subtle botanical iconography.
- **Subdued Harmonizers (`#3D5570` & `#7A8CA3`):** Slate Blue and Blue Gray serve for subtle borders, secondary labels, divider lines, and inactive toggle states.

## Typography

Typography establishes an intentional dialogue between classical artisanal beauty and crisp contemporary usability.

- **Headlines (Playfair Display):** Conveys the poise and clinical craftsmanship of holistic bodywork. Large titles should utilize italicized accent spans for therapeutic phrasing (e.g., *Life's Journey*, *Mind and Somatic Balance*) to create editorial distinction.
- **Body & Controls (Plus Jakarta Sans):** Modern, geometric, and clear, ensuring session lengths, rates, anatomical modalities, and scheduling fields remain effortless to absorb.
- **Eyebrow & Category Badges:** Small caps or tracked uppercase in `label-sm` with antique gold or slate coloring should introduce modality categories, signaling careful curation.

## Layout & Spacing

The layout model prioritizes unhurried pacing, clear focal paths, and structured modular blocks.

- **Grid Structure:** A 12-column desktop grid centered at a max width of 1200px. Single-column stacked flows are prioritized on mobile viewports (`< 768px`) to maintain vertical tranquility.
- **Breathing Rhythm:** Sections are separated by generous vertical margins (`margin` to double `margin`), ensuring visitors never feel rushed or presented with clutter.
- **Content Stacking:** Modal lists, service cards, and practitioner disclosures stack with consistent `space-lg` to `space-xl` gaps, matching the calm, methodical rhythm of a clinical consultation.

## Elevation & Depth

Depth is established through soft surface stacking, delicate gold and slate outlines, and subtle ambient shadows rather than harsh physical extrusion.

- **Base Layer:** The taupe canvas (`#B7A997`) grounds the entire viewport.
- **Card Containers:** Warm cream panels (`#F2EDE5`) float atop the taupe canvas. They employ a soft ambient shadow (`box-shadow: 0 8px 24px -4px rgba(15, 42, 68, 0.06), 0 2px 6px -1px rgba(15, 42, 68, 0.04)`) to create gentle separation.
- **High-Emphasis Treatment Modules:** Interactive cards or featured offerings incorporate a refined 1px border in Antique Gold (`#B08A44`) at 35% opacity or Slate Blue (`#3D5570`) at 20% opacity.
- **Overlays & Dialogs:** Modals and bottom sheets utilize a soft blurred backdrop (`backdrop-filter: blur(8px)`) over a semi-translucent navy scrim (`rgba(15, 42, 68, 0.45)`).

## Shapes

The shape system employs roundedness level `2`, mirroring smooth river stones, handcrafted ceramics, and bodywork ergonomics.

- **Standard Elements (0.5rem / 8px):** Input fields, interactive chips, modality time pills, and select dropdowns.
- **Cards and Containers (1rem / 16px):** Service tiers, policy boxes, testimonial groupings, and booking modules.
- **Feature Modules (1.5rem / 24px):** Hero profile imagery, map containers, and celebratory promotional banners.
- **Pills:** Floating status tags (e.g., "Most Requested", "Sanctuary Open") utilize fully rounded capsule styling (`border-radius: 9999px`).

## Components

### Buttons
- **Primary Action (Antique Gold):** Background `#B08A44`, text `#FFFFFF`, rounded 0.5rem. Hover state transitions softly to `#9A7839`. Incorporates subtle 0.5px border highlight.
- **Secondary Action (Navy):** Background `#0F2A44`, text `#F2EDE5`, rounded 0.5rem. Used for deep contrast actions like "Reserve Your Treatment".
- **Ghost / Outlined:** Transparent fill, 1px border in `#3D5570` with text in `#0F2A44`. Hover introduces `#F2EDE5` tint.

### Cards & Service Tiers
- Constructed with `#F2EDE5` surfaces.
- Features top-aligned modality title (`Playfair Display`), small uppercase category tracker in `#7A8CA3`, body narrative describing touch techniques, and segmented duration selector tags (`60 Min`, `90 Min`) at the bottom.
- Subtle inner padding of `1.5rem` to `2rem`.

### Chips & Duration Selectors
- Unselected: Fill `#FFFFFF` with 1px border in `#7A8CA3` (30% opacity), text `#2A2D31`.
- Active: Fill `#0F2A44` with text `#F2EDE5`, or Antique Gold stroke with bolded typography.

### Input Fields & Selects
- Background: `#FFFFFF` or `#F2EDE5` with a delicate 1px border in `#3D5570` (30% opacity).
- Focus state: Antique Gold ring (`#B08A44`) at 2px with smooth 150ms transition.
- Labels: `Plus Jakarta Sans`, 0.875rem semi-bold in `#0F2A44`.

### Checkboxes & Radio Buttons
- Custom circular radios and rounded square checkboxes (0.25rem radius).
- Selected state fills with `#0F2A44` featuring an Antique Gold inner dot or crisp checkmark.

### Policy & Etiquette Callouts
- Outlined container cards featuring a warm taupe or cream wash, accentuated by small botanical line-art icons and subdued slate headers to communicate boundaries with grace and professionalism.