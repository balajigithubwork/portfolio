import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiPhone } from 'react-icons/fi'

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-slate-600 mx-auto rounded-full"></div>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Let's connect and work together
            </p>
          </div>

          {/* Contact Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Email Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-slate-600" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                  <a 
                    href="mailto:rbalaji111299@gmail.com" 
                    className="text-slate-500 hover:text-slate-700 transition text-sm"
                  >
                    rbalaji111299@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-slate-600" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                  <a 
                    href="tel:+917708633828" 
                    className="text-slate-500 hover:text-slate-700 transition text-sm"
                  >
                    (+91) 7708633828
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-slate-600" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Location</h3>
                  <p className="text-slate-500 text-sm">Kallakurichi, India</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🌐</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Connect with me</h3>
                  <div className="flex gap-3">
                    <motion.a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, backgroundColor: "#1e293b", color: "white" }}
                      className="p-2 bg-slate-100 rounded-lg text-slate-600 transition-all duration-300 inline-flex items-center justify-center"
                    >
                      <FiGithub size={18} />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, backgroundColor: "#1e293b", color: "white" }}
                      className="p-2 bg-slate-100 rounded-lg text-slate-600 transition-all duration-300 inline-flex items-center justify-center"
                    >
                      <FiLinkedin size={18} />
                    </motion.a>
                    <motion.a
                      href="mailto:rbalaji111299@gmail.com"
                      whileHover={{ scale: 1.1, backgroundColor: "#1e293b", color: "white" }}
                      className="p-2 bg-slate-100 rounded-lg text-slate-600 transition-all duration-300 inline-flex items-center justify-center"
                    >
                      <FiMail size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact