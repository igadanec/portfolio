<template>
  <div class="navbar-container" data-test="navigationBar">
    <div class="navbar-container__inner">
      <div class="navbar-left">
        <svg data-test="navbarLogo" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
          <g id="Group_10" data-name="Group 10" transform="translate(-5 433)">
            <circle id="Ellipse_1" data-name="Ellipse 1" cx="25" cy="25" r="25" transform="translate(5 -433)" fill="#509bcd"/>
            <text id="IG" transform="translate(14.667 -401.625)" fill="#fff" font-size="23" font-family="ScriptMTBold, Script MT"><tspan x="0" y="0">IG</tspan></text>
          </g>
        </svg>
      </div>
      <div class="navbar-right">
          <ul>
            <li>
              <a class="link"
                 v-scroll-to="{
                  el: '#home',
                  offset: -160
                 }">Home</a>
            </li>
            <li>
              <a class="link"
                 v-scroll-to="{
                  el: '#aboutme',
                  offset: -90
                 }">About me</a>
            </li>
            <li>
              <a class="link"
                 v-scroll-to="{
                  el: '#recentwork',
                  offset: -90
                 }">Recent work</a>
            </li>
            <li>
              <a class="button-link"
                 v-scroll-to="{
                  el: '#contact',
                  offset: -90
                 }">Contact</a>
            </li>
          </ul>
      </div>
      <div class="hamburger" :class="{ 'hamburger__active': menuOpen }" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </div>
      <transition name="fade">
        <div v-if="menuOpen" class="responsive-navbar" data-test="responsiveNavbar">
          <div class="responsive-navbar__inner" @click="menuOpen = false">
            <ul>
              <li>
                <a class="link"
                   v-scroll-to="{
                  el: '#home',
                  offset: -160
                 }">Home</a>
              </li>
              <li>
                <a class="link"
                   v-scroll-to="{
                  el: '#aboutme',
                  offset: -90
                 }">About me</a>
              </li>
              <li>
                <a class="link"
                   v-scroll-to="{
                  el: '#recentwork',
                  offset: -90
                 }">Recent work</a>
              </li>
              <li>
                <a class="link"
                   v-scroll-to="{
                  el: '#contact',
                  offset: -90
                 }">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        menuOpen: false
      }
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen
      }
    }
  }
</script>
<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .navbar-container {
    background-color: $white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      @media only screen and (min-width: 1024px) {
        padding: 20px 100px;
      }
      .navbar-left {
      }
      .navbar-right {
        display: none;
        @media only screen and (min-width: 1024px) {
          display: block;
        }
       ul {
         list-style: none;
         display: flex;
         align-items: center;
         li {
           margin-right: 40px;
           &:last-child {
             margin: 0;
           }
           .link {
             position: relative;
             cursor: pointer;
             font-size: 18px;
             line-height: 24px;
             transition: 0.3s;
             &:after {
               content: '';
               position: absolute;
               bottom: -3px;
               display: block;
               height: 1px;
               width: 0;
               background-color: $primary_color;
               transition: 0.3s;
             }
             &:hover {
               &:after {
                 width: 100%;
               }
             }
           }
           .button-link {
             display: block;
             cursor: pointer;
             font-size: 18px;
             line-height: 24px;
             background-color: $primary_color;
             border: 2px solid $primary_color;
             padding: 10px 30px;
             border-radius: 50px;
             color: $white;
             transition: 0.3s;
             &:hover {
               background-color: $white;
               color: $primary_color;
             }
           }
         }
       }
      }
      .hamburger {
        cursor: pointer;
        @media only screen and (min-width: 1024px) {
          display: none;
        }
        &__active {
          .fa-bars {
            color: $primary_color;
          }
        }
        .fa-bars {
          font-size: 24px;
          transition: 0.3s;
        }
      }
      .responsive-navbar {
        position: fixed;
        top: 74px;
        right: 0;
        bottom: 0;
        background-color: $white;
        width: 100%;
        max-width: 200px;
        @media only screen and (min-width: 1024px) {
          display: none;
        }
        &__inner {
          padding: 20px;
          ul {
            list-style: none;
            li {
              margin-bottom: 10px;
              &:last-child {
                margin: 0;
              }
              .link {
                cursor: pointer;
                font-size: 18px;
                line-height: 24px;
                transition: 0.3s;
                &:hover {
                  color: $primary_color;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
