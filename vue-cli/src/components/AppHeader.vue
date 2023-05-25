<template>
  <header>
    <h1>{{propsdata}}</h1>
    <button type="button" v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
    props:['propsdata'],
    methods:{
        sendEvent:function(){
            this.$emit('renew') // renew 라는 이벤트가 부모 컨포넌트로 전달된다 (컴포넌트를 등록한 태그에서 받는다)
        }
    }
}
</script>

<style>

</style>