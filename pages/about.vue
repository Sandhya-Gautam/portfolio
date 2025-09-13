<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 z-0 pattern-dots"></div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
        <p class="text-xl text-gray-600">Get to know me better</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Education</h3>
          <div class="space-y-3 text-gray-700">
            <div>
              <h4 class="font-semibold text-gray-900">Bachelor of Software Engineering</h4>
              <p class="text-sm text-gray-500">Nepal College of Information Technology • 2021-2025</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Experience</h3>
          <div class="space-y-3 text-gray-700">
            <div>
              <h4 class="font-semibold text-gray-900">Full-Stack Developer</h4>
              <p class="text-sm text-gray-500">Awecode Solutions Pvt Ltd • July 2024 - Present</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Achievements Section -->
      <div class="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-8 mt-4">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Achievements</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg p-4 border border-gray-200">
            <h4 class="font-semibold text-gray-900 mb-2">🏆 Winner - Hackademia</h4>
            <p class="text-sm text-gray-600">AI hackathon organized at King's College</p>
          </div>
          <div class="bg-white rounded-lg p-4 border border-gray-200">
            <h4 class="font-semibold text-gray-900 mb-2">🎨 Best UI/UX Award</h4>
            <p class="text-sm text-gray-600">Sagarmatha Hackathon at Sagarmatha College of Engineering</p>
          </div>
          <div class="bg-white rounded-lg p-4 border border-gray-200">
            <h4 class="font-semibold text-gray-900 mb-2">📚 HultPrize Organizer</h4>
            <p class="text-sm text-gray-600">Organized HultPrize event at NCIT</p>
          </div>
          <div class="bg-white rounded-lg p-4 border border-gray-200">
            <h4 class="font-semibold text-gray-900 mb-2">🎓 Continuous Learning</h4>
            <p class="text-sm text-gray-600">Attended trainings in AI, Data Science, Entrepreneurship & Leadership</p>
          </div>
        </div>
      </div>
      
      <div class="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">My Story</h2>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>
            I'm a software developer with over a year of professional experience and several years of practical
            work building and improving software systems. I'm good at solving problems, working well with
            different teams, and creating clean, scalable, and easy-to-maintain solutions.
          </p>
          <p>
            I specialize in AI/ML development, particularly in natural language processing and computer vision.
            My experience includes building intelligent chatbots, query refinement systems, and medical diagnosis
            applications. I'm passionate about leveraging technology to solve real-world problems.
          </p>
          <p>
            When I'm not coding, you can find me exploring new AI technologies, participating in hackathons,
            or contributing to open source projects. I believe in continuous learning and staying current with
            the latest developments in technology.
          </p>
        </div>
      </div>

      <div class="text-center mt-12">
        <NuxtLink to="/" 
                  class="inline-flex items-center text-gray-700 hover:text-gray-900 transition duration-300 font-medium">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pattern-dots {
  background-image: radial-gradient(circle at 2px 2px, rgba(156, 163, 175, 0.15) 1px, transparent 0);
  background-size: 20px 20px;
  background-repeat: repeat;
}
</style>
