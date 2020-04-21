<template>
  <div class="item">
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
</style>