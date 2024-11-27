'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { templateConfig } from '@/config/templateConfig'

export default function EventTimeline() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">{t('eventTimelineTitle')}</h2>
        <div className="max-w-3xl mx-auto">
          {templateConfig.events.map((event, index) => (
            <motion.div 
              key={event.type}
              className="mb-8 flex"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="w-1/2 pr-4 text-right">
                <h3 className="text-xl font-semibold">{t(event.type)}</h3>
                <p>{event.time}</p>
              </div>
              <div className="w-1/2 pl-4 border-l-2 border-accent">
                <h4 className="font-semibold">{event.location}</h4>
                <p>{event.address}</p>
                <a 
                  href={event.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {t('openInMaps')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

