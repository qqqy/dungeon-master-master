<template>
  <div>
    <h1>
    {{selected}}
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
  </div>
</template>

<script>
import Vue from 'vue'
import actions from "../data/actions.js"

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
      selected: 0,
    }
  }
}
</script>
