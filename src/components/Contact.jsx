import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Calendar, Camera, User, MessageSquare, Check, ArrowRight, ArrowLeft } from 'lucide-react'

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    date: '',
    budget: '',
    message: '',
    location: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const totalSteps = 4

  const projectTypes = [
    { id: 'wedding', name: 'Wedding Photography', icon: '💒' },
    { id: 'portrait', name: 'Portrait Session', icon: '👤' },
    { id: 'commercial', name: 'Commercial Shoot', icon: '🏢' },
    { id: 'event', name: 'Event Photography', icon: '🎉' },
    { id: 'other', name: 'Other', icon: '📸' }
  ]

  const budgetRanges = [
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6 "
          >
            <h3 className="text-2xl font-playfair font-bold text-white mb-6">
              Let's get to know you
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full p-4 bg-[#080808] text-white border border-gray-700 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full p-4 bg-[#080808] text-white border border-gray-700 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full p-4 bg-[#080808] text-white border border-gray-700 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-playfair font-bold text-white mb-6">
              What type of project?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectTypes.map((type) => (
                <motion.button
                  key={type.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleInputChange('projectType', type.id)}
                  className={`p-6 border-2 rounded-lg text-left transition-all duration-300 ${
                    formData.projectType === type.id
                      ? 'border-amber-400 bg-amber-400/10 text-amber-400'
                      : 'border-gray-700 text-white hover:border-gray-600'
                  }`}
                >
                  <div className="text-2xl mb-2">{type.icon}</div>
                  <div className="font-semibold">{type.name}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-playfair font-bold text-white mb-6">
              Project details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Preferred Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="w-full p-4 bg-[#080808] text-white border border-gray-700 focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full p-4 bg-[#080808] text-white border border-gray-700 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="Where will the shoot take place?"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full p-4 bg-[#080808] text-white border border-gray-700 focus:border-amber-400 focus:outline-none transition-colors"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-playfair font-bold text-white mb-6">
              Tell me about your vision
            </h3>
            <div>
              <label className="block text-gray-300 mb-2">Project Description</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={6}
                className="w-full p-4 bg-[#080808] text-white border border-gray-700 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                placeholder="Describe your project, vision, and any specific requirements..."
              />
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Check size={40} className="text-white" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-playfair font-bold text-white mb-4"
          >
            Thank You!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-300 mb-8"
          >
            Your inquiry has been received. I'll get back to you within 24 hours to discuss your project.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            onClick={() => {
              setIsSubmitted(false)
              setCurrentStep(1)
              setFormData({
                name: '', email: '', phone: '', projectType: '',
                date: '', budget: '', message: '', location: ''
              })
            }}
            className="px-8 py-4 bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors duration-300"
          >
            Send Another Inquiry
          </motion.button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            Let's Create <span className="text-amber-400">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-playfair font-bold text-white mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-gray-300"
              >
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-black" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div>hello@lenscraft.com</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-gray-300"
              >
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-black" />
                </div>
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <div>(555) 123-4567</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-gray-300"
              >
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-black" />
                </div>
                <div>
                  <div className="font-semibold text-white">Studio</div>
                  <div>123 Creative Street, Art District</div>
                </div>
              </motion.div>
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-playfair font-bold text-white mb-4">
                Response Time
              </h4>
              <p className="text-gray-300">
                I typically respond to all inquiries within 24 hours. For urgent requests, 
                please call directly.
              </p>
            </div>
          </motion.div>

          {/* Multi-step Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-black p-8 rounded-lg"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-300">Step {currentStep} of {totalSteps}</span>
                <span className="text-amber-400">{Math.round((currentStep / totalSteps) * 100)}%</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-amber-400 rounded-full"
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {renderStep()}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center space-x-2 px-6 py-3 rounded transition-all duration-300 ${
                    currentStep === 1
                      ? 'bg-[#080808] text-gray-500 cursor-not-allowed'
                      : 'bg-[#080808] text-white hover:bg-zinc-900'
                  }`}
                >
                  <ArrowLeft size={20} />
                  <span>Previous</span>
                </button>

                {currentStep === totalSteps ? (
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-8 py-3 bg-amber-400 text-black font-semibold rounded hover:bg-amber-300 transition-colors duration-300"
                  >
                    <span>Send Inquiry</span>
                    <Check size={20} />
                  </motion.button>
                ) : (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center space-x-2 px-6 py-3 bg-amber-400 text-black font-semibold rounded hover:bg-amber-300 transition-colors duration-300"
                  >
                    <span>Next</span>
                    <ArrowRight size={20} />
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact