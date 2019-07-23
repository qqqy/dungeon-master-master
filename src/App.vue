<template>
  <div id="app">
    <DebugConsole :data="_data"/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Test :data="{message , player , target , kit , action}" /> -->
    <!-- {{message}} -->
  </div>
</template>

<script>
import DebugConsole from "./components/DebugConsole"

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // Test
    DebugConsole
  },
  data(){
    return {
      target: {STATUS: "waiting on target"},
      player: {STATUS: "waiting on player"},
      messages: [],
      steps: [
      ],
      index: 0,
    }
  },
}
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

</style>
