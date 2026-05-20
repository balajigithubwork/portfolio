import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import EcomImg from "../assets/ecom.png"
import QuizImg from "../assets/quiz.png"
import ExpenseImg from "../assets/expense.png"

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "E-comify",
      description: "A fully responsive e-commerce platform which enables users to filter products by category, add items to their cart, and adjust quantities for a seamless shopping experience.",
      tech: ["React.js", "HTML5", "CSS3", "JavaScript"],
      image: EcomImg,
      liveUrl: "https://e-comify.netlify.app/"
    },
    {
      id: 2,
      title: "Quiz App",
      description: "Interactive quiz application with questions covering React, JavaScript, HTML, CSS, and Redux. Features score tracking, category breakdown, and instant feedback.",
      tech: ["React.js", "TypeScript", "CSS"],
      image: QuizImg,
      liveUrl: "https://todaysquiz.netlify.app/"
    },
    {
      id: 3,
      title: "Expense Tracker",
      description: "Track your income and expenses with an intuitive interface. Add, edit, and delete transactions to manage your personal finances effectively.",
      tech: ["React.js", "CSS", "Local Storage"],
      image: ExpenseImg,
      liveUrl: "https://expensetrackernew.netlify.app/"
    }
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  }

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              Projects
            </h2>
            <div className="w-20 h-1 bg-slate-600 mx-auto rounded-full"></div>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Some of my recent work
            </p>
          </div>

          {/* Projects Grid - 3 columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  
                  {/* Live Link Overlay */}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-white rounded-full text-slate-700 hover:text-slate-900 shadow-lg"
                      >
                        <FiExternalLink size={20} />
                      </motion.a>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo Link */}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="mt-4 inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-800 font-medium transition"
                    >
                      Live Demo →
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Work