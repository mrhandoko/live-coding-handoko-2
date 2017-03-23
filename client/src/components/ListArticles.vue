<template>
  <div class="container-articles">
    <div class="list-articles" v-for="article in articles">
      <div style="padding-top:30px;"><h1>{{ article.title }}</h1></div>
      <div style="padding-bottom:20px; padding-top:20px;">{{ article.content }}</div>
      <div class= "author"> Author : {{ article.author.fullname }}</div>
      <div class= "createdat"> created at: {{ article.author.createdAt }}</div>
      <div class="clear-fix"></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        articles: []
      }
    },
    methods: {
      getData() {
        var self = this
        axios.get('http://localhost:3000/api/articles').then((response) => {
          console.log(response.data);
          self.articles = response.data;
        })
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>

<style scoped>
.container-articles{
  margin-left: 30%;
  margin-right: 30%;
}

.list-articles{
  margin-bottom: 20px;
}

.clear-fix {
  margin: 10px;
}

.author{
  float: left;
}

.createdat{
  float: right;
}

h2, h3, h4 {
  text-align: left;
}
</style>
