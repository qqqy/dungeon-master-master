<template>
  <div id="app">
    <DebugConsole 
      :data="_data"
      :methods="{log , step}"
    />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Test :data="{message , player , target , kit , action}" /> -->
    <!-- {{message}} -->
  </div>
</template>

<script>
import DebugConsole from "./components/DebugConsole"
import entities from "./data/entities"
import roll from "./utils/roll"

export default {
  name: 'app',
  components: {
    DebugConsole
  },
  data(){
    return {
      player: {STATUS: "waiting on player"},
      target: {STATUS: "waiting on target"},
      messages: [],
      steps: [
        () => this.load(entities),
      ],
      index: 0,
      turn: 0,
    }
  },
  methods: {
    // In the future, may want to begin by creating character closures.
    load(entities){
      entities.forEach(entity => {
        this.updateConditions(entity)
        entity.orderBy = roll.d20() + entity.dex
        this.log(`Loading ${entity.name}, rolled ${entity.orderBy}`)
      });
      entities.sort((a,b) => {
        if(a.orderBy === b.orderBy) return b.dex - a.dex
        return b.orderBy - a.orderBy
      })
    },
    updateConditions(entity){
      // This is where we apply conditions
    },
    
    log(msg){
      this.messages.push(Date.now() + ": " + msg)
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
