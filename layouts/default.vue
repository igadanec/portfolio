<template>
  <div>
    <navbar/>
    <div class="margin-top">
      <Nuxt />
    </div>
    <primaryFooter/>
  </div>
</template>
<script>
  import navbar from '@/components/layout/navbar.vue'
  import primaryFooter from '@/components/layout/footer.vue'
  export default {
    components: {
      navbar,
      primaryFooter
    }
  }
</script>

<style lang="scss" scoped>
  .margin-top {
    margin-top: 94px;
  }
</style>
