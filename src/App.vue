<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

 .message{
   font-size: 3.5em;
   color: #333333;
 }

button {
  font-size: 3em;
  background-color: #368027;
  border: none;
  color: #FFFFFF;
  padding: .5em;
  font-weight: bold;
}
</style>
