<template>
  <div
    class="list-container"
    :style="{height:height}"
  >
    <div
      ref="list"
      class="list"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import mixin from "./mixin";
export default {
  name: "VueScroll",
  mixins: [mixin],
  destroyed() {
    this.stopTimer();
  },
  watch: {
    len(val) {
      val > parseInt(this.height) / this.itemHeight && this.startTimer();
    }
  },
  mounted() {
    this.len > parseInt(this.height) / this.itemHeight && this.startTimer();
  },
  methods: {
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
        let list = this.$refs.list;
        const style = this.getfixCss(
          "transform:translateY(" + 0 + "px);transition-duration:0s"
        );
        list.style = style;
      }
    },
    startTimer() {
      let list = this.$refs.list;
      let i = 1;
      this.timer = setInterval(() => {
        const height = -this.itemHeight * i;

        list.style = this.getfixCss("transform:translateY(" + height + "px)");
        i++;
        if (i === this.len + 2) {
          i = 1;
          list.style = this.getfixCss(
            "transform:translateY(" + 0 + "px);transition-duration:0s"
          );
        }
      }, 2000);
    }
  }
};
</script>

<style lang="less" scoped>
.list-container {
  overflow: hidden;
}
.list {
  transition: transform 1s;
}
</style>