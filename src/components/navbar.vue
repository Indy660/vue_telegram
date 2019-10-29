<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

            <div class="collapse navbar-collapse" id="navbar1">
                <ul class="navbar-nav mr-auto">
                    <li v-bind:class="{'nav-item': true, active: (mainPage==='rating')}">
                        <a class="nav-link" v-on:click="showRating">Рейтинг пользователей <span class="sr-only">(current)</span></a>
                    </li>
                    <li v-bind:class="{'nav-item': true, active: (mainPage==='historyRating')}">
                        <a class="nav-link" v-on:click="showHistoryRating">История рейтинга всех пользователей</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

    export default {
        name: "navbar",
        props:[ "showRating", "showHistoryRating"],
    }
</script>