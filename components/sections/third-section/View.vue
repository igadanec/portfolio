<template>
  <div class="container" data-test="thirdSection">
    <div class="container__inner">
      <h1 class="title">THINGS THAT I'M FAMILIAR WITH</h1>
      <div class="grid-container">
        <div class="grid-container__left">
         <h5 class="title">Frontend</h5>
          <div class="grid-items">
            <div class="grid-items__inner">
              <div class="item">
                <img src="~static/images/nuxt.png" alt="nuxt">
                <p>NUXT</p>
              </div>
              <div class="item">
                <img src="~static/images/html.png" alt="html">
                <p>HTML</p>
              </div>
              <div class="item">
                <img src="~static/images/css.png" alt="css">
                <p>CSS</p>
              </div>
              <div class="item">
                <img src="~static/images/sass.png" alt="sass">
                <p>SASS</p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-container__right">
          <h5 class="title">Tools</h5>
          <div class="grid-items">
            <div class="grid-items__inner">
              <div class="item">
                <img src="~static/images/git.png" alt="git">
                <p>GIT</p>
              </div>
              <div class="item">
                <img src="~static/images/cypress.png" alt="webstorm">
                <p>CYPRESS</p>
              </div>
              <div class="item">
                <img src="~static/images/photoshop.png" alt="photoshop">
                <p>PHOTOSHOP</p>
              </div>
              <div class="item">
                <img src="~static/images/adobexd.png" alt="adobexd">
                <p>ADOBE XD</p>
              </div>
              <div class="item">
                <img src="~static/images/webstorm.png" alt="webstorm">
                <p>WEBSTORM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .container {
    margin: 60px 0;
    padding: 0 20px;
    @media only screen and (min-width: 1024px) {
      margin: 120px 0;
    }
    &__inner {
      width: 100%;
      max-width: 1500px;
      margin: 0 auto;
      .title {
        position: relative;
        text-align: center;
        font-size: 24px;
        line-height: 32px;
        font-weight: 400;
        margin-bottom: 35px;
          &:after {
            content: '';
            position: absolute;
            display: block;
            left: 0;
            right: 0;
            bottom: 0;
            border-bottom: 2px solid $primary_color;
            width: 100%;
            max-width: 80px;
            margin: 0 auto;
            @media only screen and (min-width: 768px) {
              max-width: 190px;
            }
          }
        @media only screen and (min-width: 768px) {
          font-size: 32px;
          line-height: 43px;
        }
        @media only screen and (min-width: 1024px) {
          margin-bottom: 85px;
        }
      }
      .grid-container {
        display: grid;
        grid-template-columns: 12fr;
        grid-gap: 20px;
        @media only screen and (min-width: 768px) {
          grid-template-columns: 6fr 6fr;
        }
        @media only screen and (min-width: 1024px) {
          grid-gap: 40px;
        }
        &__left, &__right {
          .title {
            font-size: 18px;
            line-height: 24px;
            padding: 5px 28px;
            width: fit-content;
            margin: 0 auto;
            border-radius: 10px 10px 0 0;
            background-color: $primary_color;
            color: $white;
            @media only screen and (min-width: 768px) {
              font-size: 24px;
              line-height: 32px;
            }
          }
          .grid-items {
            border: 2px solid $primary_color;
            border-radius: 10px;
            &__inner {
              padding: 20px;
              display: grid;
              grid-template-columns: 12fr;
              grid-gap: 20px;
              @media only screen and (min-width: 360px) {
                grid-template-columns: 6fr 6fr;
              }
              @media only screen and (min-width: 1024px) {
                padding: 40px;
                grid-gap: 40px;
              }
              .item {
                border: 2px solid $primary_color;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                img {
                  margin: auto;
                  display: block;
                  width: calc(100% - 40px);
                  padding: 20px;
                  object-fit: contain;
                  max-width: 120px;
                  @media only screen and (min-width: 768px) {
                    max-width: 200px;
                  }
                }
                p {
                  background-color: $primary_color;
                  color: $white;
                  font-size: 14px;
                  line-height: 20px;
                  text-align: center;
                  padding: 4px 0;
                  width: 100%;
                  @media only screen and (min-width: 768px) {
                    font-size: 18px;
                    line-height: 24px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
