<template>
  <div>
  <BoxList />
  <BoxList2 />
    <img alt="Vue logo" src="./assets/logo.png">
    <h1> Made with Vue by the RbW team </h1>
  </div>
</template>

<script>
import BoxList from './components/BoxList.vue'
import BoxList2 from './components/BoxList2.vue'

export default {
  name: 'App',
  components: {
    BoxList,
    BoxList2
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
