<template lang="pug">
  v-app
    header-layout
    v-content
      v-container(fluid fill-height)
        sidebar-layout
          .content
    footer-layout

</template>

<script>
import HeaderLayout from './HeaderLayout'
import FooterLayout from './FooterLayout'
import SidebarLayout from './SidebarLayout'
export default {
  components: {
      HeaderLayout,
      SidebarLayout,
      FooterLayout
  }
}
</script>

<style lang="stylus" scoped>
</style>
