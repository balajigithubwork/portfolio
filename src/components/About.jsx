import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiCode, FiBriefcase, FiHeart, FiCoffee } from 'react-icons/fi'

const About = () => {
  const stats = [
    { icon: FiBriefcase, value: "4+", label: "Years Experience", color: "slate" },
    { icon: FiUsers, value: "10+", label: "Projects Completed", color: "slate" },
    { icon: FiCode, value: "100+", label: "Daily Active Users", color: "slate" },
    { icon: FiAward, value: "30%", label: "Efficiency Improved", color: "slate" }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  }

  return (
    <section id="about" className="py-20 bg-white">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-slate-600 mx-auto rounded-full"></div>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Get to know me better
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Left side - About Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-800">
                  Who I Am
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  I'm a <span className="font-semibold text-slate-800">Frontend Developer with 4+ years of experience</span> specializing in React.js and the MERN stack. 
                  I excel at building scalable, high-performance web applications for complex domains like logistics, 
                  e-commerce, and real-time platforms.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  My toolkit includes modern technologies like <span className="font-medium text-slate-700">Redux, TypeScript, React Native (Expo), and Next.js</span>, 
                  enabling me to deliver responsive and dynamic user experiences. I thrive in Agile/Scrum teams and 
                  excel at end-to-end feature development.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiHeart className="text-slate-600" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">My Philosophy</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      "Clean code, seamless UX, and performance optimization aren't just goals — they're my standard. 
                      I believe in building applications that users love and developers enjoy maintaining."
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiCoffee className="text-slate-600" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Beyond the Code</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                      or enjoying a good cup of coffee while planning my next side project.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Stats & Skills Highlights */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-xl p-5 text-center shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="text-slate-600" size={22} />
                    </div>
                    <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Core Competencies */}
              <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                <h3 className="font-semibold text-slate-800 mb-4 text-lg">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js", "Redux Toolkit", "TypeScript", "Next.js",
                    "Node.js", "Express.js", "MongoDB", "Tailwind CSS",
                    "Material-UI", "JWT Auth", "REST APIs", "Git/GitHub"
                  ].map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.02 }}
                      whileHover={{ scale: 1.05, backgroundColor: "#e2e8f0" }}
                      className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg text-xs font-medium border border-slate-100 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Quote or Achievement */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl p-6 text-center border border-slate-200"
              >
                <p className="text-slate-600 italic text-sm leading-relaxed">
                  "Building scalable solutions that make a difference — one line of code at a time."
                </p>
                <div className="mt-3 text-slate-400 text-xs">— Balaji R</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About