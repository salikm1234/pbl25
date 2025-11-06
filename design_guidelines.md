# Fast Fashion Educational Platform - Design Guidelines

## Design Approach
**Hybrid Approach**: Combining educational platform patterns (Khan Academy, Duolingo) with modern data visualization principles (Our World in Data, Gapminder). Focus on clean information architecture with engaging visual elements that don't rely on photography.

## Core Design Principles
1. **Educational Clarity**: Information hierarchy prioritizes learning outcomes
2. **Data-Driven Impact**: Statistics and visualizations drive emotional connection
3. **Progressive Disclosure**: Content reveals complexity gradually
4. **Accessible Learning**: Clear typography and color-coded learning paths

## Typography System
- **Headings**: Inter or Poppins (600-700 weight)
  - H1: text-4xl to text-6xl for driving question
  - H2: text-3xl to text-4xl for section headers
  - H3: text-xl to text-2xl for learning module titles
- **Body**: Inter or System UI (400-500 weight)
  - Primary: text-base to text-lg for main content
  - Secondary: text-sm for captions and metadata
- **Data/Stats**: JetBrains Mono or Courier for numerical emphasis

## Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20 (p-4, gap-6, my-8, py-12, etc.)
- Section padding: py-16 to py-24
- Card spacing: p-6 to p-8
- Component gaps: gap-4 to gap-8

## Page Structure

### Homepage/Landing
- **Hero Section**: Full-width (not 100vh) with driving question
  - Large typography showcasing: "How does fast fashion impact workers, the environment, and society?"
  - Animated gradient background (subtle mesh gradient, not image)
  - Primary CTA: "Start Learning" + Secondary: "View Statistics"
  - Add impact metrics ticker: "128M tons waste/year • $3/hour wages • 2.1B tons CO2"

- **Impact Dashboard Preview**: 2-column grid on desktop
  - Live statistics cards with icon indicators
  - Mini chart previews linking to full data section
  - Single column stack on mobile

- **Learning Paths Section**: 3-column grid
  - Flashcards (icon: card stack)
  - Quiz (icon: question mark)
  - Timeline Explorer (icon: timeline)
  - Each card: icon, title, description, progress indicator

- **Policy Highlight**: Full-width banner
  - Fashion Sustainability Act summary
  - "Learn More" expansion

### Data Visualization Dashboard
- **Statistics Grid**: 2x2 on desktop, stacked on mobile
  - Shein user growth chart (line graph, animated on scroll)
  - Employee-to-customer ratio (comparison bars)
  - Salary data visualization (horizontal bars with labels)
  - Environmental impact metrics (donut charts)
- Each chart card: title, visualization, key insight callout, source citation

### Learning Utilities Pages

**Flashcards Module**:
- Card-based interface with flip animation
- Progress bar showing cards completed
- Category filters (Environment, Workers, Statistics, Policy)
- Navigation: Previous/Next buttons + keyboard shortcuts hint

**Quiz Module**:
- Question card centered, max-width-2xl
- Multiple choice buttons in vertical stack
- Instant feedback (green/red indicators)
- Progress tracker: "Question 3 of 10"
- Score summary card at completion

**Timeline Explorer**:
- Vertical timeline on desktop (left-aligned line)
- Alternating content cards (left/right of timeline)
- Year markers with circular nodes
- Horizontal scroll on mobile with snap points

### Policy Page
- **Hero**: Policy name + tagline
- **Summary Cards**: 3-column grid
  - What it does
  - Who it affects  
  - Expected impact
- **Full Text**: Single column, max-w-prose
- **Timeline**: Implementation phases visualization

## Component Library

### Cards
- Border: border border-gray-200
- Radius: rounded-lg to rounded-xl
- Shadow: shadow-sm with hover:shadow-md transition
- Padding: p-6 to p-8

### Buttons
- Primary: Solid background, px-6 py-3, rounded-lg, font-medium
- Secondary: Border style, same padding
- Icon buttons: Square aspect, p-3

### Data Visualization Components
- Chart containers: bg-white with subtle border
- Axis labels: text-xs, text-gray-600
- Data points: Accent colors with sufficient contrast
- Tooltips: Rounded, shadow-lg, animated entrance

### Navigation
- Sticky header on scroll
- Logo + nav links (horizontal on desktop)
- Mobile: Hamburger menu with slide-in drawer
- Active state: Underline or background highlight

### Learning Component Patterns
- **Progress Indicators**: Linear bars with percentage
- **Category Tags**: Rounded-full badges with icon
- **Stat Callouts**: Large number + label, bordered box
- **Citation Links**: Underline on hover, text-sm

## Visual Elements (No Images)

### Backgrounds
- Gradient meshes: Subtle multi-color gradients
- Geometric patterns: SVG dots, lines, or grid overlays
- Data-inspired patterns: Abstract chart shapes

### Icons
- **Library**: Heroicons (outline for navigation, solid for emphasis)
- Consistent 24px base size
- Use throughout for visual anchoring

### Animations
- **Minimal approach**: Chart reveals on scroll, card flips, hover states
- Entrance: Fade + slight translate
- No distracting infinite loops

## Accessibility
- WCAG AA contrast ratios minimum
- Focus indicators: ring-2 ring-offset-2
- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation for all learning modules

## Responsive Breakpoints
- Mobile-first approach
- sm: 640px - 2-column grids become 1-column
- md: 768px - Navigation becomes horizontal
- lg: 1024px - 3-column layouts active
- xl: 1280px - Max content width applied

## Content Density
- **High**: Dashboard and policy pages (information-rich)
- **Medium**: Learning module pages (focused tasks)
- **Low**: Homepage hero (clear messaging)

This design system creates a professional, data-driven educational experience that's engaging without relying on photography, emphasizing clean information architecture and meaningful visualizations.