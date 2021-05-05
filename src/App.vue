<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>
<script>

  import MainTabBar from "components/centen/maintabbar/MainTabBar";
  export default {
    name: 'App',
    components: {
      MainTabBar,
    }
  }
</script>
<style>
 * {
    padding: 0;
    margin: 0;
  }
</style>
