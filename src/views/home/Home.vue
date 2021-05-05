<template>
  <h2>首页</h2>
<!--  <Swiper>-->
<!--    <template #swiper>-->
<!--      <SwiperItem v-for="(item ,index) in banners" :key="index">-->
<!--        <a :href="item.link">-->
<!--          <img :src="item.image" alt="">-->
<!--        </a>-->
<!--      </SwiperItem>-->
<!--    </template>-->
<!--  </Swiper>-->

</template>


<script>
  import {Swiper,SwiperItem} from "components/common/swiper"
  import {getHomeMultidata} from "network/home";
  export default {
    name: "Home",
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    }

  }
</script>

<style scoped>

</style>