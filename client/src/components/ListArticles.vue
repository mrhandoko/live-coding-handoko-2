<template>
  <div>
    <div v-for="article in articles">
      <div><h1>{{ article.title }}</h1></div>
      <div>{{ article.content }}</div>
      <div>{{ article.author }}</div>
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
h2, h3, h4 {
  text-align: left;
}
</style>
