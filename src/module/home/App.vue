<template>
  <div id="app" class="app">
    <span class="app-title is-active">{{msg}}</span>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: 'app',
  data: () => (
    {
      msg: '真帅'
    }
  )
}
</script>

<style lang="css">
  @block app-title {
    display: flex;
  }
</style>
