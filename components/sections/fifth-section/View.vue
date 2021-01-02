<template>
  <div class="container" id="contact" data-test="fifthSection">
    <div class="container__inner">
      <h2 class="title">CONTACT ME</h2>
      <form class="form-container"
            @submit.prevent="sendMail">
        <label for="subject">Subject</label>
        <input
          v-model="subject"
          id="subject"
          type="text"
          placeholder="Type subject"
          :class="{ filled: subject }"
        >
        <label for="message">Message</label>
        <textarea v-model="message"
                  id="message"
                  placeholder="Type message"
                  :class="{ filled: message }" />
        <button type="submit"
                :class="{ sent: status === 'sent' }">
          <template v-if="status === 'sending'">
            Sending...
          </template>
          <template v-else-if="status === 'sent'">
            Sent
          </template>
          <template v-else>
            {{ status }}
          </template>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: 'igadanec10@gmail.com',
        subject: '',
        message: '',
        status: 'submit'
      }
    },
    methods: {
      sendMail () {
        if (!this.subject || !this.message) {
          return alert('Please fill the form correctly!')
        } else {
          this.status = 'sending'
          setTimeout(() => {
            this.status = 'sent'
            setTimeout(() => {
              this.openMailPopup()
            }, 1000)
          }, 1500)
        }
      },
      openMailPopup () {
        const { email, subject, message } = this
        window.location.href = `mailto:${email}?subject=${subject}&body=${message}`
        this.subject = ''
        this.message = ''
        this.status = 'submit'
      }
    }
  }
</script>

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
      margin-bottom: 30px;
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
          max-width: 130px;
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
    .form-container {
      margin: 0 auto;
      width: 100%;
      max-width: 600px;
      label {
        display: block;
        margin-bottom: 5px;
        font-size: 18px;
      }
      input {
        width: calc(100% - 24px);
        font-family: $font_roboto;
        padding: 10px;
        margin-bottom: 20px;
        outline: none;
        font-size: 16px;
        border: 1px solid $secondary_color;
        border-radius: 5px;
        &:focus {
          border-color: $primary_color;
        }
        &.filled {
          border-color: $primary_color !important;
        }
      }
      textarea {
        width: calc(100% - 22px) !important;
        max-width: 576px;
        min-height: 150px;
        padding: 10px;
        font-family: $font_roboto;
        outline: none;
        font-size: 16px;
        border: 1px solid $secondary_color;
        border-radius: 5px;
        &:focus {
          border-color: $primary_color;
        }
        &.filled {
          border-color: $primary_color !important;
        }
      }
      button {
        cursor: pointer;
        margin-top: 20px;
        text-transform: uppercase;
        text-align: center;
        width: 100%;
        padding: 10px 20px;
        background-color: $primary_color;
        border: 2px solid $primary_color;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        color: $white;
        outline: none;
        border-radius: 5px;
        transition: 0.3s;
        &:hover {
          color: $primary_color;
          background-color: $white;
        }
        &.sent {
          color: $white !important;
          background-color: $primary_color !important;
        }
      }
    }
  }
}
</style>
