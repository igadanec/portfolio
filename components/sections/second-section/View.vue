<template>
  <div class="container" id="aboutme" data-test="secondSection">
    <div class="container__inner">
      <div class="container__inner-left">
        <img class="avatar" src="~static/images/me.png" alt="avatar">
      </div>
      <div  class="container__inner-right">
      <div class="text-box">
        <h4 class="title">About me</h4>
        <p class="paragraph">
          My name is Ines, and I am from Croatia. I finished
          high school, majoring in Computer Technician.
          I am skilled in Vue.js, Nuxt.js, Quasar, Cypress (e2e testing), HTML, CSS/SCSS, JavaScript and Linux.
          I have a great desire to expand my
          knowledge and become successful as a Frontend Developer.
        </p>
      </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .container {
    background-color: $primary_color;
    &__inner {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
      @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
      }
      &-left {
        width: 100%;
        display: flex;
        align-items: flex-end;
        @media only screen and (min-width: 768px) {
          width: 50%;
        }
        .avatar {
          display: block;
          width: 100%;
          max-width: 250px;
          margin: 0 auto;
          @media only screen and (min-width: 768px) {
            max-width: 380px;
          }
        }
      }
      &-right {
        width: 100%;
        display: flex;
        align-items: center;
        @media only screen and (min-width: 768px) {
          width: 50%;
        }
        .text-box {
          width: 100%;
          margin: 0 auto;
          max-width: 560px;
          padding: 40px 20px;
          .title {
            text-align: center;
            color: $white;
            font-size: 32px;
            line-height: 43px;
            font-weight: 400;
            margin-bottom: 20px;
            @media only screen and (min-width: 768px) {
              margin-bottom: 40px;
            }
          }
          .paragraph {
            color: $white;
            font-size: 18px;
            line-height: 26px;
          }
        }
      }
    }
  }
</style>
