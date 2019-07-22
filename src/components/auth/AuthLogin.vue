<template lang="pug">
  section.auth-login
    v-layout(justify-center align-center)
      v-container
        v-card(max-width="500" class="mx-auto")
          v-layout(column)
            v-flex(sm10)
              v-form(@submit.prevent="submit" ref="form" class="form")
                v-layout
                  v-flex(sm10 mx-auto)
                    v-text-field(color="green" v-model='email' label='E-mail' required)
                v-layout
                  v-flex(sm10 mx-auto)
                    v-text-field(color="green" v-model='password', label='Пароль', required, :append-icon="showPass ? 'visibility' : 'visibility_off'", :type="showPass ? 'text' : 'password'", name='input-10-1', @click:append='showPass = !showPass')
                v-layout
                  v-flex(sm10 mx-auto)
                    v-btn(type="sybmit" color="green white--text" large class="ml-0") Submit
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email },
  },

  data() {
    return {
      email: '',
      password: '',
      showPass: false
    }
  },
  methods: {
    submit() {
      let formData = {
        email: this.email,
        password: this.password
      }
      if(this.$refs.form.validate()) {
        console.log('this.formData', formData)
      }
    }
  }
};
</script>

<style lang="stylus">
.form
  padding 20px
.auth-login
  width 100%
</style>
