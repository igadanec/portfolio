<template>
  <div id="aboutme-section" class="container">
    <div class="container__inner">
      <div class="container__inner-left">
        <img src="@/static/images/me2.jpeg" alt="me" />
      </div>
      <div class="container__inner-right">
        <h6>Discover</h6>
        <h3>About Me</h3>
        <p class="description">
          My name is Ines Gadanec. I'm frontend developer based in Vukovar,
          Croatia, and I'm very passionate and dedicated to my work. I have 1
          year of experience and ambition to improve my coding skills. I am
          skilled in Vue.js, Nuxt.js, Quasar, Cypress (e2e testing), HTML,
          CSS/SCSS and JavaScript. I have a great desire to expand my knowledge
          and become successful as a Frontend Developer.
        </p>
        <div class="grid-box">
          <div class="grid-box__left">
            <p>Name: Ines Gadanec</p>
            <p>Email: igadanec10@gmail.com</p>
            <p>Experience: 1 year</p>
          </div>
          <div class="grid-box__right">
            <p>Age: 20</p>
            <p>Address: Vukovar, Croatia</p>
            <p>
              LinkedIn:
              <a
                href="https://www.linkedin.com/in/ines-gadanec-390843203/"
                target="_blank"
              >Ines Gadanec</a
              >
            </p>
          </div>
        </div>
        <a href="//www.dropbox.com/pri/get/cv.pdf?_download_id=7456723489773875367231487588170841961378397033828429139715735907&_notify_domain=www.dropbox.com&_subject_uid=907200113&w=AAAII3nqrDCiZHzbTGjxiiYsH_uRZptNsMZ_E_yBsyuAFg" class="btn btn-3 hover-border-1">
          <span>Download CV</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.container {
  background-color: $primary_color;
  width: 100%;
  &__inner {
    position: relative;
    padding: 150px 100px;
    display: flex;
    @media only screen and (max-width: 1024px) {
      flex-direction: column-reverse;
      padding: 75px 50px;
      @media only screen and (max-width: 440px) {
        padding: 40px 20px;
      }
    }
    &::before {
      content: "01";
      position: absolute;
      right: 50px;
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
    &-left {
      width: 30%;
      margin-right: 60px;
      user-select: none;
      pointer-events: none;
      margin-top: 30px;
      border: 3px solid $secondary-color;
      height: fit-content;
      @media only screen and (max-width: 1224px) {
        width: 100%;
        max-width: 290px;
        @media only screen and (max-width: 1024px) {
          margin: 60px auto 0;
        }
      }
      img {
        display: block;
        width: 100%;
        position: relative;
        top: -30px;
        right: -30px;
        @media only screen and (max-width: 768px) {
            position: relative;
          top: 0;
          right: 0;
        }
      }
    }
    &-right {
      width: 70%;
      padding-right: 40px;
      box-sizing: border-box;
      @media only screen and (max-width: 1224px) {
        width: 60%;
        @media only screen and (max-width: 1024px) {
          width: 100%;
          padding-right: 0;
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
          bottom: 3px;
          width: 50px;
          height: 1px;
          background-color: $secondary-color;
        }
      }
      .description {
        margin: 30px 0;
        color: $white;
      }
      .grid-box {
        display: grid;
        grid-template-columns: 6fr 6fr;
        border: 1px solid $secondary_color;
        padding: 20px;
        margin-bottom: 30px;
        max-width: 700px;
        @media only screen and (max-width: 620px) {
          padding: 10px;
          grid-template-columns: 12fr;
          grid-gap: 5px;
        }
        &__left {
          @media only screen and (max-width: 620px) {
            padding-right: 20px;
          }
          p {
            color: $white;
            &:not(:last-child) {
              margin-bottom: 15px;
              @media only screen and (max-width: 440px) {
                margin-bottom: 5px;
              }
            }
          }
        }
        &__right {
          p {
            color: $white;
            &:not(:last-child) {
              margin-bottom: 15px;
              @media only screen and (max-width: 440px) {
                margin-bottom: 5px;
              }
            }
            a {
              color: $secondary-color;
            }
          }
        }
      }
      ::before,
      ::after {
        position: absolute;
        content: "";
      }
      .btn {
        position: relative;
        display: inline-block;
        width: auto;
        height: auto;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
      .btn span {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 2px;
        padding: 10px 15px;
        transition: 0.3s;
      }

      /*--- btn-3 ---*/
      .btn-3 {
        padding: 5px;
      }
      .btn-3 span {
        color: $white;
        background-color: $secondary_color;
      }
      .btn-3::before,
      .btn-3::after {
        background: transparent;
        z-index: 2;
      }

      /* 11. hover-border-1 */
      .btn.hover-border-1::before,
      .btn.hover-border-1::after {
        width: 10%;
        height: 25%;
        transition: 0.35s;
      }
      .btn.hover-border-1::before {
        top: 0;
        left: 0;
        border-left: 1px solid $secondary_color;
        border-top: 1px solid $secondary_color;
      }
      .btn.hover-border-1::after {
        bottom: 0;
        right: 0;
        border-right: 1px solid $secondary_color;
        border-bottom: 1px solid $secondary_color;
      }
      .btn.hover-border-1:hover::before,
      .btn.hover-border-1:hover::after {
        width: 99%;
        height: 98%;
      }
    }
  }
}
</style>
