# 10-1.  
[Vue CLI 공식 사이트 링크](https://cli.vuejs.org/)

node -v : 노드 버전 확인 (10 이상)  
npm -v : npm 버전 (6 이상)  
npm install -g @vue/cli (에러가 나면 앞에 sudo)  

# 10-2.  
[Where does npm install packages? 스택 오버 플로우 글](https://stackoverflow.com/questions/5926672/where-does-npm-install-packages)  
맥 : usr/local/lib/mode_modules

# 10-3.
CLI 2.x 와 3.x의 차이점

[Vue CLI 2.x]
플러그인 기반
vue init 프로젝트템플릿유형 프로젝트폴더위치  
vue init webpack-simple 폴더위치  
  
[Vue CLI 3.x]
vue create 프로젝트폴더위치  
vue create vue-cli (vue2 생성하기)
cd vue-cli
npm run serve

[웹 개발할 때 알아두면 좋은 리눅스 명령어 글](https://joshua1988.github.io/web-development/linux-commands-for-beginners/)

# 10-4
node package manager : package.json에서 라이브러리에 대한 설명  
npm run serve : package.json에서 serve 라는 명령어를 정의해 놓은 것 = vue-cli-service serve  
public/index.html : 실행되는 파일
src : 여기있는 여러가지 파일들을 묶어서 주입한다  

# 10-5.
싱글 파일 컴포넌트(.vue) : html, js, css 를 한 파일에서 관리  
template, script, style 이 한 파일에 있다.

# 11-1.
src/components/HelloWorld.vue 는 필요가 없다.   
App.vue 에 template, script, style 셋팅을 한다.  
template root는 1개의 element만 있어야 한다.  
```vue
<template>
    <div>{{str}}</div>
</template>

<script>
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
    }
}
</script>
```

# 11-2.
# 11-3. props 속성 사용하기
App.vue
```vue
<template>
    <app-header v-blind:propsdata="str"><!--부모의 data str 을 자식에서 props로 받아서 쓴다--></app-header>
</template>
<script>
import AppHeader from './components/AppHeader.vue' // 컴포넌트 내용을 정의하고 그 내용을 변수에 넣어서 사용
export default{
    data : function(){
        return {
            str:'Header'
        }
    },
    components : {
        'app-header' : AppHeader // 변수에 정의된 컴포넌트 등록
    }

}
</script>
```
AppHeader.vue
```vue
<template>
    <header>
        <h1>{{ propsdata }}</h1>
    </header>
</template>
<script>
export default{
    props: ['propsdata'] // 부모에게서 porps로 propsdata 받아와서 쓴다
}
</script>
```

# 11-4. event emit 구현하기
App.vue
```vue
<template>
    <app-header v-blind:propsdata="str"
    v-on:renew="renewStr"><!--컴포넌트를 등록한 태그에서 이벤트를 받는다--></app-header>
</template>
<script>
import AppHeader from './components/AppHeader.vue' 
export default{
    data : function(){
        return {
            str:'Header'
        }
    },
    components : {
        'app-header' : AppHeader 
    },
    methods:{
        renewStr:function(){
           this.str="hi!"
        },
    },
}
</script>
```
AppHeader.vue
```vue
<template>
    <header>
        <h1>{{ propsdata }}</h1>
        <button v-on:click="sendEvent">send</button>
    </header>
</template>
<script>
export default{
    props:['propsdata'],
    methods:{
        sendEvent:function(){
            this.$emit('renew') // renew 라는 이벤트가 부모 컨포넌트로 전달된다 
        }
    }
}
</script>
```

# 11-5.
[NPM 소개 강좌](https://www.inflearn.com/course/lecture?tab=curriculum&courseSlug=%ED%94%84%EB%9F%B0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%9B%B9%ED%8C%A9&unitId=37370)  
[NPM 소개 문서](https://joshua1988.github.io/webpack-guide/build/node-npm.html) 

vue cli : command line interface 명령어 실행도구(보조도구) 프로젝트  
npm run serve : package.json 명령어가 script에 정의되어있음

public/index.html : 하나의 파일로 변환이 되서 주입된다. (웹펙 살펴보기)
src/main.js : 내용들을 통해 App.vue 등등의 내용이 들어갈 수 있다.  

# 12-1.
[이벤트 버블링과 캡쳐링 블로그 글](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/)
 참고
CLI 버전이 업데이트되면서 기본적으로 ESLint 오류가 나면 화면을 조작할 수 없게 되었습니다. ESLint 에러를 화면에 표시하지 않으려면 아래와 같이 설정해주세요.

1. 프로젝트 폴더에 `vue.config.js` 파일 생성

2. `vue.config.js` 파일에 아래 내용 입력

module.exports = {
  devServer: {
    overlay: false
  }
}
3. 파일 저장

4. `Ctrl + C`로 서버 종료 후 `npm run serve`로 다시 실행

5. 결과 확인

# 12-3.
npm i axios
import axios from 'axios'