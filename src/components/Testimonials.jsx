import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Bride',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c6d4e6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Alex captured our wedding day perfectly. Every photo tells a story and brings back all the emotions from that magical day. The attention to detail and artistic vision is simply outstanding.',
      project: 'Wedding Photography'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO, TechStart',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'The corporate headshots Alex took for our team were exceptional. Professional, creative, and delivered exactly what we needed for our brand. Highly recommend for any business photography needs.',
      project: 'Corporate Photography'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Fashion Model',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Working with Alex was an incredible experience. The creative direction and technical expertise resulted in portfolio shots that exceeded all my expectations. True artistic vision.',
      project: 'Fashion Portfolio'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Art Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Alex brings a cinematic quality to every shot. The commercial work done for our campaign was nothing short of spectacular. Professional, reliable, and incredibly talented.',
      project: 'Commercial Campaign'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)
  }

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            Client <span className="text-amber-400">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What my clients say about their experience working with me
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-[#080808] p-8 md:p-12 rounded-lg relative"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-6 left-6 text-amber-400 opacity-20"
              >
                <Quote size={48} />
              </motion.div>

              <div className="relative z-10">
                {/* Stars */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center mb-6"
                >
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={24} className="text-amber-400 fill-current" />
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-white text-xl md:text-2xl leading-relaxed text-center mb-8 font-lato italic"
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.p>

                {/* Client Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center space-x-4"
                >
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                  />
                  <div className="text-center">
                    <h4 className="text-white font-playfair font-bold text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-amber-400 text-sm">
                      {testimonials[currentTestimonial].project}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-300 z-10"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-300 z-10"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-amber-400' : 'bg-zinc-900 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ y: -5 }}
              onClick={() => setCurrentTestimonial(index)}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-amber-400 text-black' 
                  : 'bg-[#080808] text-white hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-sm">{testimonial.name}</h5>
                  <p className="text-xs opacity-70">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm line-clamp-3">
                "{testimonial.text.substring(0, 100)}..."
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials