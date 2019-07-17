<template lang="pug">
  section.auth-login
    v-container
      v-layout
        v-flex(xs12, sm12)
          v-text-field(v-model='email', :error-messages='emailErrors', label='E-mail', required='', @input='$v.email.$touch()', @blur='$v.email.$touch()')
      v-layout
        v-flex(xs12, sm12)
          v-text-field(v-model='password', :append-icon="show1 ? 'visibility' : 'visibility_off'", :rules='[rules.required, rules.min]', :type="show1 ? 'text' : 'password'", name='input-10-1', label='Normal with hint text', hint='At least 8 characters', counter='', @click:append='show1 = !show1')
      v-layout
        v-btn(type="sybmit" color="darken-3") Submit


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
      show1: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match')
      }
    }
  },
  mounted() {
    console.log('this', this)
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Введите корректный email')
      !this.$v.email.required && errors.push('поле email обязательно для заполнения')
      return errors
    }
  },
  methods: {
    login() {
      this.store.dispatch('auth/login')
    }
  }
};
</script>

<style lang="stylus">

</style>
