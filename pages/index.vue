<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 z-0"></div>
    
    <!-- Hero Section -->
    <section class="relative z-10 pattern-dots overflow-hidden py-24 sm:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hello, I'm
            <span class="text-gray-600">
              Sandhya Gautam
            </span>
          </h1>
          <p class="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light">
            Python Developer & AI Enthusiast
          </p>
          <p class="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create intelligent solutions with AI and build scalable web applications. Passionate about solving complex problems with clean, maintainable code.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/projects" 
                      class="bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-lg transition duration-300">
              View My Work
            </NuxtLink>
            <NuxtLink to="/contact" 
                      class="border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-4 px-8 rounded-lg transition duration-300">
              Get In Touch
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p class="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Software developer with over a year of professional experience building and improving software systems. Specialized in AI/ML solutions and full-stack development.
          </p>
        </div>
        
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition duration-300">
            <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
            <p class="text-gray-600">Developing intelligent solutions with NLP, computer vision, and deep learning models using Python and modern frameworks.</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition duration-300">
            <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
            <p class="text-gray-600">Building scalable web applications with Django, Vue.js, Nuxt.js, and modern web technologies with responsive design.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p class="text-gray-600">Tools and technologies I work with</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div v-for="skill in skills" :key="skill" 
               class="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center border border-gray-200 transition duration-300">
            <span class="text-gray-800 font-medium">{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
        <p class="text-gray-600 mb-8 text-lg leading-relaxed">
          Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
        </p>
        <NuxtLink to="/contact" 
                  class="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-lg transition duration-300 cursor-pointer">
          Contact Me
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const skills = [
  'Python',
  'Django',
  'Machine Learning',
  'NLP',
  'Computer Vision',
  'PostgreSQL',
  'Vue.js',
  'Nuxt.js',
  'TypeScript',
  'Tailwind CSS',
  'BERT',
  'LDA/LSA',
  'Pytest',
  'API Integration',
  'Git'
]
</script>

<style scoped>
.pattern-dots {
  background-image: radial-gradient(circle at 2px 2px, rgba(24, 25, 26, 0.15) 1.3px, transparent 0);
  background-size: 20px 20px;
  background-repeat: repeat;
}
</style>
