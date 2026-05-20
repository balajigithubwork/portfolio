import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import ProfileImage from '../assets/profile.png'

const Hero = () => {
    // Staggered animation variants for text content
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

    // Image animation variants
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -5 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.3
            }
        }
    }

    // Badge animations
    const badgeVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 200, delay: 0.5 }
        },
        hover: {
            scale: 1.1,
            transition: { type: "spring", stiffness: 400 }
        }
    }

    return (
        <section className="min-h-screen flex items-center justify-center relative pt-20 bg-white overflow-hidden" id="home">
            {/* Animated background particles - optional subtle effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-slate-300 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, -100],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left side - Text Content with staggered animations */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="order-2 md:order-1"
                    >
                        {/* Status badge */}
                        <motion.div variants={itemVariants}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-sm text-slate-700 font-medium">Open for opportunities</span>
                            </div>
                        </motion.div>

                        {/* Name with typing effect */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-3"
                        >
                            Balaji R
                        </motion.h1>

                        {/* Title with cursor blink */}
                        <motion.h2
                            variants={itemVariants}
                            className="text-2xl md:text-3xl text-slate-600 font-semibold mb-4"
                        >
                            Frontend Developer — React.js
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="inline-block w-0.5 h-6 bg-slate-600 ml-1"
                            />
                        </motion.h2>
                        {/* Tech stack badges - staggered entrance */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6">
                            {["React.js", "JavaScript", "TypeScript", "React Native", "Redux"].map((tech, idx) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + idx * 0.05, type: "spring", stiffness: 200 }}
                                    whileHover={{ scale: 1.1, backgroundColor: "#e2e8f0" }}
                                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium cursor-default"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* Description */}
                        <motion.p variants={itemVariants} className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Building <motion.span
                                className="font-semibold text-slate-800 inline-block"
                                whileHover={{ scale: 1.05 }}
                            >scalable, high-performance web applications</motion.span> for logistics, e-commerce, and real-time platforms with 4+ years of experience.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex gap-4 flex-wrap mb-8">
                            <motion.a
                                href="#work"
                                whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-900 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                            >
                                View Projects →
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, borderColor: "#1e293b", color: "#1e293b" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-full font-medium transition-all duration-300 cursor-pointer"
                            >
                                Contact Me
                            </motion.a>
                        </motion.div>

                        {/* Social Links with hover animations */}
                        <motion.div variants={itemVariants} className="flex gap-4">
                            <motion.a
                                href="https://github.com/balajigithubwork"
                                target="_blank"
                                whileHover={{ y: -5, rotate: 360, backgroundColor: "#1e293b", color: "white" }}
                                className="text-slate-500 transition p-2 bg-slate-50 rounded-full inline-flex items-center justify-center"
                                style={{ width: 40, height: 40 }}
                            >
                                <FiGithub size={20} />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/balajir11/"
                                target="_blank"
                                whileHover={{ y: -5, rotate: 360, backgroundColor: "#1e293b", color: "white" }}
                                className="text-slate-500 transition p-2 bg-slate-50 rounded-full inline-flex items-center justify-center"
                                style={{ width: 40, height: 40 }}
                            >
                                <FiLinkedin size={20} />
                            </motion.a>
                            <motion.a
                                href="mailto:rbalaji111299@gmail.com"
                                whileHover={{ y: -5, rotate: 360, backgroundColor: "#1e293b", color: "white" }}
                                className="text-slate-500 transition p-2 bg-slate-50 rounded-full inline-flex items-center justify-center"
                                style={{ width: 40, height: 40 }}
                            >
                                <FiMail size={20} />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Image with enhanced animations */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        className="order-1 md:order-2 flex justify-center"
                    >
                        <div className="relative">
                            {/* Pulsing ring effect */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.2, 0.5]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-slate-200 rounded-full w-72 h-72 md:w-80 md:h-80 mx-auto"
                            />

                            {/* Decorative circle behind image */}
                            <div className="absolute inset-0 bg-slate-100 rounded-full w-72 h-72 md:w-80 md:h-80 mx-auto"></div>

                            {/* Main image with floating animation */}
                            <motion.div
                                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <img
                                    src={ProfileImage}
                                    alt="Balaji R - Frontend Developer"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Experience badge with bounce */}
                            <motion.div
                                variants={badgeVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 border border-slate-100 cursor-default"
                            >
                                <motion.div
                                    className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                >
                                    <span className="text-xl">⚡</span>
                                </motion.div>
                                <div>
                                    <div className="font-bold text-slate-900">4+ Years</div>
                                    <div className="text-xs text-slate-500">Experience</div>
                                </div>
                            </motion.div>

                            {/* Projects badge with bounce */}
                            <motion.div
                                variants={badgeVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                className="absolute -top-3 -left-3 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 border border-slate-100 cursor-default"
                            >
                                <motion.div
                                    className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center"
                                    animate={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                                >
                                    <span className="text-xl">🚀</span>
                                </motion.div>
                                <div>
                                    <div className="font-bold text-slate-900">10+</div>
                                    <div className="text-xs text-slate-500">Projects</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Enhanced Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
                >
                    <motion.a
                        href="#about"
                        className="text-slate-400 hover:text-slate-600 transition flex flex-col items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                    >
                        <span className="text-xs text-slate-400 text-sm">Scroll</span>
                        <FiArrowDown size={24} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero