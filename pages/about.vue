<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-white mb-6">About Me</h1>
        <p class="text-xl text-gray-300">Get to know me better</p>
      </div>
      
      <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
        <h2 class="text-2xl font-bold text-white mb-6">My Story</h2>
        <div class="space-y-4 text-gray-300 leading-relaxed">
          <p>
            I'm a passionate full-stack developer with a love for creating innovative digital solutions. 
            My journey in tech started several years ago, and since then, I've been constantly learning 
            and evolving my skills to stay current with the latest technologies.
          </p>
          <p>
            I believe in writing clean, maintainable code and creating user experiences that are both 
            beautiful and functional. When I'm not coding, you can find me exploring new technologies, 
            contributing to open source projects, or enjoying the great outdoors.
          </p>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h3 class="text-xl font-bold text-white mb-4">Education</h3>
          <div class="space-y-3 text-gray-300">
            <div>
              <h4 class="font-semibold text-white">Computer Science Degree</h4>
              <p class="text-sm text-gray-400">University Name • 2018-2022</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h3 class="text-xl font-bold text-white mb-4">Experience</h3>
          <div class="space-y-3 text-gray-300">
            <div>
              <h4 class="font-semibold text-white">Full Stack Developer</h4>
              <p class="text-sm text-gray-400">Company Name • 2022-Present</p>
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
