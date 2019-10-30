<template>
    <div  class="container py-5 text-center">
        <table class="table table-dark">
            <thead>
            <tr>
                <th scope="col">№</th>
                <th scope="col">Id</th>
                <th scope="col">Поьзователь</th>
            </tr>
            </thead>
            <tbody>
            <!--    <tr v-for="user in userList.sortRating" :key="user.id">-->
            <tr  v-for= '(user, index) in userList.userArray' :key='index'>   <!--чтобы можно было вывести номер строки -->
                <td>{{index+1}}</td>
                <td>{{user.userId}}</td>
                <td>{{user.userName}} {{user.userFamily}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from "axios"

export default {
    name: "userList",
    data: ()=>({
        userList: [],
    }),
    mounted() {
        this.reloadUserList();
    },
    methods: {
        reloadUserList: function () {
            axios.get('http://localhost:3000/ajax/allusers.json/', {
            }).then((response) => {
                this.userList = response.data;   //метод для отрисовки табилцы через другой сервер
                // console.log(this.userList);
            })
        },
    }
}
</script>

