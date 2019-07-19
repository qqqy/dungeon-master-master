<template>
  <div>
    <button v-on:click="reset">Start Turn</button>
    <button v-on:click="translate">Translate Target</button>
    <button v-on:click="legalize">Check Legality</button>
    <button v-on:click="noFunction">Take Action</button>
    <button v-on:click="testConditions">Debug</button>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  props: {
    data: Object
  },
  data(){
    return {
      ...this.data
    }
  },
  methods: {
    noFunction(){
      console.log("No Function")
    }
  }
}
</script>

