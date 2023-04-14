<template>
  <div class="home">
    <div class="headers">
      <div class="headers-main">
        <header-view></header-view>
        <ly-tab
          @change="changeTab"
          v-model="selectedId"
          :items="items"
          :options="options"
        >
        </ly-tab>
      </div>
    </div>
    <section ref="wrapper">
      <div>
        <div v-for="(item, index) in newData" :key="index">
          <swiper-view
            v-if="item.type == 'swiperList'"
            :swiperList="item.data"
          ></swiper-view>

          <icons-view
            v-if="item.type == 'iconsList'"
            :iconsList="item.data"
          ></icons-view>

          <recommend-view
            v-if="item.type == 'recommendList'"
            :recommendList="item.data"
          ></recommend-view>

          <ad-view v-if="item.type == 'adList'" :adList="item.data"></ad-view>

          <like-view
            v-if="item.type == 'likeList'"
            :likeList="item.data"
          ></like-view>
        </div>
      </div>
    </section>
    <tabbar-view></tabbar-view>
  </div>
</template>

<script>
import HeaderView from "@/components/home/HeaderView.vue";
import TabbarView from "@/components/common/TabbarView.vue";
import SwiperView from "../components/home/SwiperView.vue";
import IconsView from "../components/home/IconsView.vue";
import RecommendView from "../components/home/RecommendView.vue";
import AdView from "../components/home/AdView.vue";
//引入better-scroll插件
import BetterScroll from "better-scroll";
import LikeView from "../components/home/LikeView.vue";
//引入axios
import http from "@/common/api/request.js";

export default {
  name: "HomeView",
  data() {
    return {
      selectedId: 0,
      items: [],
      newData: [],
      oBetterScroll: "",
      tBetterScroll: "",
      options: {
        activeColor: "#b0352f",
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await http.$axios({
        url: "/api/index_list/0/data/1",
      });
      this.items = Object.freeze(res.topBar);
      this.newData = Object.freeze(res.data);

      //当dom都加载完毕了再去执行
      this.$nextTick(() => {
        this.oBetterScroll = new BetterScroll(this.$refs.wrapper, {
          movable: true,
          zoom: true,
          click: true,
        });
      });
    },
    async addData(index) {
      let res = await http.$axios({
        url: "/api/index_list/" + index + "/data/1",
      });

      if (res.constructor != Array) {
        this.newData = res.data;
      } else {
        this.newData = res;
      }

      this.$nextTick(() => {
        this.tBetterScroll = new BetterScroll(this.$refs.wrapper, {
          movable: true,
          zoom: true,
          click: true,
        });
      });
    },
    changeTab(item, index) {
      this.addData(index);
    },
  },
  components: {
    TabbarView,
    HeaderView,
    SwiperView,
    IconsView,
    RecommendView,
    LikeView,
    AdView,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.headers {
  width: 100%;
  height: 2.88rem;
}
.headers-main {
  position: fixed;
  left: 0;
  top: 0;
}
section {
  flex: 1;
  overflow: hidden;
}
::v-deep .ly-tabbar {
  box-shadow: none;
  border-bottom: none;
}
</style>
