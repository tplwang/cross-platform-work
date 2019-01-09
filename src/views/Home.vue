<template>
  <div class="home">
    <Header></Header>
    <div class="side-bar">
      <sideBar></sideBar>
    </div>
    <div class="editor-view">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header'
import sideBar from '@/components/sideBar'

export default {
  name: 'home',
  components: {
    Header,
    sideBar
  }
}
</script>

<style scoped>
.home {
  height: 100%;
  background-color: #eee;
}

.side-bar {
  float: left;
  width: 19.9%;
  height: 92%;
}

.editor-view {
  float: right;
  height: 90%;
  width: 80%;
}
</style>

