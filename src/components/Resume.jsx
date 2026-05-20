import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiFileText } from 'react-icons/fi'

const Resume = () => {
  // PDF file from public folder
  const pdfUrl = "/Balaji_R_Resume.pdf"  

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'Balaji_R_Resume.pdf'  // Downloaded file name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
    <section id="resume" className="py-20 bg-white">
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
              Resume
            </h2>
            <div className="w-20 h-1 bg-slate-600 mx-auto rounded-full"></div>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Download my resume to know more about my experience
            </p>
          </div>

          {/* Main Resume Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Top Section with Icon */}
              <div className="bg-slate-50 px-8 py-8 text-center border-b border-slate-200">
                <div className="w-24 h-24 bg-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FiFileText className="text-slate-600" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Balaji R - Frontend Developer
                </h3>
                <p className="text-slate-500">
                  4+ Years of Experience | React.js Specialist
                </p>
              </div>

              {/* Middle Section - Resume Info */}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-800">4+</p>
                    <p className="text-sm text-slate-500">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-800">10+</p>
                    <p className="text-sm text-slate-500">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-800">2</p>
                    <p className="text-sm text-slate-500">Companies</p>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h4 className="font-semibold text-slate-800 mb-3 text-center">
                    Resume Includes:
                  </h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      "Work Experience",
                      "Technical Skills",
                      "Projects",
                      "Education",
                      "Certifications",
                      "Contact Details"
                    ].map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Section - Action Buttons */}
              <div className="bg-slate-50 px-8 py-6 border-t border-slate-200">
                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.button
                    onClick={handleDownload}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <FiDownload size={18} />
                    Download PDF
                  </motion.button>
                </div>
                <p className="text-center text-xs text-slate-400 mt-4">
                  PDF format • Last updated: March 2025
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume