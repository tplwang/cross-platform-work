<template>
  <div class="header">
    <div class="logo">
      <img src="../../public/note.png">
        <span>&nbsp;&nbsp;MarkDown云笔记</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;<i>——记录你的生活</i></span>
    </div>
    <div>
      <div class="head-icon">
        <svg class="icon head-icon" aria-hidden="true">
          <use xlink:href="#favicon-default2"></use>
        </svg>
      </div>
      <div class="name-content">
        <span>{{ userName }}</span>
      </div>
    </div>
    <Poptip trigger="hover" content="content" class="hover" placement="bottom">
      <div slot="content">
          <Button type="error" size="large" class="quit-btn">退出</Button>
      </div>
    </Poptip>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      userName: 'jack'
    }
  }
}
</script>

<style scoped>
.header {
  height: 60px;
  width: 100%;
  background-color: #398dee
}

.head-icon {
  float: right;
  position: relative;
  right: 100px;
}

.name-content {
  float: right;
  font: 18px arial,sans-serif;
  color: white;
  position: relative;
  right: 100px;
  line-height: 60px;
}

.hover {
  float: right;
  width: 100px;
  height: 60px;
  position: relative;
  right: 70px;
}

.quit-btn {
  width: 100px;
}

.logo {
  float: left;
  position: relative;
  left: 30px;
}
.logo img {
  height: 30px;
  width: 30px;
  margin-top: 15px;
}

.logo span {
  font: 20px arial,sans-serif;
  color: white;
  margin-top: -20px;
  position: relative;
  top: -7px;
}

.logo span:nth-child(3) {
  font-size: 16px;
}
</style>