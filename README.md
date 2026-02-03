# Cloud9 Scout - UI

> **Related Repositories:**
> - 🔧 Backend API: [c9-scout-api](https://github.com/AvishKaushik/c9-scout-api)

React-based scouting report generator for esports teams, supporting both League of Legends and VALORANT.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
cd c9-scout-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

The UI will be available at `http://localhost:5174`

---

## ⚙️ Configuration

The UI connects to the backend API at `http://localhost:8001` by default.

To change the API URL, update `src/api/scouting.ts`:

```typescript
const API_BASE_URL = 'http://localhost:8001/api/v1';
```

---

## ✨ Features

### Generate Report
- One-click comprehensive scouting reports
- Search for any team in the GRID database
- Automatic match history analysis
- Executive summary with key findings

### Threat Ranking
- Enemy players ranked by danger level
- Individual player profiles
- Signature picks and playstyles
- Historical performance data

### Counter Strategy
- AI-generated tactical recommendations
- Suggested bans and counter-picks
- Gameplay adjustments based on opponent tendencies
- Composition recommendations

### Map Stats (VALORANT)
- Attack vs defense win rates per map
- Map-specific strategies
- Comfort picks identification
- Veto recommendations

### Ask Coach AI
- Natural language interface
- Query opponent database with questions
- Instant answers about tendencies
- Strategic insights on demand

### Report History
- Archive of generated reports
- Quick access to past scouting
- Compare opponent evolution

---

## 🏗️ Project Structure

```
c9-scout-ui/
├── public/                    # Static assets
├── src/
│   ├── api/
│   │   └── scouting.ts        # API client configuration
│   ├── components/
│   │   ├── Header.tsx         # App header with game selector
│   │   ├── TabBar.tsx         # Navigation tabs
│   │   └── GlobalLoadingOverlay.tsx
│   ├── pages/
│   │   ├── GenerateReportTab.tsx
│   │   ├── CounterStrategyTab.tsx
│   │   ├── ThreatsTab.tsx
│   │   ├── MapStatsTab.tsx
│   │   ├── AskCoachTab.tsx
│   │   └── HistoryTab.tsx
│   ├── hooks/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | React 18 |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | TailwindCSS |
| State Management | React Query (TanStack) |
| Charts | Recharts |
| Animations | Framer Motion |
| Icons | Lucide React |

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 5174) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🎨 Design System

Consistent with the Cloud9 design language:

- **Game Switcher**: Toggle between LoL and VALORANT modes
- **Premium Loading**: Cloud9 × Game collaborative loading screen
- **Card-Based Layout**: Clean, organized information hierarchy
- **Threat Indicators**: Visual danger level badges

---

## 🧪 Development

```bash
# Run development server
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build
```
