<template>
  <div class="editor-index">
    <div class="index-background"></div>
    <div class="index-content">
      <span>开始尽情书写吧！</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welocome'
}
</script>

<style scoped>
.editor-index {
  height: 100%;
  width: 100%;
}

.index-background {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-image: url('../../public/background-1.jpg');
  background-size: 100%;
  opacity: 0.5;
}

.index-content {
  float: left;
  position: relative;
  top: -55%;
  left: 42%;
}

.index-content span {
  font-size: 25px;
  color: #398dee;
}
</style>
