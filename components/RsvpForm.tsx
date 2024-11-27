'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function RsvpForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', guests: 1, attending: null })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div 
        className="text-center py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">{t('thankYou')}</h2>
        <p>{t('rsvpConfirmation')}</p>
      </motion.div>
    )
  }

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">{t('rsvpTitle')}</h2>
        <motion.form 
          className="max-w-md mx-auto"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">{t('nameLabel')}</label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-3 py-2 border rounded"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="guests" className="block mb-2">{t('guestsLabel')}</label>
            <input
              type="number"
              id="guests"
              min="1"
              required
              className="w-full px-3 py-2 border rounded"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
            />
          </div>
          <div className="mb-4">
            <p className="mb-2">{t('attendingLabel')}</p>
            <div className="flex space-x-4">
              <button
                type="button"
                className={`px-4 py-2 rounded ${formData.attending === true ? 'bg-accent text-white' : 'bg-gray-200'}`}
                onClick={() => setFormData({ ...formData, attending: true })}
              >
                
{t('attendButton')}
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded ${formData.attending === false ? 'bg-accent text-white' : 'bg-gray-200'}`}
                onClick={() => setFormData({ ...formData, attending: false })}
              >
                {t('declineButton')}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-white py-2 rounded hover:bg-accent-dark transition duration-300"
            disabled={formData.attending === null}
          >
            {t('submitButton')}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

