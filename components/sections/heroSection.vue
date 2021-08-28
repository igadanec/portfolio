<template>
    <div id="hero-section" class="container">
        <img class="cover" src="@/static/images/cover.jpg" alt="cover">
        <div class="cover-overlay" />
        <div class="container__inner">
          <div class="container__inner-content">
            <div class="profile-box">
              <img src="@/static/images/me1.jpeg" alt="me">
            </div>
            <div class="brand">
              <h2>Ines Gadanec</h2>
              <h2>Ines Gadanec</h2>
            </div>
            <p>Frontend developer</p>
          </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 100vh;
  min-height: 400px;

  .cover {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    pointer-events: none;
    user-select: none;

    &-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.85);
      pointer-events: none;
      user-select: none;
      z-index: 1;
    }
  }

  &__inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    &-content {
      width: 100%;
      .profile-box {
        margin: 0 auto;
        width: 150px;
        height: 150px;
        border-radius: 150px;
        overflow: hidden;
      }
      img {
        display: block;
        width: 100%;
        transform: translateY(-38px) scale(1.2);
      }
      .brand {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Carter One', cursive;
        h2 {
          position: absolute;
          top: 10px;
          &:first-child {
            color: transparent;
            -webkit-text-stroke: 1px $secondary_color;
          }
          &:last-child {
            color: $secondary_color;
            animation: animate 4s ease-in-out infinite;
          }
        }
        @keyframes animate{
          0%,
          100%{
            clip-path: polygon(
                0% 45%,
                16% 44%,
                33% 50%,
                54% 60%,
                70% 61%,
                84% 59%,
                100% 52%,
                100% 100%,
                0% 100%
            );
          }
          50%{
            clip-path: polygon(
                0% 60%,
                15% 65%,
                34% 66%,
                51% 62%,
                67% 50%,
                84% 45%,
                100% 46%,
                100% 100%,
                0% 100%
            );
          }
        }
      }
      p {
        margin-top: 80px;
        text-align: center;
        color: $white;
        font-weight: 500;
        letter-spacing: 0.64px;
      }
    }
    }
  }

</style>
