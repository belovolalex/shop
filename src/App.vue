<template lang="pug">
  component(:is="layout")
</template>

<script>

import DefaultLayout from './layouts/DefaultLayout'
import AuthLayout from './layouts/AuthLayout'
export default {
  name: 'app',
  components: {
    DefaultLayout,
    AuthLayout,
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
