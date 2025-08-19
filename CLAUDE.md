# Gray Matter Workshop - Development Documentation

## Project Overview
FRC Programming Workshop website built with Next.js, focusing on teaching best programming practices, hardware setup, command-based programming, and PID tuning.

## Recent Changes & Implementations

### Session: 2025-08-19 - Presenter Images, Dark Mode Toggle & CTRE Documentation

#### 1. Added Presenter Images to Homepage
**Location**: `src/app/page.tsx:62-99`
- **What**: Replaced colored circle placeholders with actual presenter photos
- **Images Used**:
  - Josh Bacon: `/images/presentors/joshPhoto.jpg`
  - Alex Haltom: `/images/presentors/alexPhoto.jpg` 
  - Joe Lockwood: `/images/presentors/joePhoto.jpg`
- **Implementation**: Used Next.js Image component with 64x64px circular display

#### 2. Added Mechanisms Section to Homepage
**Location**: `src/app/page.tsx:57-102`
- **What**: New "Mechanisms We'll Program" section showcasing workshop content
- **Mechanisms**:
  - Robot Arm (`/images/mechanisms/arm.jpg`) - Multi-jointed arm with PID control
  - Flywheel Shooter (`/images/mechanisms/flywheel.png`) - High-speed shooter system
- **Layout**: Responsive grid (side-by-side on desktop, stacked on mobile)

#### 3. Implemented Dark/Light Mode Toggle
**Files Created/Modified**:

**New File**: `src/components/ThemeProvider.tsx`
- **Purpose**: React context for theme management
- **Features**: 
  - Three modes: light, dark, system (auto)
  - localStorage persistence
  - System preference detection
  - Real-time theme switching

**Modified**: `src/app/layout.tsx:5,33-40`
- **Change**: Added ThemeProvider wrapper around app content
- **Import**: Added ThemeProvider import

**Modified**: `src/components/Sidebar.tsx:6,213,435-514`
- **Change**: Added theme toggle section at bottom of sidebar
- **Features**:
  - Expanded view: Three-button toggle with icons
  - Collapsed view: Single cycling button
  - Tooltips and visual feedback
  - Matches existing sidebar styling

## Project Structure

### Key Components
- `src/app/page.tsx` - Main homepage with hero, overview, mechanisms, and team sections
- `src/components/Sidebar.tsx` - Navigation sidebar with collapsible sections and theme toggle
- `src/components/ThemeProvider.tsx` - Theme management context provider
- `src/app/layout.tsx` - Root layout with theme provider wrapper

### Image Assets
```
public/images/
├── presentors/
│   ├── joshPhoto.jpg
│   ├── alexPhoto.jpg
│   └── joePhoto.jpg
├── mechanisms/
│   ├── arm.jpg
│   └── flywheel.png
└── hardware/
    ├── Kracken60x.png
    ├── CANivore.png
    └── Encoder.png
```

### Theme System
- **Technology**: Tailwind CSS with `dark:` classes
- **Implementation**: CSS class toggle on document root
- **Storage**: localStorage for persistence
- **Modes**: light, dark, system (follows OS preference)

## Development Notes

### Dark Mode Implementation
- Uses existing Tailwind dark mode classes throughout the app
- No breaking changes to existing styling
- Maintains system preference detection
- Graceful fallback to light mode

### Image Optimization
- All images use Next.js Image component for optimization
- Proper alt text for accessibility
- Responsive sizing with object-cover for consistent display

### Navigation Structure
```
Main Navigation:
├── Home (/)
├── Introduction (/introduction)
└── Prerequisites (/prerequisites)

Workshop #1 (Collapsible):
├── Hardware Setup (/hardware)
├── Project Setup (/project-setup)
├── Command Framework (/command-framework)
├── Programming (/programming)
├── Control Systems (/control-systems)
└── Tuning (/tuning)
```

## Commands & Scripts
- **Development**: `npm run dev` (assumed)
- **Build**: `npm run build` (assumed)
- **Lint**: `npm run lint` (check for linting commands if needed)

## Future Considerations
- Consider adding more workshop sections as content expands
- May need to implement search functionality as content grows
- Workshop progress tracking could be valuable for users
- Consider adding animations for theme transitions