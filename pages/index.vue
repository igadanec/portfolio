<template>
  <div>
    <firstSection/>
    <secondSection/>
    <thirdSection/>
    <forthSection/>
    <fifthSection/>
  </div>
</template>
<script>
  import firstSection from '@/components/sections/first-section/View'
  import secondSection from '@/components/sections/second-section/View'
  import thirdSection from '@/components/sections/third-section/View'
  import forthSection from '@/components/sections/forth-section/View'
  import fifthSection from '@/components/sections/fifth-section/View'
  export default {
    layout: 'navbar',
    components: {
      firstSection,
      secondSection,
      thirdSection,
      forthSection,
      fifthSection
    }
  }
</script>
