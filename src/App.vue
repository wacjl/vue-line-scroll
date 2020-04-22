<template>
  <div class="container">
    <router-link to="/test">Go to Test</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-link to="/">Go to Home</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 30px auto;
}
</style>