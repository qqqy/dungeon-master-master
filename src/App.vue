<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Test :data="{message , player , target , kit , action}" />
    <!-- {{message}} -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'

// console.log(HelloWorld)

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Test
  },
  data () {
    return { 
      message: 'Can you change me?',
      player: 'Kevin',
      action: 'jump',
      target: 'a big ravine',
      kit: 'a pole'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
