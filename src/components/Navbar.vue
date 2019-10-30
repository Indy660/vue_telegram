<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

            <div class="collapse navbar-collapse" id="navbar1">
                <ul class="navbar-nav mr-auto">
                    <li>
                        <a class="nav-link" @click="showUserListNav">Полный список пользователей <span class="sr-only">(current)</span></a>
                    </li>
                    <li>
                        <a class="nav-link" @click="showRatingNav">Рейтинг пользователей <span class="sr-only"></span></a>
                    </li>
                    <li>
                        <a class="nav-link" @click="showHistoryRatingNav">История рейтинга всех пользователей</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

    export default {
        name: "navbar",
        // props:[ "showRating", "showHistoryRating"],   //первый способ
        methods: {                                       //второй способ
            showUserListNav() {
                this.$emit("showUserList")    // вызывает событие в App.vue
            },
            showRatingNav() {
                this.$emit("showRating")    // вызывает событие в App.vue
            },
            showHistoryRatingNav() {
                this.$emit("showHistoryRating") // вызывает событие в App.vue
            }
        }
    }
</script>