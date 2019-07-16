<template lang="pug">
    header.header
      .header-navifgation-wrap
        .container
          .header-navigation
            nav.header-nav
              ul.header-list
                li(v-for="item in navigation")
                  router-link(:to="item.url" class="nav-link") {{ item.title }}
            nav.header-nav
              router-link(to="/login" class="nav-link") Вход
              router-link(to="/register" class="nav-link") Регистрация
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState('main', [ 'navigation'])
  }
};
</script>

<style lang="stylus">
.header-navifgation-wrap
  background $green
.header-navigation
  display flex
  justify-content space-between
.nav-link
  display inline-block
  text-decoration none
  transition .2s
  padding 12px
  color white
  &:hover
    transition .2s
    opacity 0.8
.header-list
  list-style-type none
  display flex
</style>
