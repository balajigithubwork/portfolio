import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Navbar from './components/Navbar'
import Experience from './components/Experience'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="relative bg-white">
      <Navbar />
      
      {/* Animated progress bar - Slate theme */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-slate-600 z-50 origin-left"
        style={{ scaleX }}
      />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
        <Resume />
      </main>
      
      {/* Footer - Clean slate theme */}
      <footer className="relative z-10 py-8 text-center border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-slate-400 text-sm">
            © 2025 Balaji R — Crafted with 💻 using React, Framer Motion & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App