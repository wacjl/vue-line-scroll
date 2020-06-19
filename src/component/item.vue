<template>
  <div
    class="item"
    :class="{active:item.active}"
  >
    {{index}}-{{item.text}}
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    }
  }
};
</script>

<style lang="less" scoped>
.item {
  padding: 20px 0px;
  line-height: 14px;
  border-bottom: 1px solid #eaeaea;
}
.item.active {
  color: red;
  border-bottom-color: red;
}
</style>