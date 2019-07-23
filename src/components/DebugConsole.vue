<template>
  <div class="container">
    <div id="logframe">
        <div id="logwrap" class="container">
          <DebugShow
            :data="{...messages}"
          />
        </div>
    </div>

    <div class="flex">
      <span class="border">
        <DebugShow
          :data="player"
        />
      </span>

      <span class="border">
        <DebugShow
          :data="target"
        />
      </span>

      <button id="debug-button" v-on:click="step">DEBUG</button>
      
    </div>
  </div>
</template>

<script>
import target from "../data/sampleTarget"
import player from "../data/test_player"
import DebugShow from "./DebugShow"

export default {
  name: "DebugConsole",
  components: {
    DebugShow
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
    spinUp(){

    },
    load(name){
      this[name] = [name]
    },
    debug(){
      this.target = target
      this.log("Target added")
      this.player = player
      this.log("Player added")
    },
    log(msg){
      this.messages.push(msg)
    },
    step(){
      this.steps[this.index]();
      this.index < this.steps.length - 1 ? this.index++ : this.index = 0
    }
  },
  updated: function (){
      const logframe = document.getElementById("logframe")
      logframe.scrollTop = (logframe.scrollHeight)
    
  }
}
</script>

<style>
  .container {
    padding: 5px;
    width: 100%;

  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .border {
    border: 1px solid darkgray;
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  #logwrap {
    justify-content: center;
    color: #14db53;
  }

  #logframe {
    overflow-y: scroll;
    background-color: #1f2b3d;
    height: 20vh;
  }

  #debug-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    height: 50px;
    width: 60px;
    background-color: blue;
  }
</style>

