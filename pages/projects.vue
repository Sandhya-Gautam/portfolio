<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-white mb-6">My Projects</h1>
        <p class="text-xl text-gray-300">A showcase of my recent work</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" 
             class="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition duration-300 group">
          <div class="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
            <span class="text-white text-lg font-semibold">{{ project.title }}</span>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
            <p class="text-gray-400 mb-4 line-clamp-3">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech"
                    class="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full">
                {{ tech }}
              </span>
            </div>
            <div class="flex gap-3">
              <a href="#" class="text-purple-400 hover:text-purple-300 text-sm font-medium transition duration-300">
                Live Demo
              </a>
              <a href="#" class="text-purple-400 hover:text-purple-300 text-sm font-medium transition duration-300">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <NuxtLink to="/" 
                  class="inline-flex items-center text-purple-400 hover:text-purple-300 transition duration-300">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with modern technologies, featuring user authentication, payment processing, and admin dashboard.",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
    technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard that provides detailed weather information with interactive maps and forecasting.",
    technologies: ["Vue.js", "Weather API", "Chart.js", "CSS3"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
    technologies: ["Nuxt.js", "Tailwind CSS", "GSAP", "Netlify"]
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A content management system for bloggers with markdown support, SEO optimization, and social sharing features.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Vercel"]
  },
  {
    id: 6,
    title: "Mobile Banking App",
    description: "A secure mobile banking application with biometric authentication, transaction history, and budget tracking.",
    technologies: ["React Native", "Node.js", "JWT", "MongoDB"]
  }
]
</script>
