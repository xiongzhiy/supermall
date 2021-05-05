<template>
  <TabBar>
    <tab-bar-item link="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </TabBar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }
</style>