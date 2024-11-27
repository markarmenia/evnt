'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        className={`px-3 py-1 rounded ${language === 'EN' ? 'bg-accent text-white' : 'bg-gray-200'}`}
        onClick={() => setLanguage('EN')}
      >
        EN
      </button>
      <button
        className={`px-3 py-1 rounded ml-2 ${language === 'AM' ? 'bg-accent text-white' : 'bg-gray-200'}`}
        onClick={() => setLanguage('AM')}
      >
        AM
      </button>
    </div>
  )
}

