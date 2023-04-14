<template>
  <ul class="icons">
    <li v-for="(item, index) in iconsList" :key="index">
      <img :src="item.imgUrl" />
      <span>{{ item.title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    iconsList: Array,
  },
};
</script>

<style scoped>
.icons {
  padding: 13px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.icons li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icons img {
  width: 38px;
  height: 38px;
}
.icons span {
  font-size: 16px;
  padding: 6px;
}
</style>
