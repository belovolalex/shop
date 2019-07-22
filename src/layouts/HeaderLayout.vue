<template lang="pug">
  header(v-resize="onResize")
    .header-nav
      v-navigation-drawer(v-model="sideNav" temporary absolute)
        v-list
          v-list-tile(active-class="green white--text" v-for="item in navigation" :key="item.title" :to="item.url")
            v-list-tile-content {{ item.title }}

      v-toolbar(dark color="green" dense)
        v-toolbar-side-icon(@click="sideNav = !sideNav" class="hidden-md-and-up")
        v-toolbar-items(class="hidden-sm-and-down")
          v-btn(v-for="item in navigation" flat :key="item.title" :to="item.url") {{ item.title }}
        v-spacer
        v-toolbar-items(class="hidden-sm-and-down")
          v-btn(to="/login" flat) Вход
          v-btn(to="/registration" flat) Регистрация
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      sideNav: false
    }
  },
  computed: {
    ...mapState('main', [ 'navigation'])
  },
  methods: {
    onResize() {
      window.innerWidth >= 960 ? this.sideNav = false : ''
    }
  }
};
</script>

<style lang="stylus">
</style>
