<template>
  <div  class="container py-5 text-center">
  <table class="table table-dark">
    <thead>
    <tr>
      <th scope="col">№</th>
      <th scope="col">Id</th>
      <th scope="col">Поьзователь</th>
      <th scope="col">Рейтинг</th>
    </tr>
    </thead>
    <tbody>
<!--    <tr v-for="user in userList.sortRating" :key="user.id">-->
    <tr  v-for= '(user, index) in userListRating.sortRating' :key='index'>   <!--чтобы можно было вывести номер строки -->
      <td>{{index+1}}</td>
      <td>{{user.id}}</td>
      <td>{{user.name}}</td>
      <td>{{user.sum}}</td>
    </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import axios from "axios"



export default {
  name: 'rating',

  data: ()=>({
    userListRating: [],
  }),

  mounted() {
    this.reloadRaitingUsers();
  },
  methods: {
    reloadRaitingUsers: function () {
      axios.get('http://localhost:3000/ajax/rating.json/', {
      }).then((response) => {
        this.userListRating = response.data;   //метод для отрисовки табилцы через другой сервер
        // console.log(this.userList);
      })
    },
  }
}
</script>

