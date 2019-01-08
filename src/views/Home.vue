<template>
  <div class="home">
    <Header></Header>
    <editor></editor>
  </div>
</template>

<script>
// @ is an alias to /src
import editor from '@/components/editor'
import Header from '@/components/header'

export default {
  name: 'home',
  components: {
    editor,
    Header
  }
}
</script>

<style scoped>
.home {
  height: 700px;
}
</style>

