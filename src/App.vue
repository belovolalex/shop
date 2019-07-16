<template lang="pug">
  #app
    component(:is="layout")
</template>

<script>

import DefaultLayuout from './layouts/DefaultLayout'
export default {
  components: {
    DefaultLayuout
  },
  computed: {
    layout() {
      return this.$router.meta && this.$router.meta.layout ? this.$router.meta.layout : 'DefaultLayuout'
    }
  },
  name: 'app'
}
</script>

<style lang="stylus">

</style>
