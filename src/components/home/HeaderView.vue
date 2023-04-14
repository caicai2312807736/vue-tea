<template>
  <header>
    <h1>
      <img src="@/assets/images/logo.png" alt="" />
    </h1>
    <div class="search" @click="goSearch">
      <i class="iconfont icon-fangdajing"></i>
      <span>搜您喜欢的...</span>
    </div>
    <div class="kefu">
      <i class="iconfont icon-kefu"></i>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    goSearch() {
      this.$router.push("/search");
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #b0352f;
  width: 100%;
  height: 50px;
}
header h1 {
  width: 60px;
  height: 85px;
  padding: 0px 0px 30px 5px;
}
header h1 img {
  width: 60px;
  height: 36px;
}
.search {
  display: flex;
  align-items: center;
  width: 246px;
  height: 30px;
  background-color: #fff;
  border-radius: 12px;
}
.search i {
  padding: 0px 6px;
  color: #ccc;
}
.search span {
  font-size: 14px;
  color: #ccc;
}
.kefu i {
  font-size: 36px;
  color: #fff;
}
</style>
