<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- 컴포넌트 명명법 종류
      <hello-word></hello-word> 
      <HelloWorld></HelloWorld> : 파스칼케이스. 2단어 이상으로 조합. 웹이 컴포넌트 테그인지 html 표준태그인지 알 수 없다.
      <HelloWorld/>
    -->
  </div>
</template>

<script>
// 컴포넌트 내용을 들고와서(import) 컴포넌츠에 등록해서 사용한다(components)
import HelloWorld from './components/HelloWorld.vue'

export default {
  // 인스턴스 옵션 속성 또는 컴포넌트 옵션 속성을 넣어주면 된다
  name: 'App',
  components: {
    HelloWorld   //'hello-world' : HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
