<template>
  <div
    class="navbar-container"
    :class="{ 'navbar-container--scrolled': isScrolled }"
  >
    <div class="navbar-container__inner">
      <div class="navbar-container__inner-left">
        <a class="logo"><span>P</span>ortfolio</a>
      </div>
      <div class="navbar-container__inner-right">
        <ul class="nav-links">
          <li>
            <a
              class="link"
              :class="{ 'link-active': activeLink === 'hero-section' }"
              @click="scrollTo('hero-section')"
              >Home</a
            >
          </li>
          <li>
            <a
              class="link"
              :class="{ 'link-active': activeLink === 'aboutme-section' }"
              @click="scrollTo('aboutme-section')"
              >About Me</a
            >
          </li>
          <li>
            <a
              class="link"
              :class="{ 'link-active': activeLink === 'skills-section' }"
              @click="scrollTo('skills-section')"
              >Skills</a
            >
          </li>
          <li>
            <a @click="scrollTo('contact-section')" class="btn btn-3 hover-border-1">
              <span>Contact Me</span>
            </a>
          </li>
        </ul>
      </div>
      <div
        class="hamburger"
        :class="{ 'hamburger-active': isMenuOpened }"
        @click="toggleMenu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <transition name="slide-fade">
        <div v-if="isMenuOpened" class="sidemenu">
          <ul>
            <li>
              <a
                class="link"
                :class="{ 'link-active': activeLink === 'hero-section' }"
                @click="scrollTo('hero-section')"
                >Home</a
              >
            </li>
            <li>
              <a
                class="link"
                :class="{ 'link-active': activeLink === 'aboutme-section' }"
                @click="scrollTo('aboutme-section')"
                >About me</a
              >
            </li>
            <li>
              <a
                class="link"
                :class="{ 'link-active': activeLink === 'skills-section' }"
                @click="scrollTo('skills-section')"
                >Skills</a
              >
            </li>
            <li>
              <a @click="scrollTo('contact-section')" class="btn btn-3 hover-border-1">
                <span>Contact Me</span>
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpened: false,
      isScrolled: false,
      activeLink: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened;
    },
    handleScroll() {
      console.log(window.scrollY);
      window.scrollY > 1 ? (this.isScrolled = true) : (this.isScrolled = false);
    },
    scrollTo(elementId) {
      this.activeLink = elementId;
      this.$scrollTo(`#${elementId}`);
      if (this.isMenuOpened) {
        this.isMenuOpened = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(250px);
  opacity: 0;
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
  font-family: $font-montserrat;
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

.navbar-container {
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: 0.3s;
  &--scrolled {
    background-color: $purple;
    box-shadow: 0 0 15px 0 rgba(255, 255, 255, 0.15);
  }
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 100px;
    box-sizing: border-box;
    @media only screen and (max-width: 1024px) {
      padding: 10px 20px;
    }
    &-left {
      .logo {
        font-size: 24px;
        font-weight: 600;
        color: $secondary-color;
        span {
          color: $white;
        }
      }
    }
    &-right {
      display: flex;
      @media only screen and (max-width: 1024px) {
        display: none;
      }
      .nav-links {
        display: flex;
        align-items: center;
        li {
          &:not(:last-child) {
            margin-right: 20px;
          }
          list-style: none;
          a {
            &.link {
              cursor: pointer;
              text-decoration: none;
              color: $white;
              font-size: 14px;
              font-weight: 600;
              transition: all 0.3s ease 0s;
              &:hover {
                color: $secondary_color;
              }
              &-active {
                color: $secondary_color;
              }
            }
          }
        }
      }
    }
    .hamburger {
      position: relative;
      cursor: pointer;
      display: none;
      z-index: 1;
      @media only screen and (max-width: 1024px) {
        display: block;
      }
      .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: $white;
      }
    }
    .hamburger-active .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger-active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger-active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    .sidemenu {
      display: none;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 250px;
      background-color: $purple;
      padding: 60px 25px;
      box-sizing: border-box;
      @media only screen and (max-width: 1024px) {
        display: block;
        @media only screen and (max-width: 440px) {
          width: 100%;
        }
      }
      ul {
        list-style: none;
        li {
          &:not(:last-child) {
            margin-bottom: 15px;
          }
          .link {
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            color: $white;
            transition: 0.3s;
            &:hover {
              color: $secondary-color;
            }
            &-active {
              color: $secondary_color;
            }
          }
        }
      }
    }
  }
}
</style>
