<template>
  <div class="tabbar">
    <ul>
      <li
        v-for="(item, index) in routerList"
        :key="index"
        @click="switchTab(item.path)"
      >
        <img
          :src="$route.path.includes(item.path) ? item.selected : item.active"
          alt=""
        />
        <span :class="$route.path.includes(item.path) ? 'active' : ''">{{
          item.tittle
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabbarView",
  data() {
    return {
      routerList: [
        {
          tittle: "首页",
          path: "/home",
          active: "/images/home.png",
          selected: "/images/home-select.png",
        },
        {
          tittle: "分类",
          path: "/list",
          active: "/images/list.png",
          selected: "/images/list-select.png",
        },
        {
          tittle: "购物车",
          path: "/cart",
          active: "/images/cart.png",
          selected: "/images/cart-select.png",
        },
        {
          tittle: "我的",
          path: "/my",
          active: "/images/my.png",
          selected: "/images/my-select.png",
        },
      ],
    };
  },
  methods: {
    switchTab: function (path) {
      //判断是否点击的是同一个路由
      if (this.$router.path == path) return;
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.tabbar {
  width: 100%;
  height: 63px;
  background-color: #fff;
}
.tabbar ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  align-items: center;
}
.tabbar ul li {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tabbar ul li img {
  width: 28px;
  height: 28px;
}
.tabbar ul li span {
  font-size: 14px;
  text-align: center;
}
.active {
  color: red;
}
</style>
