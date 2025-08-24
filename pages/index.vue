<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div class="text-center">
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hello, I'm
            <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          <p class="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p class="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I craft beautiful, functional, and user-centered digital experiences that make a difference.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/projects" 
                      class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105">
              View My Work
            </NuxtLink>
            <NuxtLink to="/contact" 
                      class="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-4 px-8 rounded-full transition duration-300">
              Get In Touch
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-white/5 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Frontend Development</h3>
            <p class="text-gray-400">React, Vue, TypeScript, and modern CSS frameworks for responsive web applications.</p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Backend Development</h3>
            <p class="text-gray-400">Node.js, Python, databases, and cloud services for scalable applications.</p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">UI/UX Design</h3>
            <p class="text-gray-400">Creating intuitive interfaces with attention to user experience and accessibility.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p class="text-gray-400">Tools and technologies I work with</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div v-for="skill in skills" :key="skill" 
               class="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-purple-400/50 transition duration-300">
            <span class="text-white font-medium">{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white/5 backdrop-blur-sm">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
        <p class="text-gray-400 mb-8 text-lg">
          Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
        </p>
        <NuxtLink to="/contact" 
                  class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105">
          Contact Me
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const skills = [
  'JavaScript',
  'TypeScript',
  'Vue.js',
  'Nuxt.js',
  'React',
  'Node.js',
  'Python',
  'HTML/CSS',
  'Tailwind CSS',
  'Git',
  'Docker',
  'AWS'
]
</script>
