<template>
  <div class="container" id="home" data-test="firstSection">
    <div class="container__inner">
      <div class="header-text">
        <p class="paragraph">INES GADANEC</p>
        <h1 class="title">FRONTEND DEVELOPER</h1>
      </div>
        <img class="image" src="~/static/images/portfolio.png" alt="portfolio-img">
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .container {
    margin-top: 100px;
    padding: 0 20px;
    @media only screen and (min-width: 1024px) {
      margin-top: 153px;
    }
   &__inner {
     width: 100%;
     .header-text {
       margin: 0 auto 60px auto;
       width: fit-content;
       .paragraph {
         color: $primary_color;
         font-size: 14px;
         line-height: 20px;
         margin-bottom: -5px;
         @media only screen and (min-width: 768px) {
           font-size: 16px;
           line-height: 22px;
           margin-bottom: -5px;
         }
         @media only screen and (min-width: 768px) {
           font-size: 18px;
           line-height: 24px;
           margin-bottom: -10px;
         }
       }
       .title {
         position: relative;
         font-size: 24px;
         line-height: 32px;
         font-weight: 400;
         @media only screen and (min-width: 550px) {
           font-size: 38px;
           line-height: 46px;
         }
         @media only screen and (min-width: 768px) {
           font-size: 54px;
           line-height: 72px;
         }
         &:after {
           content: '';
           position: absolute;
           display: block;
           left: 0;
           right: 0;
           bottom: 0;
           border-bottom: 2px solid $primary_color;
           width: 100%;
           max-width: 195px;
           margin: 0 auto;
         }
       }
     }
     .image {
       display: block;
       width: 100%;
       max-width: 1145px;
       margin: 0 auto;
     }
   }
  }
</style>
