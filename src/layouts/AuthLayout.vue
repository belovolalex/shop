<template lang="pug">
  div
    header-layout
    section.layout-wrap
      component(:is="currentComp")
    footer-layout
</template>

<script>
import HeaderLayout from '../layouts/HeaderLayout'
import FooterLayout from '../layouts/FooterLayout'
import AuthLogin from '../components/auth/AuthLogin'
import AuthRegister from '../components/auth/AuthRegister'
export default {
  components: {
    HeaderLayout,
    AuthLogin,
    AuthRegister,
    FooterLayout
  },
  computed: {
    currentComp() {
      return this.$route.name
    }
  }
}
</script>

<style lang="stylus">

</style>
