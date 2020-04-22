<template>
  <div class="container">
    <Scroll
      :itemHeight="55"
      :len="list.length"
      height="324px"
    >
      <Item
        v-for="(item,index) in scrollData "
        :item="item"
        :index="index>(list.length-1)?index-list.length:index"
        :key="index"
      />
    </Scroll>

  </div>
</template>

<script>
import Item from "@c/item.vue";
import Scroll from "@c/scroll.vue";
export default {
  data() {
    return {
      list: [
        { text: "小猫1" },
        { text: "小猫2" },
        { text: "小猫3" },
        { text: "小猫4" },
        { text: "小猫5" },
        { text: "小猫6" },
        { text: "小猫7" },
        { text: "小猫8" }
      ]
    };
  },
  computed: {
    scrollData() {
      console.log(1);
      return [...this.list, ...this.list];
    }
  },
  components: {
    Item,
    Scroll
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 600px;
  margin: 50px auto;
}
</style>