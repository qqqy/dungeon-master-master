<template>
  <div>
    <select v-if="actions" name="actions" id="action-select"
    v-model="attempt.type">
      <option v-for="(action , index) in actions" :key="index">{{action}}</option>
    </select>

    <select name="weapons" id="weapon-select" v-if="weapons" v-model="attempt.kit" >
      <option v-for="weapon in weapons" :value="weapon.id" :key="weapon.id">{{weapon.nickname ? weapon.nickname : weapon.type}}</option>
    </select>
    <button v-on:click="debug" >DEBUG</button>
  </div>
</template>

<script>
export default {
  name: "ActionBuilder",
  props: {
    data: Object
  },
  data(){
    return {
      actions: this.data.actions,
      weapons: this.data.weapons,
      spells: this.data.spells,
      items: this.data.items,
      attempt: {
        type: "",
        kit: "",
        target: "",
      }
    }
  },
  methods: {
    debug(){
      console.log(this.attempt)
    }
  }
}
</script>

<style scoped>

</style>


