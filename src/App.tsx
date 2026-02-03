import { useState, useEffect } from 'react'
import Header from './components/Header'
import TabBar from './components/TabBar'
import GenerateReportTab from './pages/GenerateReportTab'
import CounterStrategyTab from './pages/CounterStrategyTab'
import ThreatsTab from './pages/ThreatsTab'
import MapStatsTab from './pages/MapStatsTab'
import HistoryTab from './pages/HistoryTab'
import AskCoachTab from './pages/AskCoachTab'
import GlobalLoadingOverlay from './components/GlobalLoadingOverlay'

type GameType = 'Valorant' | 'lol'

export default function App() {
  const [game, setGame] = useState<GameType>('Valorant')
  const [activeTab, setActiveTab] = useState('generate')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const renderTab = () => {
    switch (activeTab) {
      case 'generate':
        return <GenerateReportTab game={game} />
      case 'counter':
        return <CounterStrategyTab game={game} />
      case 'coach':
        return <AskCoachTab game={game} />
      case 'threats':
        return <ThreatsTab game={game} />
      case 'maps':
        return <MapStatsTab game={game} />
      case 'history':
        return <HistoryTab />
      default:
        return <GenerateReportTab game={game} />
    }
  }

  return (
    <>
      <GlobalLoadingOverlay visible={isLoading} game={game} />
      <div className="min-h-screen bg-slate-50">
        <Header game={game} onGameChange={setGame} />
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="max-w-7xl mx-auto px-6 py-6">
          {renderTab()}
        </main>
      </div>
    </>
  )
}
