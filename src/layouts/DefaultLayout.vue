<template lang="pug">
  div
    header-layout
    section.layout-mainblock
      sidebar-layout
      section.layout-content
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

<style lang="stylus">
  .layout-content
    display flex

</style>
