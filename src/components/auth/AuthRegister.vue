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
                    v-text-field(color="green" v-model='email' label='Е-маил' required)
                v-layout
                  v-flex(sm10 mx-auto)
                    v-text-field(color="green" v-model='password', label='Пароль', required, :append-icon="showPass ? 'visibility' : 'visibility_off'", :type="showPass ? 'text' : 'password'", name='input-10-1', @click:append='showPass = !showPass')
                v-layout
                  v-flex(sm10 mx-auto)
                    v-text-field(color="green" v-model='repeatPass', label='Повторить пароль', required, :append-icon="showPass ? 'visibility' : 'visibility_off'", :type="showPass ? 'text' : 'password'", name='input-10-1', @click:append='showPass = !showPass')
                v-layout
                  v-flex(sm10 mx-auto)
                    v-btn(type="sybmit" color="green white--text" large class="ml-0") Submit
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      showPass: false,
      repeatPass: ''
    }
  },
  methods: {
    submit() {
      let formData = {
        email: this.email,
        password: this.password
      }
    }
  }
}
</script>

<style>

</style>
