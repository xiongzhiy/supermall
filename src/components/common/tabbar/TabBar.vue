<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
  import TabBarItem from "./TabBarItem";
  export default {
    name: "TabBar",
    components: {
      TabBarItem
    }
  }
</script>

<style scoped>
#tabBar {
  background: #f6f6f6;
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: 0 -2px 2px rgba(100,100,100,.2);
}
</style>