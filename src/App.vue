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
import options from "./data/actions"
import kit from "./data/sampleKit"
import conditionsModule from "./utils/conditionsModule"

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
        () => {
          let currents = entities[this.turn].module.addCondition(
            {
              duration: 6*entities.length,
              name: "test",
              value: true,
              build(turn){
                this.expiration = turn + this.duration
                return this;
              },
              requirements: {
                test: true
              }
            }
          )
          this.log(JSON.stringify(currents))
        },
        () => console.log(entities[this.turn].module.getConditions()),
        () => {
          let currents = entities[this.turn].module.addCondition(
            {
              duration: 6*entities.length,
              name: "test",
              value: false,
              build(turn){
                this.expiration = turn + this.duration
                return this;
              },
              requirements: {
                test: false
              }
            }
          )
          this.log(JSON.stringify(currents))
        },
        () => console.log(entities[this.turn].module.getConditions()),
        () => this.beginTurn(),
        () => this.determineOptions(),
        () => this.chooseTarget(entities[this.turn] , entities.find(entity => entity.name !== entities[this.turn].name)),
      ],
      index: 0,
      turn: 0,
    }
  },
  methods: {
    // In the future, may want to begin by creating character closures.
    load(entities){
      entities.forEach(entity => {
        // Temporary line to give Kevin his kit.
        // if(entity.name === "Kevin")
        entity.module = conditionsModule();
        entity.kit = kit
        entity.orderBy = roll.d20() + entity.dex
        // Load option defaults, kit, class
        console.log()
        // entity.options = this.filterOptions(entity.conditions, options)
        this.log(`Loading ${entity.name}, rolled ${entity.orderBy}`)
      });
      entities = entities.sort((a,b) => {
        if(a.orderBy === b.orderBy) return b.dex - a.dex
        return b.orderBy - a.orderBy
      })
    },
    updateConditions(entity){
      // This is where we apply conditions
      const conditions = {}
      if(entity.kit.preparedSpells.length > 0) conditions.caster = true
      if(entity.kit.items.length > 0) conditions.items = true
      if(entity.name === entities[this.turn].name){
        conditions.action = true,
        conditions.bonusAction = true,
        conditions.flourish = true,
        conditions.movement = true
      } else {
        conditions.action = false
        conditions.bonusAction = false
        conditions.flourish = false
        conditions.movement = false
      }
      conditions.immobile = true
      if(entity.speed <= 0) conditions.movement = false
      // conditions.immobile = true
      entity.conditions = conditions
      console.log(conditions, entity.name)
    },
    beginTurn(){
      this.log(`Begin Turn: ${entities[this.turn].name}`)

      this.player = entities[this.turn]
    },
    log(msg){
      this.messages.push(Date.now() + ": " + msg)
      this.updated = !this.updated
    },
    step(){
      this.steps[this.index]();
      this.index < this.steps.length - 1 ? this.index++ : this.index = 0
    },
    determineOptions(){
      entities.forEach(entity => {
        this.updateConditions(entity)
        entity.options = this.filterOptions(entity.conditions , options)
      })
    },
    filterOptions(conditions, options){
      let filteredOptions = options.filter(option => {
        for(let key in option.requirements){
          if(option.requirements[key] !== !!conditions[key]) return false
        }
        return true
      })
      console.log("filteredOptions", filteredOptions)
      return filteredOptions
    },
    chooseTarget(player , target){
      this.log(`Targeting ${target.name}`)
      this.target = target
      const conditions = {}
      if(target.conditions.defenseAdvantage !== target.conditions.defenseDisadvantage){
        if(target.conditions.defenseAdvantage) conditions.disadvantage = true
        if(target.conditions.defenseDisadvantage) conditions.advantage = true
      }
      player.conditions = {...player.conditions, ...conditions}
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
