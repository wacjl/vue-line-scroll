<template>
  <div
    :style="{height:height}"
    class="step-container"
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
  name: "StepScroll",
  mixins: [mixin],
  data() {
    return {
      selectedIndex: 1, //  选中的条数
      top: 0 //滚动距离
    };
  },
  computed: {
    displayNum() {
      return Math.ceil(parseInt(this.height) / this.itemHeight);
    },
    // 相对容器的位置
    retiveIndex() {
      const index = this.selectedIndex - Math.abs(this.top / this.itemHeight);
      return Math.ceil(index > this.displayNum ? this.displayNum : index);
    }
  },
  watch: {
    len() {
      this.$nextTick(() => {
        this.getBaseInfo();
      });
    }
  },
  mounted() {
    this.list = this.$refs.list;
    this.getBaseInfo();
  },
  methods: {
    getBaseInfo() {
      this.scrollHeight = this.list.scrollHeight;
      this.maxIndex = Math.ceil(this.scrollHeight / this.itemHeight);
    },
    /**
     * @param {Boolean} flag true,向下一移，false 向上移
     */
    judgeMove(flag) {
      if (flag) {
        return (
          this.maxIndex > this.displayNum && this.maxIndex > this.selectedIndex
        );
      } else {
        return this.selectedIndex > 1;
      }
    },
    // 向下移
    moveDown() {
      if (this.judgeMove(true)) {
        this.selectedIndex += 1;
        if (
          this.retiveIndex === this.displayNum &&
          this.maxIndex - 1 >= this.selectedIndex
        ) {
          this.top -= this.itemHeight;
          this.transform();
        }
        return this.selectedIndex;
      }
    },
    // 向上移
    moveUp() {
      if (this.judgeMove(false)) {
        this.selectedIndex -= 1;
        if (this.retiveIndex === 0) {
          this.top += this.itemHeight;
          this.transform();
        }
        return this.selectedIndex;
      }
    },
    transform() {
      this.list.style = this.getfixCss(
        "transform:translateY(" + this.top + "px);transition-duration: 0.5s;"
      );
    }
  }
};
</script>
<style lang="less" scoped>
.step-container {
  overflow: hidden;
}
.list {
  transition: transform 1s;
}
</style>