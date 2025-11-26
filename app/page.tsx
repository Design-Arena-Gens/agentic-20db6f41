'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, Film, Award, Mail, Github, Linkedin, Camera, Edit3, Sparkles } from 'lucide-react'
import Scene3D from '@/components/Scene3D'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const projects = [
    {
      title: "Ethereal Dreams",
      category: "Short Film",
      year: "2024",
      description: "A poetic exploration of memory and time through experimental visual storytelling.",
      stats: { views: "2.5M", duration: "12:34", awards: 3 }
    },
    {
      title: "Urban Pulse",
      category: "Documentary",
      year: "2024",
      description: "Capturing the heartbeat of city life through cinematic time-lapse sequences.",
      stats: { views: "1.8M", duration: "18:45", awards: 2 }
    },
    {
      title: "Midnight Reflections",
      category: "Music Video",
      year: "2023",
      description: "Genre-bending visual narrative with seamless transitions and color grading.",
      stats: { views: "3.2M", duration: "04:23", awards: 5 }
    },
    {
      title: "Beyond the Horizon",
      category: "Commercial",
      year: "2023",
      description: "High-impact brand storytelling with dynamic motion graphics integration.",
      stats: { views: "5.1M", duration: "01:30", awards: 4 }
    }
  ]

  const skills = [
    { name: "Premiere Pro", level: 98 },
    { name: "DaVinci Resolve", level: 95 },
    { name: "After Effects", level: 92 },
    { name: "Final Cut Pro", level: 88 },
    { name: "Color Grading", level: 96 },
    { name: "Motion Graphics", level: 90 }
  ]

  const awards = [
    { year: "2024", title: "Best Editing - Sundance Film Festival", project: "Ethereal Dreams" },
    { year: "2024", title: "Gold Award - ADDY Awards", project: "Beyond the Horizon" },
    { year: "2023", title: "Editor's Choice - Vimeo Staff Pick", project: "Midnight Reflections" },
    { year: "2023", title: "Excellence in Post-Production - SXSW", project: "Urban Pulse" }
  ]

  return (
    <div ref={containerRef} className="relative">
      {/* 3D Background Scene */}
      <div className="fixed inset-0 z-0">
        <Scene3D mousePosition={mousePosition} />
      </div>

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        <div className="text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-4"
          >
            <span className="font-jetbrains text-accent-glow text-sm tracking-[0.3em] uppercase">
              Video Editor & Visual Storyteller
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-playfair font-bold text-7xl md:text-9xl mb-6 leading-none tracking-tight"
          >
            JESHUA DAVID
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-inter text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Crafting cinematic narratives through precision editing and visual artistry.
            Award-winning editor specializing in storytelling that resonates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex gap-6 justify-center"
          >
            <button className="group relative px-8 py-4 bg-accent-glow text-background font-jetbrains font-medium text-sm tracking-wider uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,209,255,0.5)]">
              <span className="relative z-10 flex items-center gap-2">
                <Play size={18} /> View Reel
              </span>
            </button>
            <button className="px-8 py-4 border border-text-secondary text-text-primary font-jetbrains font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:border-accent-glow hover:text-accent-glow hover:shadow-[0_0_20px_rgba(0,209,255,0.3)]">
              <span className="flex items-center gap-2">
                <Mail size={18} /> Contact
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20"
          >
            <div className="inline-block animate-bounce">
              <div className="w-6 h-10 border-2 border-text-secondary rounded-full p-1">
                <div className="w-1.5 h-3 bg-accent-glow rounded-full mx-auto animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="relative z-10 min-h-screen flex items-center px-6 py-32 bg-gradient-to-b from-transparent via-surface/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair font-bold text-5xl md:text-7xl mb-12 flex items-center gap-4">
              <Sparkles className="text-accent-glow" size={48} />
              About
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="font-inter text-text-primary text-lg leading-relaxed mb-6">
                  With over 8 years of experience in post-production, I specialize in transforming
                  raw footage into compelling visual narratives. My work has been featured at major
                  film festivals and has garnered millions of views across platforms.
                </p>
                <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
                  I believe that editing is the invisible art—where timing, rhythm, and emotion
                  converge to create stories that linger long after the screen fades to black.
                </p>
                <div className="flex gap-4 mt-8">
                  <a href="#" className="text-text-secondary hover:text-accent-glow transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-text-secondary hover:text-accent-glow transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-text-secondary hover:text-accent-glow transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-playfair font-bold text-2xl mb-6">Technical Expertise</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-jetbrains text-sm text-text-primary">{skill.name}</span>
                        <span className="font-jetbrains text-sm text-accent-glow">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-surface rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-accent-glow to-accent-secondary"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 min-h-screen px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-playfair font-bold text-5xl md:text-7xl mb-4 flex items-center gap-4">
              <Film className="text-accent-glow" size={48} />
              Featured Work
            </h2>
            <p className="font-inter text-text-secondary text-lg">
              A curated selection of recent projects showcasing diverse storytelling approaches
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-surface border border-text-secondary/20 hover:border-accent-glow/50 transition-all duration-500 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-accent-glow/20 to-surface relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="text-accent-glow/30 group-hover:text-accent-glow/60 transition-colors" size={64} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-accent-glow flex items-center justify-center shadow-[0_0_30px_rgba(0,209,255,0.6)]">
                      <Play className="text-background ml-1" size={28} />
                    </div>
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-playfair font-bold text-2xl mb-1">{project.title}</h3>
                      <p className="font-jetbrains text-accent-glow text-xs tracking-wider uppercase">
                        {project.category} • {project.year}
                      </p>
                    </div>
                  </div>

                  <p className="font-inter text-text-secondary text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex gap-6 font-jetbrains text-xs text-text-secondary">
                    <span className="flex items-center gap-1">
                      <Play size={12} /> {project.stats.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Edit3 size={12} /> {project.stats.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award size={12} /> {project.stats.awards} Awards
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="relative z-10 min-h-screen flex items-center px-6 py-32 bg-gradient-to-b from-transparent via-surface/30 to-transparent">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair font-bold text-5xl md:text-7xl mb-12 flex items-center gap-4">
              <Award className="text-accent-glow" size={48} />
              Recognition
            </h2>

            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group border-l-2 border-text-secondary/30 hover:border-accent-glow pl-8 py-4 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="font-playfair font-bold text-xl md:text-2xl text-text-primary group-hover:text-accent-glow transition-colors">
                        {award.title}
                      </h3>
                      <p className="font-inter text-text-secondary text-sm mt-1">
                        {award.project}
                      </p>
                    </div>
                    <span className="font-jetbrains text-accent-glow text-sm tracking-wider">
                      {award.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl"
        >
          <h2 className="font-playfair font-bold text-6xl md:text-8xl mb-8">
            Let's Create Together
          </h2>
          <p className="font-inter text-text-secondary text-xl mb-12 leading-relaxed">
            Available for select projects and collaborations.
            Let's bring your vision to life through the art of editing.
          </p>

          <button className="group relative px-12 py-5 bg-accent-glow text-background font-jetbrains font-medium text-base tracking-wider uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,209,255,0.6)]">
            <span className="relative z-10 flex items-center gap-3">
              <Mail size={20} /> Get In Touch
            </span>
          </button>

          <div className="mt-16 pt-16 border-t border-text-secondary/20">
            <p className="font-jetbrains text-text-secondary text-xs tracking-wider">
              © 2024 JESHUA DAVID. ALL RIGHTS RESERVED.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
