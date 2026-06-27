# Design System: JobKaro Premium Opportunity Ecosystem

Developer handoff for the JobKaro platform. **Source of truth for tokens:** `src/app/globals.css`.

---

## 1. Color Model (Material 3)

This project uses a Material 3–style token system. Do not confuse **primary** with **primary-container**.

| Token | HEX | Usage |
| :--- | :--- | :--- |
| **primary** | `#006c4b` | Buttons, links, logo, active nav, timeline dots |
| **on-primary** | `#ffffff` | Text on primary surfaces |
| **primary-container** | `#03a575` | Button hover, chips, tags, selection highlight |
| **on-primary-container** | `#003120` | Text on container chips |
| **primary-fixed** | `#7bfac3` | Accent CTAs on dark surfaces (sponsored cards) |
| **on-primary-fixed** | `#002114` | Text on primary-fixed |

| Token | HEX | Usage |
| :--- | :--- | :--- |
| **secondary** | `#515f73` | Secondary text, meta labels |
| **secondary-container** | `#d2e1f9` | Result tags, chip backgrounds |
| **on-secondary-container** | `#566478` | Text on secondary containers |

| Token | HEX | Usage |
| :--- | :--- | :--- |
| **tertiary-container** | `#7f93a8` | Internship tags |
| **tertiary-fixed** | `#d0e5fc` | Prep tools panel background |

| Token | HEX | Usage |
| :--- | :--- | :--- |
| **error** | `#ba1a1a` | Urgent deadlines, timer icon |
| **error-container** | `#ffdad6` | Urgent deadline card background |
| **on-error-container** | `#93000a` | Text on error containers |

| Token | HEX | Usage |
| :--- | :--- | :--- |
| **background / surface** | `#f7f9ff` | Page background, header |
| **surface-container-lowest** | `#ffffff` | Cards |
| **surface-container-low** | `#edf4ff` | Hover tints, footer |
| **surface-container-high** | `#dde9fa` | Popular search chips |
| **on-surface** | `#101d29` | Primary text |
| **on-surface-variant** | `#3d4a42` | Footer links, tag meta |
| **outline-variant** | `#bccac0` | Borders, timeline dashes |
| **inverse-surface** | `#26313e` | Sponsored cards |
| **inverse-on-surface** | `#e8f1ff` | Text on inverse surfaces |

---

## 2. Typography

| Role | Font | Tailwind | Size |
| :--- | :--- | :--- | :--- |
| Headlines | Hanken Grotesk | `font-sans` | `text-display-lg`, `text-headline-md` |
| Body | Inter | `font-body` | `text-base`, `text-lg` |
| Labels / chips | Geist | `font-label` | `text-label-sm` (13px) |
| Countdown / mono | Geist Mono | `font-mono` | `text-label-sm` |

| Level | Size | Weight | Tracking |
| :--- | :--- | :--- | :--- |
| Display LG | 48px / 32px mobile | 700 | -0.02em |
| Headline MD | 24px | 600 | -0.01em |
| Body MD | 16px | 400 | 0 |
| Label SM | 13px | 500 | 0.02em |

---

## 3. Surfaces & Elevation

Depth uses **low-contrast outlines** and **tonal layering**, not heavy shadows.

- **Level 0:** `background` (`#f7f9ff`)
- **Level 1 (cards):** `surface-container-lowest` + `border-outline-variant`
- **Hover:** `-translate-y-0.5`, `shadow-md`
- **Active/focus:** `ring-2 ring-primary/20`

Shadows:
- **shadow-sm:** subtle card hover
- **shadow-md:** `0 4px 20px rgba(7, 22, 39, 0.05)`
- **shadow-primary-ring:** active timeline dot glow

---

## 4. Border Radius

| Token | Value | Usage |
| :--- | :--- | :--- |
| sm | 4px | — |
| DEFAULT | 8px | Inputs, small elements |
| md | 12px | — |
| lg | 16px | Cards |
| xl | 24px | Search bar, large containers |

---

## 5. Buttons

Use `@/components/ui/Button` variants — do not override variant colors with `className`.

| Variant | Use case |
| :--- | :--- |
| **primary** | Main CTAs (search, default actions) |
| **secondary** | Secondary solid actions |
| **outline** | Neutral bordered actions |
| **outline-primary** | Bordered with primary text ("View All") |
| **ghost** | Text-only on light backgrounds |
| **surface** | White button on primary card (Telegram) |
| **inverse-outline** | Outlined white on primary card (WhatsApp) |
| **accent** | Mint CTA on dark surfaces (sponsored) |

Primary button: `bg-primary` → hover `bg-primary-container`.

---

## 6. Spacing & Layout

- **Max width:** 1280px (`max-w-7xl`)
- **Mobile margin:** 16px (`px-4`)
- **Desktop margin:** 40px (`md:px-10`)
- **Section gap:** 32px (`py-8`, `space-y-8`)
- **Grid:** 12-column on desktop; sidebar 4 cols, main 8 cols

---

## 7. Component Patterns

| Component | Tokens |
| :--- | :--- |
| **Bento cards** | `bento-card-gradient`, `border-outline-variant`, `rounded-xl` |
| **Opportunity cards** | `surface-container-lowest`, hover `surface-container-low` |
| **Notification tags** | `font-mono text-label-sm`, container color per type |
| **Timeline dots** | Active: `bg-primary shadow-primary-ring`; past: `bg-outline-variant` |
| **Countdown chips** | Urgent: `text-error` + `font-mono`; standard: `text-secondary` |
| **Search bar** | `glass-search`, `border-outline-variant` |

---

## 8. Design Principles

- **Visual hierarchy:** Large Hanken Grotesk headlines; emerald reserved for action.
- **Primary vs container:** Dark green (`#006c4b`) drives structure; bright green (`#03a575`) signals hover and progress.
- **Whitespace:** 32px+ between sections; tight 16px inside cards.
- **Accessibility:** WCAG AA contrast; 44px minimum touch targets.
- **Interaction:** 200ms transitions; subtle `-translate-y-0.5` on card hover.

---

## 9. Implementation Reference

Tokens live in `src/app/globals.css` under `@theme inline`. When adding colors, extend that file — do not hardcode hex in components.

```css
/* Key relationship */
--color-primary: #006c4b;           /* brand / actions */
--color-primary-container: #03a575; /* hover / chips */
```

Fonts loaded in `src/app/layout.tsx`: Hanken Grotesk, Inter, Geist, Geist Mono.
