import React from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Groupage Technologies",
      location: "Chennai",
      period: "Sep 2022 – Present",
      duration: "3+ Years",
      achievements: [
        "Designed and developed scalable React.js frontend architecture using Vite for faster builds and independent deployments",
        "Built high-performance logistics management applications used by 1000+ daily active users",
        "Improved operational efficiency by 30% through optimized CRUD workflows for shipment tracking and booking systems",
        "Developed and maintained the AllMasters Logistics Platform using React.js, Node.js, and MongoDB",
        "Built a user-friendly container booking system allowing clients to reserve shipment space easily",
        "Implemented JWT authentication and role-based access control for secure access management",
        "Integrated multiple REST APIs for real-time shipment data, booking workflows, and operational dashboards"
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Redux", "JWT", "REST APIs"]
    },
    {
      title: "UI Developer",
      company: "M2P Fintech",
      location: "Chennai",
      period: "Apr 2022 – Aug 2022",
      duration: "5 Months",
      achievements: [
        "Developed responsive and pixel-perfect user interfaces using HTML5, CSS3, and JavaScript",
        "Built reusable React components for financial dashboards and data visualization",
        "Collaborated with design team to implement UI/UX designs with 100% accuracy",
        "Optimized frontend performance achieving 40% faster page load times",
        "Implemented cross-browser compatibility and mobile-responsive designs",
        "Worked closely with backend team for seamless API integration",
        "Participated in code reviews and maintained code quality standards"
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "REST APIs"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  }

  return (
    <section id="experience" className="py-20 bg-slate-50">
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
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-slate-600 mx-auto rounded-full"></div>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              My professional journey and experience
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line - Hidden on mobile, visible on desktop */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-300 hidden md:block"></div>

            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                <div className="md:flex gap-6">
                  {/* Timeline Icon */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-md border-2 border-slate-200 z-10 relative">
                    <FiBriefcase className="text-slate-600 w-7 h-7" />
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="flex-1 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Header with gradient line */}
                    <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-400"></div>
                    
                    <div className="p-6 md:p-8">
                      {/* Company Header */}
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                            {exp.title}
                          </h3>
                          <p className="text-slate-600 font-semibold text-lg mt-1">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full">
                            <FiCalendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <FiMapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm mb-4">
                        <FiAward size={14} />
                        <span>{exp.duration} of experience</span>
                      </div>

                      {/* Achievements List */}
                      <div className="mb-5">
                        <h4 className="font-semibold text-slate-800 mb-3 text-base">
                          Key Achievements & Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.03 }}
                              className="flex items-start gap-2 text-slate-600 text-sm"
                            >
                              <span className="text-slate-500 mt-1">▹</span>
                              <span className="leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2 text-sm">
                          Tech Stack:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.02 }}
                              whileHover={{ scale: 1.05, backgroundColor: "#e2e8f0" }}
                              className="px-2.5 py-1 bg-slate-50 text-slate-700 rounded-md text-xs font-medium border border-slate-200 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Experience Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-white rounded-2xl p-6 shadow-md border border-slate-100"
          >
            <div className="flex flex-wrap justify-center gap-8">
              <div>
                <div className="text-3xl font-bold text-slate-800">4+ Years</div>
                <div className="text-sm text-slate-500">Total Experience</div>
              </div>
              <div className="w-px h-12 bg-slate-200 hidden sm:block"></div>
              <div>
                <div className="text-3xl font-bold text-slate-800">2</div>
                <div className="text-sm text-slate-500">Companies Worked</div>
              </div>
              <div className="w-px h-12 bg-slate-200 hidden sm:block"></div>
              <div>
                <div className="text-3xl font-bold text-slate-800">10+</div>
                <div className="text-sm text-slate-500">Projects Delivered</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience