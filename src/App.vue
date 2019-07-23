<template>
  <div id="app">
    <DebugConsole/>
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

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

</style>
