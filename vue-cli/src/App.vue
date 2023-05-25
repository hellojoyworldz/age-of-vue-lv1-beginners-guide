<template>
  <div>
    <!--
    <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header>
    <app-header v-on:하위 컴포넌트에서 올라온 이름="실행할 메소드 이름"></app-header>
    -->
    <app-header 
        v-bind:propsdata="str"
        v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
/*
var AppHeader = {
    template:'<header><h1>Header</h1></header>'
}
*/
import AppHeader from './components/AppHeader.vue' // 컴포넌트 내용을 정의하고 그 내용을 변수에 넣고

/*
data에 객체만 연결했으면 됐는데, 
컴포넌트를 재사용하겠다는 의지가 있기 때문에
여러개의 컴포넌트에서 동일한 값을 참조(공유)하면 안되기 때문에
function 함수를 사용하여 return 으로 새 객체를 반환해줘야한다.
new Vue({
    data:{
        str:'hi'
    }
})
*/
export default {
    data: function(){
        return{
            str:'Header'
        }
    },
    components:{
        'app-header' : AppHeader
    },
    methods:{
        renewStr : function(){
            this.str = 'hi'
        }
    }
}
</script>

<style>

</style>