<template>
  <div class="container" id="recentwork" data-test="forthSection">
    <div class="container__inner">
      <h1 class="title">RECENT WORK</h1>
      <div class="work-grid">
        <div class="work-grid__item">
          <a class="link" href="http://localhost:3000/">Click here</a>
          <img src="~static/images/portfolio-work.png" alt="portfolio">
          <p>PORTFOLIO</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .container {
    background-color: $primary_color;
    padding: 0 20px;
    &__inner {
      padding: 60px 0;
      width: 100%;
      max-width: 1500px;
      margin: 0 auto;
      @media only screen and (min-width: 1024px) {
        padding: 120px 0;
      }
      .title {
        text-align: center;
        position: relative;
        padding-bottom: 8px;
        color: $white;
        font-size: 22px;
        line-height: 28px;
        font-weight: 400;
        margin-bottom: 25px;
        @media only screen and (min-width: 768px) {
          font-size: 26px;
          line-height: 34px;
        }
        @media only screen and (min-width: 1024px) {
          font-size: 32px;
          line-height: 43px;
          margin-bottom: 55px;
        }
        &:after {
          content: '';
          position: absolute;
          display: block;
          border-bottom: 2px solid $white;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          max-width: 100px;
          margin: 0 auto;
        }
      }
      .work-grid {
        &__item {
          cursor: pointer;
          background-color: $secondary_color;
          max-width: 450px;
          margin: 0 auto;
          border-radius: 10px;
          position: relative;
          overflow: hidden;
          &:hover {
            .link {
              top: 0;
            }
          }
          .link {
            display: block;
            background-color: $secondary_color;
            color: $white;
            font-size: 18px;
            line-height: 24px;
            padding: 8px 0;
             text-decoration: none;
            text-align: center;
            width: 100%;
            position: absolute;
            top: -40px;
            transition: 0.3s ease;
          }
          p {
            padding: 8px 0;
             color: $white;
            text-align: center;
            font-size: 18px;
            line-height: 24px;
          }
          img {
            width: 100%;
            display: block;
            border-radius: 10px 10px 0 0;
          }
        }
      }
    }
  }
</style>
