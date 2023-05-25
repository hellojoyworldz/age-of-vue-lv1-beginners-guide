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
```
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