<!--<template>             первый способ-->
<!--  <div id="app">-->
<!--    <navbar  v-bind:showRating = "showRating" v-bind:showHistoryRating = "showHistoryRating" />-->
<!--    <template v-if = "mainPage === 'rating'">-->
<!--      <rating/>-->
<!--    </template>-->
<!--    <template  v-if = "mainPage === 'ratingHistory'">-->
<!--      <historyRating/>-->
<!--    </template>-->
<!--  </div>-->
<!--</template>-->

<!--второй способ-->
<template>
  <div>    <!--Должен быть обернут в один div / рендерим компоненты -->
    <navbar @showUserList = "showUserList" @showRating = "showRating" @showHistoryRating = "showHistoryRating"/>
  <!--    отрендерить тот или иногй компонент-->
    <div v-if = "mainPage === 'userListPage'">
      <userList  :mainPage = 'mainPage'  />
    </div>
    <div v-if = "mainPage === 'ratingPage'">
      <rating  :mainPage = 'mainPage'  />
    </div>
    <div v-if = "mainPage === 'ratingHistoryPage'">
      <historyRating  :mainPage = 'mainPage'  />
    </div>
  </div>
</template>


<script>
import rating from './components/Rating.vue'
import historyRating from './components/HistoryRating.vue'
import navbar from './components/Navbar.vue'
import userList from './components/UserList.vue'


export default {
  name: 'app',

  data() { // Переменные которые можно использовать в шаблоне
    return {
      mainPage: "",
      localStoragePage : ''
    }
  },
  mounted() { // Функция загрузки данных
    this.mainPage = localStorage.getItem('localStoragePage')        //сохранение страницы после загрузки
  },

  components: {
    userList,
    rating,
    historyRating,
    navbar
  },
  methods: {
    showUserList: function () {
      this.mainPage = "userListPage";
    },
    showRating: function () {
      this.mainPage = "ratingPage";
    },
    showHistoryRating: function () {
      this.mainPage = "ratingHistoryPage";
    }
  }
}
</script>


