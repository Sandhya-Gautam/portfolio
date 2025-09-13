<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 z-0 pattern-dots"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Projects</h1>
        <p class="text-xl text-gray-600">with my contributions</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" 
             class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300 group">
          <div class="h-48 bg-gray-100 flex items-center justify-center border-b border-gray-200">
            <span class="text-gray-700 text-lg font-semibold">{{ project.title }}</span>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4 line-clamp-3">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech"
                    class="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md border border-gray-200">
                {{ tech }}
              </span>
            </div>
            <div class="flex gap-3">
              <a v-if="project.demoUrl && project.demoUrl !== '#'" 
                 :href="project.demoUrl" 
                 target="_blank"
                 class="text-gray-700 hover:text-gray-900 text-sm font-medium transition duration-300 border-b border-gray-300 hover:border-gray-900">
                Live Demo
              </a>
              <a v-if="project.sourceCode && project.sourceCode !== '#'" 
                 :href="project.sourceCode" 
                 target="_blank"
                 class="text-gray-700 hover:text-gray-900 text-sm font-medium transition duration-300 border-b border-gray-300 hover:border-gray-900">
                Source Code
              </a>
              <span v-if="(!project.demoUrl || project.demoUrl === '#') && (!project.sourceCode || project.sourceCode === '#')"
                    class="text-gray-500 text-sm font-medium">
                Private Project
              </span>
            </div>
          </div>
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

<script setup>
const projects = [
  {
    id: 1,
    title: "Modular Query Refinement",
    description: "Built AI model to expand the query input by the user using Latent Dirichlet Algorithm (LDA) and coherence techniques. Experimenting with different algorithms for preprocessing and training with multiple models implementing LDA, LSA, keybert, etc for better results.",
    technologies: ["Django", "PostgreSQL", "AI Model", "LDA", "LSA", "Keybert", "Python"],
    demoUrl: "#",
    sourceCode: "#"
  },
  {
    id: 2,
    title: "Edusanjal.com",
    description: "Educational platform developed at Awecode Solutions. Built comprehensive web application with responsive design, integrated third-party APIs including social media authentication and payment gateways.",
    technologies: ["Django", "PostgreSQL", "Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://edusanjal.com",
    sourceCode: "#"
  },
  {
    id: 3,
    title: "Medical Chatbot",
    description: "Built flexible and efficient frontend integrated with Django backend. Fine-tuned sentence transformer and BERT-base transformer to train model on medical data present in SQUAD format.",
    technologies: ["Django", "BERT", "Sentence Transformers", "Python", "NLP", "Machine Learning"],
    demoUrl: "#",
    sourceCode: "#"
  },
  {
    id: 4,
    title: "Pneumonia Detection Website",
    description: "Built a pneumonia detection web app with Django backend and ML model integration. Enabled real-time X-ray image upload, analysis, and result display with computer vision capabilities.",
    technologies: ["Django", "Machine Learning", "Computer Vision", "Python", "Image Processing"],
    demoUrl: "#",
    sourceCode: "#"
  },
  {
    id: 5,
    title: "Sikshya - Voice to Text Summarizer",
    description: "Converts class lecture voice to text and summarizes it extracting the key points. Mobile application with Django backend and Flutter frontend for educational content processing.",
    technologies: ["Django", "Flutter", "NLP", "Speech Recognition", "Text Summarization", "Python"],
    demoUrl: "#",
    sourceCode: "#"
  },
  {
    id: 6,
    title: "Swasthya - Health Monitoring App",
    description: "Mobile application with Django backend and Flutter frontend. Keeps record of users' medical results with diet monitoring system for comprehensive health tracking.",
    technologies: ["Django", "Flutter", "PostgreSQL", "Health Tech", "Mobile Development"],
    demoUrl: "#",
    sourceCode: "#"
  },
  {
    id: 7,
    title: "Awecode.com",
    description: "Company website developed at Awecode Solutions. Implemented modern web design with responsive interfaces and optimized user experience across devices.",
    technologies: ["Django", "Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://awecode.com",
    sourceCode: "#"
  },
  {
    id: 8,
    title: "Awecountant.com",
    description: "Accounting and business management platform. Developed comprehensive financial management system with modern web technologies and efficient database design.",
    technologies: ["Django", "PostgreSQL", "Vue.js", "TypeScript", "Financial Tech"],
    demoUrl: "https://awecountant.com",
    sourceCode: "#"
  }
]
</script>

<style scoped>
.pattern-dots {
  background-image: radial-gradient(circle at 2px 2px, rgba(156, 163, 175, 0.15) 1.5px, transparent 0);
  background-size: 20px 20px;
  background-repeat: repeat;
}
</style>
