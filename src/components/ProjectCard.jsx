import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiArrowRight } from 'react-icons/fi'

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-2xl overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover min-h-[400px]"
          />
        </motion.div>
        
        <div className="p-8 lg:p-10">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              {project.role}
            </span>
            <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
              {project.tech}
            </span>
          </div>
          
          <h3 className="text-3xl font-bold mb-4 text-gray-800">{project.title}</h3>
          
          <div className="mb-6">
            <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">⚠️ The Problem</h4>
            <p className="text-gray-700">{project.problem}</p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-bold text-blue-600 mb-2 flex items-center gap-2">🔧 The Process</h4>
            <ul className="space-y-2">
              {project.process.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                  <FiArrowRight size={16} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="font-bold text-green-600 mb-2 flex items-center gap-2">📈 The Result</h4>
            <div className="grid grid-cols-3 gap-3">
              {project.results.map((result, idx) => (
                <div key={idx} className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-700">{result.metric}</div>
                  <div className="text-xs text-gray-600">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <a 
            href={project.liveUrl}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all group"
          >
            View Live Project
            <FiExternalLink size={18} className="group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard