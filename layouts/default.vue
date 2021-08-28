<template>
  <div>
    <transition name="fade">
      <div v-if="isLoading" class="loader">
      <div class="loading">
        <div />
        <div />
        <div />
      </div>
    </div>
    </transition>
    <navbar />
    <Nuxt />
    <primaryFooter />
  </div>
</template>
<script>
import navbar from "@/components/layout/navbar.vue";
import primaryFooter from "@/components/layout/footer.vue";
export default {
  components: {
    navbar,
    primaryFooter,
  },
  data() {
    return {
      isLoading: true
    }
  },
  beforeCreate () {
    setTimeout(() => this.isLoading = false, 2300)
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.loader {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $primary_color;
  z-index: 1030;
  .loading {
    display: flex;
    justify-content: center;

    div {
      width: 1rem;
      height: 1rem;
      margin: 2rem 0.3rem;
      background: $secondary-color;
      border-radius: 50%;
      animation: 0.9s bounce infinite alternate;

      &:nth-child(2) {
        animation-delay: 0.3s;
      }

      &:nth-child(3) {
        animation-delay: 0.6s;
      }
    }
  }

  @keyframes bounce {
    to {
      opacity: 0.3;
      transform: translate3d(0, -1rem, 0);
    }
  }
}
</style>