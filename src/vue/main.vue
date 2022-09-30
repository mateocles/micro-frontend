<template>
  <b-container fluid class="bv-example-row">
    <b-row align-h="center">
      <b-col md="3" offset-md="3">
        <b-button variant="primary" v-on:click="prevPage">PREV</b-button>
        <b-button variant="primary" v-on:click="nextPage">NEXT</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {};
</script>