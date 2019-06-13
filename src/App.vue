<template>
  <div id="app">
    <div class></div>
    <router-view/>
    <i-switch v-model="switch1"/>
    <Circle/>
    <Table></Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switch1: false
    };
  },
  mounted() {
    console.log("看看构建版本看看构建版本看看构建版本看看构建版本看看构建版本看看构建版本看看构建版本看看构建版本看看构建版本看看构建版本看看构建版本看看构建版本看看构建版本");
    this.$Message.info({
      content: "Tips for manual closing",
      duration: 10,
      closable: true
    });
  }
};
</script>

<style lang="scss">
</style>
