import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Camera, Users, Star } from 'lucide-react'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const achievements = [
    {
      year: '2018',
      title: 'Started Photography Journey',
      description: 'Began professional photography with a passion for capturing authentic moments',
      icon: Camera
    },
    {
      year: '2019',
      title: 'First Award Recognition',
      description: 'Won "Best New Photographer" at the Regional Photography Awards',
      icon: Award
    },
    {
      year: '2021',
      title: 'Studio Establishment',
      description: 'Opened premium photography studio in downtown, serving luxury clientele',
      icon: Users
    },
    {
      year: '2023',
      title: 'International Recognition',
      description: 'Featured in top photography magazines and won multiple international awards',
      icon: Star
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '15+', label: 'Awards Won' },
    { number: '5+', label: 'Years Experience' },
    { number: '2000+', label: 'Photos Captured' }
  ]

  return (
    <section id="about" className="py-20 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            About <span className="text-amber-400">The Artist</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating timeless visual stories that capture the essence of every moment
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Photographer"
                className="w-full h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400 rounded-full flex items-center justify-center"
            >
              <Camera size={32} className="text-black" />
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-playfair font-bold text-white">
              Alex Thompson
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              With over 5 years of experience in professional photography, I specialize in creating 
              cinematic, award-winning images that tell compelling stories. My work has been featured 
              in numerous publications and has earned recognition from industry professionals worldwide.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe that every photograph should evoke emotion and capture the authentic essence 
              of the moment. Whether it's a wedding, portrait session, or commercial shoot, I bring 
              the same level of passion and artistic vision to every project.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-amber-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative"
        >
          <h3 className="text-3xl font-playfair font-bold text-white text-center mb-12">
            My Journey
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-400" />
            
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-black p-6 rounded-lg border border-gray-700">
                      <div className="text-amber-400 font-bold text-lg mb-2">
                        {achievement.year}
                      </div>
                      <h4 className="text-white font-playfair font-bold text-xl mb-3">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center z-10">
                    <Icon size={20} className="text-black" />
                  </div>
                  
                  <div className="w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About