# EcoPlastics Campus Recycling Platform - Design Guidelines

## Design Approach
**Selected System**: Material Design with sustainability-focused customization
**Rationale**: Multi-role platform requiring consistent, data-rich interfaces balanced with engaging student experiences. Material's component flexibility supports complex dashboards while allowing vibrant customization for gamification elements.

**Key Design Principles**:
- Environmental authenticity over greenwashing aesthetics
- Role-appropriate information density
- Trust through transparency (real-time data, proof systems)
- Motivation through visible impact

---

## Core Design Elements

### A. Color Palette

**Primary Colors (Environmental Earth Tones)**
- Primary Green: 142 71% 45% (eco-friendly, trust)
- Deep Forest: 158 64% 28% (data/serious contexts)
- Light Variant: 142 65% 85% (backgrounds, success states)

**Secondary & Accent**
- Ocean Blue: 205 87% 48% (IoT/tech elements, coordinator tools)
- Warm Amber: 38 92% 58% (alerts, thresholds, urgent actions)
- Neutral Slate: 215 16% 47% (text, borders)

**Role-Specific Indicators**
- Student: Use primary green prominently
- Coordinator: Ocean blue accent for operational tools
- Recycler: Slate with green accents for marketplace
- Admin: Deep forest for governance sections

**Semantic Colors**
- Success: 142 71% 45%
- Warning: 38 92% 58%
- Error: 0 84% 60%
- Info: 205 87% 48%

**Dark Mode**: Maintain earth tone warmth with 220 15% 12% backgrounds, 142 25% 85% text

### B. Typography

**Font Stack**
- Primary: 'Inter' (Google Fonts) - UI, body text, data
- Display: 'Archivo' (Google Fonts) - headers, hero sections, impact numbers

**Scale & Usage**
- Hero/Impact Numbers: Archivo 48-72px, bold (kg collected, CO₂ saved)
- Section Headers: Archivo 28-36px, semibold
- Card Titles: Inter 18-20px, medium
- Body Text: Inter 14-16px, regular
- Captions/Labels: Inter 12-14px, medium
- Dashboard Metrics: Archivo 20-24px, bold (consistency with impact feel)

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16 for consistent rhythm
- Component padding: p-4 to p-6
- Section spacing: py-12 to py-20
- Card gaps: gap-4 to gap-6
- Dashboard grids: gap-6

**Grid Structure**
- Student views: Single column mobile, 2-col tablet, max 2-col desktop (focus on clarity)
- Coordinator dashboards: Responsive grid up to 3-4 columns for KPI cards
- Recycler marketplace: 2-col cards on desktop
- Maps: Full-width containers with overlay panels

### D. Component Library

**Navigation**
- Role-adaptive sidebar (desktop) collapsing to bottom nav (mobile)
- Quick actions floating button for primary tasks (/collect for students, /verify for coordinators)
- Notification bell with role-filtered alerts

**Data Display**
- KPI Cards: Elevated surfaces (shadow-md) with icon, metric (Archivo bold), trend indicator
- Map Interface: Leaflet/Mapbox with custom markers (color-coded by fill%, status), info panels slide-in from right
- Tables: Striped rows for scan-ability, sticky headers, action columns right-aligned
- Charts: Time-series line graphs (EcoPoints over time), donut charts (polymer mix), bar charts (campus leaderboards)

**Forms & Inputs**
- Collection Submission: Multi-step wizard (scan QR → upload photos → estimate weight → confirm)
- Photo Upload: Drag-drop zone with preview grid, compression indicators
- Weight Input: Slider with numerical override, visual kg representation
- Verification: Side-by-side photo gallery with approve/reject toggle, verified weight adjustment

**Gamification Elements**
- EcoPoints Display: Prominent counter with animation on credit
- Badges: Circular icons with glow effect for achievements
- Leaderboards: Ranked list with profile pics, streak flames
- Redeem Store: Card grid with point costs, "Redeem" CTAs

**Marketplace Components**
- Batch Cards: Compact info (location, kg, polymer mix, deadline) with "Quote" CTA
- Quote Comparison: Table layout with accept radio buttons
- Pickup Proof: Photo upload with timestamp, actual weight confirmation

**Overlays**
- Modals: Centered, max-w-2xl, for confirmations and detailed views
- Drawers: Right-slide for filters, notifications, batch details
- Toasts: Top-right, auto-dismiss, color-coded by semantic type

### E. Animations

**Purposeful Only**
- EcoPoints credit: Number count-up animation (1s duration)
- Map bin updates: Subtle pulse on status change
- Success confirmations: Checkmark draw-in
- Page transitions: None (prioritize performance with data)
- Loading states: Skeleton screens for dashboards, spinner for actions

---

## Role-Specific Dashboards

**Student (/collect, /rewards)**
- Hero: Impact summary (total kg, CO₂ saved, rank) with celebratory gradient background
- Quick collect CTA: Large, prominent button
- Recent activity feed with photos
- Rewards showcase: Featured redemptions with visual appeal

**Coordinator (/ops, /verifications)**
- Dense KPI grid (4-col): Pending verifications, bins at threshold, active batches, wallet balance
- Verification queue: Image gallery view with quick actions
- Bins map: Primary focus with heatmap overlay for fill levels
- Batch builder: Drag-drop interface with auto-suggestions

**Recycler (/portal)**
- Marketplace grid: Available batches with distance, value estimate
- Quote submission: Simple form with calendar slot picker
- Pickup schedule: Timeline view with navigation integration
- Invoice history: Tabular with payment status badges

**Admin (/admin)**
- System health dashboard: Charts for usage, revenue, user growth
- Governance tables: Partners, price floors, dispute resolution
- Configuration panels: Minimalist forms with clear save states

---

## Images & Media

**Hero Image**: Yes - Environmental action shot (students at recycling station, hands sorting plastics, campus bin with greenery). Full-bleed, 60vh, overlay gradient (142 71% 45% to transparent) for text legibility

**Supporting Images**
- How It Works section: Icon illustrations (custom or Heroicons) with descriptive text
- Partner logos: Grayscale, hover to color
- Bin map markers: Custom SVG (color-coded), not photos
- Verification queue: User-uploaded photos in grid
- Testimonials: Circular profile images with green border

**Icons**: Heroicons (CDN) for UI consistency, custom SVGs for plastic types (PET, HDPE, etc.)

---

## Accessibility & Performance

- WCAG AA contrast ratios maintained in both modes
- Focus states: 2px ring in primary green
- Icon-only buttons include aria-labels
- Images lazy-load beyond viewport
- Dark mode: Consistent across all inputs, forms, and data tables