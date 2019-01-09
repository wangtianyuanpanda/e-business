<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return ({
      screen: {
        width: 0,
        height: 0
      }
    })
  },
  created: function () {
    // this.initScreen()
  },
  methods: {
    initScreen: function () {
      this.screen.width = window.document.body.offsetWidth
      this.screen.height = window.document.body.offsetHeight
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
