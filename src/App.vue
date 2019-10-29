<template>
  <div id="app">
    <rating v-bind:userList = "userList"/>
  </div>
</template>

<script>
import rating from './components/rating.vue'
import axios from "axios"

export default {
  name: 'app',
  data() {
    return {
      userList: [],
    }
  },
  components: {
    rating
  },
  mounted() {
    this.reloadRaitingUsers()
  },
  methods: {
    reloadRaitingUsers: function () {
      axios.get('http://localhost:3000/ajax/rating.json/', {
      }).then((response) => {
        this.userList = response.data;   //метод для отрисовки табилцы через другой сервер
        // console.log(this.userList);
      })
    }
  }
}
</script>


