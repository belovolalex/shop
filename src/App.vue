<template lang="pug">
  #app
    svg-sprite
    component(:is="layout")
</template>

<script>

import DefaultLayout from './layouts/DefaultLayout'
import AuthLayout from './layouts/AuthLayout'
import SvgSprite from './components/SvgSprite'
export default {
  name: 'app',
  components: {
    DefaultLayout,
    AuthLayout,
    SvgSprite
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'DefaultLayout'
    }
  },
  mounted() {
    this.$store.dispatch('main/fetchNavigation')
  }
}
</script>

<style lang="stylus">
</style>
