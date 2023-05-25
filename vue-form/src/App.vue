<template>
  <form v-on:submit.prevent="submitForm"><!--클릭을 하면 submit이라는 이벤트가 발생함 .prevent: 새로고침 막는 것-->
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password">
    </div>
    <button type="submit" >login</button><!--클릭하면 이벤트가 올라가서 form까지 넘겨짐-->
  </form>
</template>

<script>
import axios from 'axios' // http 프로토콜을 이용한. 브라우저에서 서버로 데이터 주고받기 위한 라이브러리

export default {
  data : function(){
    return{
      username : '',
      password: '',
    }
  },
  methods:{
    submitForm : function(){
      // event.preventDefault(); //  event라는 인자를 받아서 form의 이동,새로고침을 막는 것.
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username : this.username,
        password: this.password
      }
      axios.post(url, data)
      .then(function(response){
        console.log(response)
      })
      .catch(function(error){
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>