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
export default {
  name: "VueScroll",
  props: {
    height: {
      type: String,
      required: true
    },
    itemHeight: {
      type: Number,
      required: true
    },
    len: {
      type: Number,
      required: true
    }
  },
  destroyed() {
    this.stopTimer();
  },
  watch: {
    len(val) {
      val > height / itemHeight && this.startTimer();
    }
  },
  mounted() {
    this.len > parseInt(this.height) / this.itemHeight && this.startTimer();
  },
  methods: {
    getfixCss(css) {
      return ["moz", "webkit", "ms", "o"]
        .map(item => {
          const arr = css.split(";");
          return arr
            .map(cs => {
              return `-${item}-${cs}`;
            })
            .join(";");
        })
        .join(";");
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
        let list = this.$refs.list;
        const style = this.getfixCss(
          "transform:translateY(" + 0 + "px);transition-duration:0s"
        );
        list && (list.style = style);
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