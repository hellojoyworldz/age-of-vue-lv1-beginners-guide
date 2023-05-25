<template>
  <div>
    <app-header></app-header>
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
            str:'hi'
        }
    },
    components:{
        'app-header' : AppHeader
    }
}
</script>

<style>

</style>