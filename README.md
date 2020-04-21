# vue-line-scroll
## 基于vue的list数据循环滚动
###  安装
``` npm install  vue-line-scroll```
### 使用
```javascript

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
import Scroll from "vue-line-scroll.js";
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
```
### 说明
 
|  参数        | 说明  |
|  ----       | ----  |
| itemHeight  | 每项高度 |
| height       | 容器高度 |
| len          | 原始数据长度 |

###  效果
![RUNOOB 图标](/assets/images/test.png)
