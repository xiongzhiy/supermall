<template>
  <div class="tabBar-item" @click="itemClick">
    <div v-if="!iaActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    components: {
    },
    props: {
      link: String ,
      activeColor: {
        type: String,
        default: "red"
      }
    },
    data() {
      return {
        // iaActive: true
      }
    },
    computed: {
      iaActive() {
        return this.$route.path.indexOf(this.link) !== -1
      },
      activeStyle() {
        return this.isActive ? {color:this.activeColor} : {}
        // return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        console.log('itemClick');
        // this.$router.replace(this.link)
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>
  .tabBar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    height: 49px;
  }

</style>