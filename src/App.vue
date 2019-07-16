<template lang="pug">
  #app
    svg-sprite
    component(:is="layout")
</template>

<script>

import DefaultLayuout from './layouts/DefaultLayout'
import SvgSprite from './components/SvgSprite'
export default {
  name: 'app',
  components: {
    DefaultLayuout,
    SvgSprite
  },
  computed: {
    layout() {
      return this.$router.meta && this.$router.meta.layout ? this.$router.meta.layout : 'DefaultLayuout'
    }
  },
  mounted() {
    this.$store.dispatch('main/fetchNavigation')
  }
}
</script>

<style lang="stylus">

</style>
