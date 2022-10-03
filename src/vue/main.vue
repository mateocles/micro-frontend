<template>
  <b-container>
    <b-row>
      <b-col class="container">
        <b-button
          variant="primary"
          :disabled="page < 2 ? true : false"
          v-on:click="prevPage"
          >PREV</b-button
        >
        <b-button variant="primary" v-on:click="nextPage">NEXT</b-button>
      </b-col>
    </b-row>
    <b-row class="container">
      <b-col md="auto" v-for="event in events" :key="event.id">
        <EventCard :event="event" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import EventCard from "./components/EventCard.vue";
import EventService from "./services/EventService.js";

import { api } from "./common/Config/Environments";
export default {
  name: "CardList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      page: 1,
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    nextPage: function () {
      this.page++;
      this.getPage();
    },
    prevPage: function () {
      this.page < 2 ? this.page : this.page--;
      this.getPage();
    },
    getPage: function () {
      EventService.getEventsPage(this.page)
        .then((response) => {
          //console.log("events:", response.data.results);
          this.events = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.container {
  text-align: center;
  padding-bottom: 10px;
}
</style>