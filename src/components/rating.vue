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
    <tr  v-for= '(user, index) in userList.sortRating' :key='index'>   <!--чтобы можно было вывести номер строки -->
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
export default {
  name: 'rating',
  props: [
    "userList",
  ],
  methods: {

  }
}
</script>

