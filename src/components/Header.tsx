import c9Logo from '../assets/c9_logo.png'

interface HeaderProps {
  game: 'Valorant' | 'lol'
  onGameChange: (game: 'Valorant' | 'lol') => void
}

export default function Header({ game, onGameChange }: HeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={c9Logo} alt="Cloud9" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold text-slate-800">Scouting Report</h1>
            <p className="text-xs text-slate-500">Opponent Analysis & Counter Strategy</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-slate-100 rounded-lg p-1">
            <button
              onClick={() => onGameChange('Valorant')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                game === 'Valorant'
                  ? 'bg-white text-c9-blue shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              VALORANT
            </button>
            <button
              onClick={() => onGameChange('lol')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                game === 'lol'
                  ? 'bg-white text-c9-blue shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              League of Legends
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
