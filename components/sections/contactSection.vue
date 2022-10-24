<template>
  <div id="contact-section" class="container">
    <div class="container__inner">
      <h6 data-aos="zoom-in">Feel Free To</h6>
      <h3 data-aos="flip-left">Contact Me</h3>
      <div class="container__inner-grid">
        <form data-aos="fade-down" class="form" @submit.prevent="sendMail">
          <label for="subject">Subject</label>
          <input
            :class="{ filled: subject }"
            v-model="subject"
            spellcheck="false"
            type="text"
            id="subject"
            placeholder="Enter subject"
          />
          <label for="message">Message</label>
          <textarea
            :class="{ filled: message }"
            v-model="message"
            spellcheck="false"
            id="message"
            placeholder="Type message"
          />
          <button type="submit" class="btn btn-3 hover-border-1">
            <span>{{ status }}</span>
          </button>
        </form>
        <div class="container__inner-grid__right">
          <img class="contact" src="~static/images/contact.svg" alt="Contact" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "igadanec10@gmail.com",
      subject: "",
      message: "",
      status: "Submit",
    };
  },
  methods: {
    sendMail() {
      if (!this.subject || !this.message) {
        return alert("Please fill the form correctly!");
      }
      this.status = "Sending...";
      setTimeout(() => {
        this.status = "Sent";
        setTimeout(() => {
          this.openMailPopup();
        }, 1000);
      }, 2000);
    },
    openMailPopup() {
      const { email, subject, message } = this;
      window.location.href = `mailto:${email}?subject=${subject}&body=${message}`;
      this.subject = "";
      this.message = "";
      this.status = "Submit";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: $primary-color;
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
      content: "03";
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
      grid-template-columns: 6fr 6fr;
      grid-gap: 80px;
      @media only screen and (max-width: 768px) {
        grid-template-columns: 12fr;
      }
      .form {
        label {
          display: block;
          font-size: 14px;
          margin-bottom: 5px;
          color: $white;
        }
        input,
        textarea {
          margin-bottom: 20px;
          width: 100%;
          box-sizing: border-box;
          padding: 10px;
          background-color: transparent;
          border: 1px solid $white;
          border-radius: 4px;
          font-size: 14px;
          color: $white;
          outline: none;
          font-family: $font_openSans;
          transition: 0.3s;
          &::placeholder {
            color: $white;
          }
        }
        textarea {
          height: 150px;
          resize: none;
        }
        input,
        textarea {
          &:focus {
            border: 1px solid $secondary_color;
          }
        }
        .filled {
          border: 1px solid $secondary_color;
        }
      }
      .contact {
        display: block;
        width: 100%;
      }
      &__right {
        @media only screen and (max-width: 768px) {
          display: none;
        }
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
</style>