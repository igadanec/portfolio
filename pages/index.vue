<template>
  <div>
    <heroSection/>
     <aboutmeSection/>
     <skillsSection/>
     <contactSection/>
  </div>
</template>
<script>
import AboutmeSection from '../components/sections/aboutmeSection.vue'
  export default {
    components: {
      heroSection: () => import('@/components/sections/heroSection.vue'),
      aboutmeSection: () => import('@/components/sections/aboutmeSection.vue'),
      skillsSection: () => import('@/components/sections/skillsSection.vue'),
      contactSection: () => import('@/components/sections/contactSection.vue')
    }
  }
</script>
