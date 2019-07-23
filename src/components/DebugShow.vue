<template>
    <code id="visible">
      <p v-for="(value , property) in data" :key="property">{{property}} : {{value}}</p>
    </code>
</template>

<script>
export default {

  name: "DebugShow",

  props: {
    data: Object,
  },

  data(){
    return {
    }
  },

  methods: {},
}
</script>

<style>
  #visible {
    font-weight: bold;
    font-size: large;
  }
</style>

