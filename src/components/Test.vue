<template>
  <div>
    <!-- <h1>
    {{selected}}
    </h1> -->
    <h1>
      {{player.name}}
    </h1>
    <!-- <p>{{player}} would like to {{action}} {{target}} using {{kit}}.</p> -->

    <!-- <input v-model="message"/> -->
    <!-- <select 
      name="Actions" 
      id="1" 
      v-model="selected"
      value="1">

      <option v-for="action in actions" :key="action.id" :value="action.id">{{action.name}}</option>
    </select> -->
    <button v-on:click="reset">Start Turn</button>
    <button v-on:click="apply">Apply Conditions</button>
    <button v-on:click="translate">Translate Target</button>
    <button v-on:click="legalize">Check Legality</button>
    <button v-on:click="apply">Take Action</button>
    <button v-on:click="testConditions">Debug</button>
    <div id="wrapper">
      <span id="visible">
        <p v-for="(value , property) in player" :key="property">{{property}} : {{value}}</p>
      </span>
      <span id="action">
        <p v-for="(value , property) in target" :key="property">{{property}} : {{value}}</p>
      </span>
    </div>
      
  </div>
</template>

<script>
import Vue from 'vue'
import actions from "../data/actions.js"
import testPlayer from '../data/test_player'
import ruleLegal from "../utils/ruleLegal"
import applyConditions from "../utils/applyConditions"
import sampleConditions from "../data/sampleConditions"
import testAction from "../data/sampleAction"
import sampleTarget from "../data/sampleTarget"
import translateTarget from "../utils/translateTarget"
import conditionsClosure from "../utils/determineConditions"
import roll from "../utils/roll"
import attackClass from "../utils/actionFactory"
const conditionsModule = conditionsClosure()
const sampleObj = {
  name: "halfCover",
  value: true,
  remove: ["threeQuarterCover", "fullCover"],
  duration: 5,
  expire: null,
  expired(turn){
    console.log("Expire:" , this.expire, turn)
    if(turn >= this.expire) return true;
    return false
  }
}

conditionsModule.addCondition(sampleObj)

export default {
  name: 'Test',
  props: {
    data: Object
  },
  data () {
    return {
      // ...this.data,
      // actions,
      // selected: 1,
      player: {waiting: "on player"},
      action: testAction,
      target: sampleTarget
    }
  },
  methods: {
    reset(){
      conditionsModule.setTurn()
      this.player = {...testPlayer}
      this.player.conditions = conditionsModule.getConditions()
    },
    apply(){
      this.player = applyConditions(
        this.player , 
        this.player.conditions
      )
    },
    translate(){
      const targetConditions = translateTarget(this.target);
      // TEMP: Would like to use a class to construct conditions
      targetConditions.forEach(element => {
        conditionsModule.addCondition(sampleConditions[element])
      });
      this.player.conditions = conditionsModule.getConditions()
      console.log("This is translate. \nThe Array:" , targetConditions , "\nThe Conditions: " , this.player.conditions)
    },
    takeAction(){
      ruleLegal(this.player , this.actions[0]) && console.log("that worked!")
    },
    legalize(){
      console.log(ruleLegal(this.player , this.action.requirements))
    },
    testConditions(){
      console.log(conditionsModule.debugConditions())
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

