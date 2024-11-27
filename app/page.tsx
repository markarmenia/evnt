import HeroSection from '@/components/HeroSection'
import WelcomeMessage from '@/components/WelcomeMessage'
import CountdownTimer from '@/components/CountdownTimer'
import EventTimeline from '@/components/EventTimeline'
import RsvpForm from '@/components/RsvpForm'
import LanguageToggle from '@/components/LanguageToggle'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background text-text">
        <LanguageToggle />
        <HeroSection />
        <WelcomeMessage />
        <CountdownTimer />
        <EventTimeline />
        <RsvpForm />
      </main>
    </LanguageProvider>
  )
}

