<template>
  <div>
    <h1>
    {{selected}}
    </h1>
    <h1>
      {{player.name}}
    </h1>
    <!-- <p>{{player}} would like to {{action}} {{target}} using {{kit}}.</p> -->

    <!-- <input v-model="message"/> -->
    <select 
      name="Actions" 
      id="1" 
      v-model="selected"
      value="1">

      <option v-for="action in actions" :key="action.id" :value="action.id">{{action.name}}</option>
    </select>
    <button v-on:click="reset">Start Turn</button>
    <button v-on:click="apply">Apply Conditions</button>
    <button v-on:click="apply">Translate Target</button>
    <button v-on:click="apply">Check Legality</button>
    <button v-on:click="apply">Take Action</button>
    <div id="wrapper">
      <span id="visible">
        <p v-for="(value , property) in playerString" :key="property">{{property}} : {{value}}</p>
      </span>
      <span id="action">
        <p v-for="(value , property) in playerString" :key="property">{{property}} : {{value}}</p>
      </span>
    </div>
      
  </div>
</template>

<script>
import Vue from 'vue'
import actions from "../data/actions.js"
import testPlayer from '../data/test_player'
import ruleLegal from "../utils/ruleLegal"
import conditionsArray from "../data/conditionsArray"
import applyConditions from "../utils/applyConditions"
import testAction from "../data/sampleAction"

console.log(actions)

export default {
  name: 'Test',
  props: {
    data: Object
  },
  data () {
    return {
      ...this.data,
      actions,
      selected: 1,
      player: {...testPlayer},
      playerString: testPlayer,
      action: testAction
    }
  },
  methods: {
    takeAction(){
      ruleLegal(this.player , this.actions[0]) && console.log("that worked!")
    },
    apply(){
      this.playerString = applyConditions(this.player , conditionsArray)
    },
    reset(){
      this.playerString = {...testPlayer}
    }
  }
}
</script>

<style scoped>
#visible {
  text-align: left;
}

#action {
  float: right;
  text-align: left;
  min-width: 50vw;
}

#wrapper {
  display: flex;
  justify-content: space-between;
}
</style>

