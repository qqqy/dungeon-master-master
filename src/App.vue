<template>
  <div id="app">
    <DebugConsole 
      :data="_data"
      :methods="{log}"
    />
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
  methods: {
    load(name){
      this[name] = [name]
    },
    log(msg){
      this.messages.push(msg)
      this.updated = !this.updated
    },
    step(){
      this.steps[this.index]();
      this.index < this.steps.length - 1 ? this.index++ : this.index = 0
    }
  },
  updated(){
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
