'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { templateConfig } from '@/config/templateConfig'

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const { t } = useLanguage()

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const difference = +new Date(templateConfig.date) - +new Date()
      let timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 }

      if (difference > 0) {
        timeRemaining = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        }
      }

      setTimeRemaining(timeRemaining)
    }

    calculateTimeRemaining()
    const timer = setInterval(calculateTimeRemaining, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.p 
          className="text-2xl md:text-3xl text-gray-800 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('welcomeMessage')}
        </motion.p>

        <div className="flex justify-center items-center space-x-12 md:space-x-24">
          {Object.entries(timeRemaining).map(([unit, value]) => (
            <motion.div 
              key={unit}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-6xl md:text-7xl font-serif mb-2">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-xl uppercase tracking-widest">
                {unit}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

