<template>
  <div>
    <Buttons
      :data="{
        reset,
        translate,
        takeAction,
        testConditions,
        legalize,
        }"
    />
    
    <ActionBuilder v-if="player.kit" :data="{weapons: player.kit.weapons , spells: player.kit.preparedSpells , items: player.kit.items , actions}" />


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
import sampleConditions from "../data/sampleConditions"
import testAction from "../data/sampleAction"
import sampleTarget from "../data/sampleTarget"
import sampleKit from "../data/sampleKit"
import translateTarget from "../utils/translateTarget"
import conditionsClosure from "../utils/determineConditions"
import roll from "../utils/roll"
import attackClass from "../utils/actionFactory"
import ActionBuilder from "./ActionBuilder"
import Buttons from "./Buttons"
const conditionsModule = conditionsClosure()

export default {
  name: 'Test',
  props: {
    data: Object
  },
  components: {
    ActionBuilder,
    Buttons,
  },
  data () {
    return {
      // ...this.data,
      actions,
      // selected: 1,
      player: {waiting: "on player"},
      actionProto: [],
      action: testAction,
      target: sampleTarget
    }
  },
  methods: {
    reset(){
      conditionsModule.setTurn()
      this.player = {...testPlayer}
      this.player.kit = sampleKit
      this.player.conditions = this.addConditions(["action"])
    },
    translate(){
      const targetConditions = translateTarget(this.target);
      // For the moment, we pass in an array of the conditions we want to set.
      this.player.conditions = this.addConditions(targetConditions)
    },
    takeAction(){
      ruleLegal(this.player , this.actions[0]) && console.log("that worked!")
    },
    legalize(){
      console.log(ruleLegal(this.player , this.action.requirements))
    },
    testConditions(){
      console.log(conditionsModule.debugConditions())
    },
    addConditions(arr){
      // TEMP: Would like to use a class to construct conditions
      arr.forEach(element => {
        conditionsModule.addCondition(sampleConditions[element])
      });
      return conditionsModule.getConditions()
    },
    loop(){
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

