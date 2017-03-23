<template>
  <div class="hello">
    <ListArticles></ListArticles>
  </div>
</template>

<script>
import ListArticles from './ListArticles'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Live Coding App'
    }
  },
  components: {
    ListArticles
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
