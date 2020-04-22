<template>
  <div>test1-{{b}}</div>
</template>

<script>
import { b } from "./com1";
import { c } from "./com2";

export default {
  data() {
    return {
      b,
      c
    };
  },

  computed: {},
  methods: {},
  components: {}
};
</script>
<style lang='less' scoped>
</style>
