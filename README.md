# Fast Fashion Impact - Educational Platform

## Project Overview

An interactive educational web application designed to raise awareness about the environmental, social, and economic impacts of fast fashion. This platform provides data-driven insights, interactive learning utilities, and comprehensive policy analysis to help students and educators understand the true cost of ultra-fast fashion on workers, the environment, and society.

## Driving Question

**"How does fast fashion impact workers, the environment, and society?"**

This platform answers this critical question through:
- Evidence-based statistical analysis
- Interactive learning experiences
- Policy framework examination
- Historical timeline exploration

## Features

### 1. Data Visualization Dashboard
Comprehensive statistics on Shein's rapid growth and its consequences:
- **Annual User Growth**: Visual analysis showing 103% increase (43.7M to 88.8M users) from 2021-2023
- **Employee-to-Customer Ratios**: Charts demonstrating worsening worker burden (1:4,370 to 1:8,073)
- **Salary Data**: Employee compensation analysis ($4,050 to $9,972 annually)
- **Environmental Impact Metrics**: Key facts about carbon emissions, water consumption, textile waste, and ocean pollution

### 2. Government Policy Analysis
Detailed examination of the **Fashion Sustainability and Social Accountability Act**:
- Legislative framework overview
- Key policy goals and requirements
- Implementation mechanisms
- Expected industry transformation impacts
- Worker protections and environmental standards

### 3. Three Interactive Learning Utilities

#### Flashcards (Utility #1)
- 12 interactive flip cards organized by category
- Categories: Statistics, Worker Conditions, Environment, Policy
- Click-to-flip animation for engaging learning
- Progress tracking system
- Mobile-responsive design

#### Quiz Module (Utility #2)
- 10 multiple-choice questions testing comprehensive knowledge
- Instant feedback with detailed explanations
- Score tracking and performance evaluation
- Categories covering all aspects of fast fashion impact
- Retake capability for reinforced learning

#### Timeline Explorer (Utility #3)
- 9 key historical events from 1990 to present
- Visual timeline showing industry evolution
- Detailed impact analysis for each event
- Critical milestones including Rana Plaza collapse, climate impact recognition, and regulatory responses

## Technical Architecture

### Frontend Stack
- **React** with TypeScript for type-safe component development
- **Wouter** for lightweight client-side routing
- **Recharts** for beautiful, accessible data visualizations
- **Tailwind CSS** + **Shadcn UI** for professional, consistent design system
- **Framer Motion** principles for smooth animations
- **TanStack Query** for efficient data fetching and state management

### Backend Stack
- **Express.js** server with TypeScript
- **In-memory storage** for flashcards, quiz questions, timeline events, and user progress
- RESTful API architecture
- Comprehensive error handling

### Design System
- Professional color palette emphasizing educational clarity
- Responsive layouts (mobile-first approach)
- Dark mode support with theme toggle
- Consistent spacing, typography, and visual hierarchy
- WCAG AA accessibility standards

## Data Sources

All statistics and information are sourced from credible, verified sources:

1. **Shein Company Data** (2021-2023)
   - Annual user statistics
   - Employee count and ratios
   - Salary information

2. **United Nations Environment Programme (UNEP)**
   - Fashion Industry Impact Report
   - Carbon emissions data
   - Water consumption statistics

3. **Ellen MacArthur Foundation**
   - Circular Economy in Fashion research
   - Textile waste statistics

4. **Fashion Revolution**
   - Fashion Transparency Index
   - Supply chain analysis

5. **International Labour Organization (ILO)**
   - Garment worker statistics
   - Labor conditions research

## Educational Objectives

This platform addresses multiple learning standards:

### Computer Science Integration
- Clean, professional UI/UX design with consistent visual hierarchy
- Dynamic, data-driven content presentation
- Interactive components with state management
- Responsive design principles

### Cross-Disciplinary Synthesis
- **Mathematics**: Statistical analysis, data visualization, ratio calculations, percentage growth analysis
- **Government/Civics**: Policy framework analysis, regulatory mechanisms, legislative impacts
- **Environmental Science**: Carbon emissions, water consumption, pollution metrics
- **Economics**: Business models, labor economics, supply chain analysis
- **History**: Timeline of industry evolution

### Critical Thinking Development
- Evidence-based reasoning through data analysis
- Evaluation of policy effectiveness
- Understanding systemic problems and solutions
- Pattern recognition in historical trends

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd fast-fashion-impact
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser to `http://localhost:5000`

### Project Structure

```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── data/        # Static data files
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utilities and helpers
│   └── index.html       # HTML entry point
├── server/              # Backend Express server
│   ├── routes.ts        # API route definitions
│   └── storage.ts       # In-memory data storage
├── shared/              # Shared types and schemas
│   └── schema.ts        # TypeScript type definitions
└── README.md           # This file
```

## API Endpoints

### Flashcards
- `GET /api/flashcards` - Retrieve all flashcards
- `GET /api/flashcards/:id` - Retrieve specific flashcard

### Quiz
- `GET /api/quiz` - Retrieve all quiz questions
- `GET /api/quiz/:id` - Retrieve specific question

### Timeline
- `GET /api/timeline` - Retrieve all timeline events
- `GET /api/timeline/:id` - Retrieve specific event

### User Progress
- `GET /api/progress` - Get user progress
- `PATCH /api/progress` - Update user progress
- `POST /api/progress/reset` - Reset user progress

## Key Statistics Featured

### Shein Growth Metrics (2021-2023)
- **43.7M → 88.8M** annual users (+103%)
- **1:4,370 → 1:8,073** employee-to-customer ratio
- **$4,050 → $9,972** average annual salary
- **10,000 → 11,000** total employees (+10%)

### Environmental Impact
- **10%** of global carbon emissions from fashion industry
- **93 billion** cubic meters of water consumed annually
- **85%** of textiles end up in landfills
- **35%** of ocean microplastics from synthetic textiles

## Learning Outcomes

Students using this platform will be able to:

1. **Analyze Data**: Interpret statistical trends and visualizations
2. **Understand Systemic Issues**: Recognize how business models affect workers and environment
3. **Evaluate Policy Solutions**: Assess regulatory approaches to industry problems
4. **Think Critically**: Connect evidence across disciplines
5. **Make Informed Decisions**: Apply knowledge to consumer choices

## Future Enhancements

Potential expansions for this educational platform:
- User accounts with persistent progress tracking
- Additional learning modules on sustainable fashion alternatives
- Comparison tools for different fast fashion brands
- Interactive simulations of supply chain impacts
- Discussion forums for student engagement
- Downloadable educational resources and infographics
- Integration with real-time industry data APIs

## Credits

**Project Type**: Educational Web Application  
**Purpose**: Student learning platform for fast fashion awareness  
**Framework**: React + TypeScript + Express.js  
**Design System**: Tailwind CSS + Shadcn UI  

## License

This educational project is intended for academic use in exploring the impacts of fast fashion and understanding web development principles.

---

## Contact & Feedback

This platform was created as an educational tool to raise awareness about fast fashion's impacts. For questions, suggestions, or contributions, please feel free to reach out or submit issues through the project repository.

**Remember**: Understanding the problem is the first step toward creating sustainable change. Thank you for taking the time to learn about fast fashion's true cost.
