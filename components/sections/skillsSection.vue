<template>
  <div id="skills-section" class="container">
    <div class="container__inner">
      <h6>What I Do</h6>
      <h3>My Skills</h3>
      <div class="container__inner-grid">
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/vue.png" alt="VueJs" />
          <p>VueJs</p>
          <progressBar :grade="4" />
        </div>
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/nuxt2.png" alt="NuxtJs" />
          <p>NuxtJs</p>
          <progressBar :grade="4" />
        </div>
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/html.png" alt="HTML" />
          <p>HTML5</p>
          <progressBar :grade="5" />
        </div>
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/css.png" alt="CSS" />
          <p>CSS3</p>
          <progressBar :grade="5" />
        </div>
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/sass.png" alt="SASS" />
          <p>SASS</p>
          <progressBar :grade="5" />
        </div>
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/javascript2.png" alt="JavaScript" />
          <p>JavaScript</p>
          <progressBar :grade="4" />
        </div>
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/git.png" alt="Git" />
          <p>Git</p>
          <progressBar :grade="4" />
        </div>
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/quasar.png" alt="Quasar" />
          <p>Quasar</p>
          <progressBar :grade="4" />
        </div>
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/cypress.png" alt="Cypress" />
          <p>Cypress</p>
          <progressBar :grade="3" />
        </div>
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/bootstrap.png" alt="Bootstrap" />
          <p>Bootstrap</p>
          <progressBar :grade="5" />
        </div>
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/restapi.png" alt="Rest API" />
          <p>Rest API</p>
          <progressBar :grade="5" />
        </div>
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/figma3.png" alt="Figma" />
          <p>Figma</p>
          <progressBar :grade="4" />
        </div>
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/vitejs.png" alt="Figma" />
          <p>ViteJs</p>
          <progressBar :grade="5" />
        </div>
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/storybook.png" alt="Figma" />
          <p>Storybook</p>
          <progressBar :grade="4" />
        </div>
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/typescript.png" alt="Figma" />
          <p>TypeScript</p>
          <progressBar :grade="3" />
        </div>
        <div class="skill-box">
          <span />
          <span />
          <span />
          <span />
          <img src="~static/images/tailwind.png" alt="Figma" />
          <p>Tailwind CSS</p>
          <progressBar :grade="5" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    progressBar: () => import("@/components/partials/progressBar.vue"),
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: $purple;
  &__inner {
    position: relative;
    padding: 150px 100px;
    @media only screen and (max-width: 1024px) {
      padding: 75px 50px;
      @media only screen and (max-width: 440px) {
        padding: 40px 20px;
      }
    }
    &::before {
      content: "02";
      position: absolute;
      right: 55px;
      top: 135px;
      color: $purple-text;
      font-size: 50px;
      font-weight: 600;
      font-family: $font_openSans;
      @media only screen and (max-width: 1024px) {
        display: none;
      }
    }
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 170px;
      width: 40px;
      height: 1px;
      background-color: $secondary-color;
      @media only screen and (max-width: 1024px) {
        display: none;
      }
    }
    h6 {
      color: $secondary_color;
      font-weight: 200;
    }
    h3 {
      color: $white;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0px;
        width: 50px;
        height: 1px;
        background-color: $secondary-color;
      }
    }
    &-grid {
      margin-top: 50px;
      display: grid;
      grid-template-columns: repeat(4, 3fr);
      grid-gap: 32px;
      @media only screen and (max-width: 1140px) {
        grid-gap: 10px;
        @media only screen and (max-width: 970px) {
          display: grid;
          grid-template-columns: repeat(2, 6fr);
        }
        @media only screen and (max-width: 500px) {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(1, 12fr);
        }
      }
      .skill-box {
        position: relative;
        padding: 20px;
        border: 1px solid $secondary-color;
        overflow: hidden;
        &:hover {
          border: 1px solid transparent;
          span {
            opacity: 1;
          }
        }
        span {
          opacity: 0;
        }
        img {
          margin-bottom: 10px;
          display: block;
          width: 50px;
        }
        p {
          color: $white;
          font-weight: bold;
        }
        span:nth-child(1) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, $purple-text, $secondary-color);
          animation: animate1 2s linear infinite;
        }

        @keyframes animate1 {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(100%);
          }
        }

        span:nth-child(2) {
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, $purple-text, $secondary-color);
          animation: animate2 2s linear infinite;
          animation-delay: 1s;
        }

        @keyframes animate2 {
          0% {
            transform: translateY(-100%);
          }

          100% {
            transform: translateY(100%);
          }
        }

        span:nth-child(3) {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(to left, $purple-text, $secondary-color);
          animation: animate3 2s linear infinite;
        }

        @keyframes animate3 {
          0% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(-100%);
          }
        }

        span:nth-child(4) {
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(to top, $purple-text, $secondary-color);
          animation: animate4 2s linear infinite;
          animation-delay: 1s;
        }

        @keyframes animate4 {
          0% {
            transform: translateY(100%);
          }

          100% {
            transform: translateY(-100%);
          }
        }
      }
    }
  }
}
</style>
