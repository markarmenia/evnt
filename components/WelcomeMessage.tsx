'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function WelcomeMessage() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{t('welcomeTitle')}</h2>
          <p className="text-lg md:text-xl">{t('welcomeMessage')}</p>
        </motion.div>
      </div>
    </section>
  )
}

