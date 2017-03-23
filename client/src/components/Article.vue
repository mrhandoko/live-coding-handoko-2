<template>
  <div class="container">
    <div class="row">
    	<div class="col-md-4 col-md-offset-4">
    		<div class="panel panel-default">
  		  	<div class="panel-heading">
  			    <h3 class="panel-title">Create Article</h3>
  			 	</div>
  			  <div class="panel-body">
            <fieldset>
              <div class="form-group">
                <input class="form-control" placeholder="Title" v-model="dataArticle.title">
              </div>
  			    	 <div class="form-group">
  			    	   <textarea class="form-control" placeholder="content" rows="15" v-model="dataArticle.content"></textarea>
  			    	 </div>
  			    		<button class="btn btn-lg btn-success btn-block"  v-on:click="onSubmitArticle">Submit Article</button>
  			     </fieldset>
    		   </div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      dataArticle: {
        title: '',
        content: '',
        author: ''
      }
    }
  },
  methods: {
    getToken() {
      let self = this
      let token  = JSON.parse(localStorage.getItem("token"))
      axios.get('http://localhost:3000/api/verify/' + token).then((response) => {
        if (!response.data.user) {
          window.location = 'http://localhost:8080/#/login'
        } else {
          self.dataArticle.userid = response.data.userdata.id
        }
      })
    },
    onSubmitArticle() {
      let self = this
      console.log(self.dataArticle);
      axios.post('http://localhost:3000/api/article', self.dataArticle).then((response) => {
        console.log(response)
        window.location = 'http://localhost:8080/#/'
      })
    }
  },
  mounted() {
    this.getToken()
  }
}
</script>

<style lang="css">
.white{
    color:#000;
    background-color:#fff;
}

.btn-facebook {
    color: #ffffff;
    -webkit-text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    background-color: #2b4b90;
    *background-color: #133783;
    background-image: -moz-linear-gradient(top, #3b5998, #133783);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#3b5998), to(#133783));
    background-image: -webkit-linear-gradient(top, #3b5998, #133783);
    background-image: -o-linear-gradient(top, #3b5998, #133783);
    background-image: linear-gradient(to bottom, #3b5998, #133783);
    background-repeat: repeat-x;
    border-color: #133783 #133783 #091b40;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff3b5998', endColorstr='#ff133783', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
}

    .btn-facebook:hover,
    .btn-facebook:focus,
    .btn-facebook:active,
    .btn-facebook.active,
    .btn-facebook.disabled,
    .btn-facebook[disabled] {
        color: #ffffff;
        background-color: #133783 !important;
        *background-color: #102e6d !important;
    }

    .btn-facebook:active,
    .btn-facebook.active {
        background-color: #0d2456 \9 !important;
    }
</style>
