<template>
    <div  class="container-fluid py-5 text-center">
        <table class="table table-dark">
            <thead>
            <tr>
                <th scope="col">№</th>
                <th scope="col">Id прокоментировашего</th>
                <th scope="col">Имя прокомментировашего</th>
                <th scope="col">Кому (Id)</th>
                <th scope="col">Кому (Имя)</th>
                <th scope="col">Комментарий</th>
                <th scope="col">Время ответа</th>
                <th scope="col">Рейтинг</th>
            </tr>
            </thead>
            <tbody>
            <!--    <tr v-for="user in userList.sortRating" :key="user.id">-->
            <tr  v-for= '(user, index) in userListHistoryRating.historyOpinions' :key='index'>   <!--чтобы можно было вывести номер строки -->
                <td>{{index+1}}</td>
                <td>{{user.userId}}</td>
                <td>{{user.userName}} {{user.userFamily}} </td>
                <td>{{user.replyUser}}</td>
                <td>{{user.replyUserName}} {{user.replyUserFamily}} </td>
                <td>{{shortMessage(user.replyComment)}}</td>
                <td>{{getTime(user.time)}}</td>
                <td>{{user.raiting}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: 'historyRating',

        data: ()=>({
            nowDate: new Date(),
            userListHistoryRating :[],
        }),

        mounted() {
            setInterval(()=>{
                this.nowDate = new Date();
            },1000);

            this.reloadRaitingHistoryUsers()
        },
        methods: {
            reloadRaitingHistoryUsers: function () {
                axios.get('http://localhost:3000/ajax/history.json/', {
                }).then((response) => {
                    this.userListHistoryRating = response.data;   //метод для отрисовки табилцы через другой сервер
                    // console.log(this.userListHistoryRating);
                })
            },
            getTime(timeMessage) {
                let dateSeconds = this.nowDate.getTime() / 1000;
                let time = Math.round(dateSeconds - timeMessage) ;
                if (time > 60) time = Math.floor((dateSeconds - timeMessage) / 60) + " минуты" +
                    " и " + Math.round(dateSeconds - timeMessage - 60 * Math.floor((dateSeconds - timeMessage) / 60)) + " секунд назад"
                else time += " секунд назад";
                return time
            },
            shortMessage(text) {
                if (text.length > 8) {
                    let newText = text.substr(0, 5) + "...";
                    return newText
                }
                return text
            }
        }
    }

</script>