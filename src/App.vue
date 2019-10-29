<template>
  <div id="app">
    <navbar  v-bind:showRating = "showRating" v-bind:showHistoryRating = "showHistoryRating" />

    <template v-if = "mainPage === 'rating'">
      <rating/>
    </template>
    <template  v-if = "mainPage === 'ratingHistory'">
      <historyRating/>
    </template>
  </div>
</template>

<script>
import rating from './components/rating.vue'
import historyRating from './components/historyRating.vue'
import navbar from './components/navbar.vue'



export default {
  name: 'app',

  data() {
    return {
       mainPage:"rating",
    }
  },

  components: {
    rating,
    historyRating,
    navbar
  },
  methods: {
    showRating: function () {
      this.mainPage = "rating";
    },
    showHistoryRating: function () {
      this.mainPage = "ratingHistory";
    }
  }
}
</script>


