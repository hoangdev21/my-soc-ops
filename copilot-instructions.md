# Soc Ops Development Guide

## Project Overview
Soc Ops is a social bingo game that brings people together through interactive gameplay. The app uses React + TypeScript with Vite and Tailwind CSS v4.

## Design System: Space Galaxy Glow

### Vision
A distinctive, cosmic-themed social game experience that celebrates connections and moments of joy with high-impact visual effects and smooth interactions.

### Color Palette

All colors are defined as Tailwind v4 tokens in `src/index.css`:

```css
--color-cyan-glow: #00d9ff          /* Primary action, highlights */
--color-cyan-glow-dark: #00b8d4     /* Darker cyan for states */
--color-purple-glow: #b000ff        /* Secondary elements, depth */
--color-purple-dark: #8800cc        /* Dark purple for shadows */
--color-pink-accent: #ff006e        /* Calls-to-action, victories */
--color-space-dark: #0a0e27         /* Main background */
--color-space-card: #16213e         /* Card/component surfaces */
--color-space-border: #1d2d4d       /* Border highlights */
```

### Typography

- **Display Font**: `Space Mono` (monospace) - Used for headings, titles, UI labels
  - Distinctive and futuristic
  - Applied via `font-display` class
  
- **Body Font**: System stack or Inter - Used for body copy and descriptions
  - Clean and readable
  - Default font-family

### Component Styling Guide

#### StartScreen
- Cosmic background with animated starfield
- Glowing gradient title with cyan→purple
- Glass-effect card with cyan border glow
- Gradient button (cyan→purple) with hover lift effect
- Staggered animations for entry sequence

#### GameScreen
- Dark cosmic background matching StartScreen
- Glowing header with cyan accents
- Floating board effect with drop-shadow glow
- Victory announcement with pink gradient

#### BingoSquare States
- **Default**: Cyan border glow, dark semi-transparent background
- **Marked**: Brightened cyan glow with pulsing animation
- **Winning**: Pink/hot-magenta glow with pulsing animation
- **Free Space**: Purple glow, slightly larger, disabled (not clickable)

#### BingoModal
- Gradient card (dark space → purple) with cyan border
- Glowing box-shadow effect with inset depth
- Animated checkmark and celebratory styling

### Animation Utilities

Key animations defined in `src/index.css`:

| Class | Effect | Duration |
|-------|--------|----------|
| `.float` | Subtle up/down float | 4s |
| `.glow-pulse` | Neon glow pulse effect | 2s |
| `.pop` | Quick scale pop animation | 0.4s |
| `.star` | Star twinkle effect | 3s |
| `.stagger-1/2/3/4` | Staggered fade-in reveals | 0.6s each |

### Tailwind v4 Features Used

- `@theme` directive with CSS variables
- Native opacity syntax (`bg-black/50`)
- Multi-theme color definitions
- Shorthand custom colors

### Best Practices

1. **Use CSS Variables**: Apply color tokens via `--color-*` names
2. **Maintain Cosmic Aesthetic**: Dark backgrounds, glowing accents, neon highlights
3. **Animations**: Use staggered reveals on initial load, glow pulses for active states
4. **Glass Effect**: Combine `backdrop-blur-sm` with semi-transparent backgrounds and border glows
5. **Tests**: Verify glow effects, animations, and star backgrounds render correctly on mobile

### Adding New Components

When adding components:
1. Use `bg-space-card` or `bg-space-dark` for backgrounds
2. Add `border-cyan-glow/30` or similar for subtle borders
3. Apply `font-display` to titles/labels
4. Use glow shadows: `box-shadow: 0 0 Xpx rgba(0, 217, 255, 0.Y)`
5. Consider stagger animations for multi-element reveals

## Architecture

### File Structure
```
src/
  components/        - React components
  hooks/            - Custom hooks (useBingoGame)
  types/            - TypeScript interfaces
  utils/            - Utilities (bingoLogic)
  data/             - Static data (questions)
  index.css         - Global styles & tokens
  main.tsx          - Entry point
```

### Key Dependencies
- **React 18+**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool
- **Tailwind CSS v4**: Styling with @theme tokens
- **Vitest**: Testing framework

## Development Workflow

### Running the App
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run test     # Run tests
npm run lint     # ESLint
```

### Making Design Changes
1. Update color tokens in `src/index.css` using `@theme`
2. Apply tokens using Tailwind classes
3. Test on mobile viewport (often <480px)
4. Verify animations are smooth and CPU-efficient

### Adding New Features
- Keep the cosmic aesthetic consistent
- Use glow effects for interactivity feedback
- Apply staggered animations for multi-element reveals
- Update types in `src/types/index.ts`

## Custom Quiz Master Agent

**Quiz Master** is a specialized Copilot agent that generates themed icebreaker bingo questions. Use it to quickly create thematic question sets.

### How to Use Quiz Master

1. **New Chat → Pick "Quiz Master"** agent
2. **Provide a theme** (e.g., "Tech Life Bingo", "Skill Bingo", "Team Bingo")
3. Agent creates themed 24 questions following design guidelines
4. Review and update `src/data/questions.ts` with generated questions
5. Questions automatically update in the game UI

### Current Theme: Tech Life Bingo

**Focus**: Coding languages, dev tools, tech culture, programming skills

**Question Categories**:
- Easy Wins (40-50%): "uses TypeScript", "debugged with console.log()", "has broken production"
- Medium (30-40%): "contributed to open source", "knows 3+ languages", "written unit tests"
- Bold/Challenging (10-20%): "can teach a concept in 5 min", "built something worth shipping"

**Design Guidelines** (from `.github/agents/quiz-master.agent.md`):
- ✅ Mix difficulty levels (easy, medium, bold)
- ✅ Blend personal, work, and fun categories
- ✅ Inclusive & safe (low-stakes, respectful)
- ✅ Conversation starters that spark stories
- ✅ Include action-based or playful squares
- ✅ 40-60% should be quick "gimmes" for momentum

### Other Theme Ideas

| Theme | Best For | Example Questions |
|-------|----------|-------------------|
| Skill Bingo | Workplace teams | "knows SQL", "speaks Mandarin", "designed a logo" |
| Personality Bingo | Getting to know people | "morning person", "spontaneous", "cat person" |
| Secret Challenge Bingo | Games & fun | "can do a handstand", "teach us 5 words in another language" |
| Team Bingo | Department bonding | "works from office", "on same Slack channel", "attended kickoff" |
| Work Culture Bingo | Company habits | "codes at night", "uses dark mode", "knows all shortcuts" |
| Deep Chat Bingo | Meaningful connections | "has overcome adversity", "volunteers regularly" |
| Tech Life Bingo | Developer community | "uses VI editor", "has contributed to open source" |
| Creative Bingo | Design/art focus | "plays an instrument", "illustrates", "speaks fluent design" |
| Chaos Bingo | Absurdist/funny | "survived on instant noodles", "has 5+ browser tabs open" |

### Cloud Deployment

For larger scale question generation:
- **Cloud Quiz Master**: Create a new cloud agent with Quiz Master to scale to multiple themes
- Results appear in Agent Sessions (visible in web interface)
- Allows parallel generation of different themed question sets

## Deployment

- **GitHub Pages** via GitHub Actions workflow
- Check `.github/workflows/` for CI/CD pipeline
- Ensure production build works: `npm run build`

---

**Last Updated**: Part 3 Custom Quiz Master Agent (Tech Life Bingo Theme)
