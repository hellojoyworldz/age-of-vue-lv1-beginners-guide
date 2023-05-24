# vue.js 시작하기 - Age of Vue.js
> 자료 : <https://github.com/joshua1988/learn-vue-js.git>  
> 시작일 : 23.01.07 ~
<details>
    <summary>목차</summary>
    -
</details>

***

## 간단한 마크다운 사용법 정리
*이태릭체* _이태릭체_ **두껍게** __두껍게__ ~~취소표시~~ <u>밑줄</u>  
링크 : <https://www.naver.com> [링크](https://www.naver.com)  
[![alt](https://source.unsplash.com/random "title")](https://www.naver.com)  

|값|의미&#124;|기본값|
|---|:---:|---:|
|왼쪽정렬|가운데정렬|오른쪽정렬|
|1|2|3|
||합치는건 안되는건가요?||

1. 순서가 필요한 목록 1
   - 순서가 필요없는 목록1
     * 순서가 필요없는 목록 1-1
     + 순서가 필요없는 목록 1-2
2. 글씨를 쓰다가 `코드강조` 하는 것입니다.  
   
```bash
$ git init
```

>인용
>> 중첩된 인용
***
## 1. Vue.js 소개
### 1-1. MVVM 모델에서의 Vue
![vue는무엇인가?](./readme-img/스크린샷%202023-01-07%20오후%2011.08.29.png "")  

### 1-4. Reactivity 코드 라이브러리화 하기
[Object.defineProperty() API 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)  

### 1-5. Hello Vue.js와 뷰 개발자 도구
[크롬 확장자도구 - Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)  
[Vue.js devtools에서 Root가 하나로 보일 때 이것으로 설치 - Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/iaajmlceplecbljialhhkmedjlpdblhp)
[Vue.js devtools 사용법](https://dreamcoding.tistory.com/34)  
[크롬 패널에서 vue가 보이지 않을 때](https://kkamikoon.tistory.com/entry/Vuejs-Vue-devtools-%ED%99%95%EC%9E%A5%ED%83%ADVue-Panel-%EC%95%88-%EB%B3%B4%EC%9D%BC-%EB%95%8C)  


## 2. 인스턴스
### 2-1. 인스턴스 소개
<https://joshua1988.github.io/vue-camp/vue/instance.html>  
인스턴스 : 어떤 집합에 대해서 그 집합의 개별적인 요소  
붕어빵틀 = class, 붕어빵 = object, 각각의 붕어빵 = instance, 붕어빵을굽다 = 인스턴스화하다  
API : 기능
```html
<div id="app">
        <!--...-->
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        var vm = new Vue({
            el: '#app', //#app에 인스턴스를 붙이겠다. #app 안에서 vue의 기능과 속성들이 유요해진다.
            data: {
                message: 'hi'
            }
        });
    </script>
```

### 2-2. 인스턴스와 생성자 함수
[MDN 생성자 함수 설명 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function)  
[MDN Prototype 설명 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)

자바스크립트에서 함수를 이용하여 인스턴스를 생성 - 생성자함수를 이용  
함수가 **대문자로 시작하면 생성자 함수**를 의미
```javascript
function Person(name,job){
  this.name=name;
  this.job=job;
}

var p = new Person('josh','developer');
```
![이미지](./readme-img/스크린샷%202023-01-08%20오후%207.46.47.png)

#### 뷰를 생성자함수 관점에서 찍어내는 이유
![이미지](./readme-img/스크린샷%202023-01-08%20오후%207.51.11.png)  

`new Vue()` 안에 `this.logText = function(){}` 을 정의하면 `new Vue()`를 생성 할 때 마다 미리 정의한 함수가 포함되어있다. 매번 함수를 정의하는 것이 아니라 이미 정의된 함수를 사용한다.   
그렇기 때문에 생성자 함수로 가져다 쓰거나 재사용하는 패턴을 갖게된다.

### 2-3. 인스턴스 생성

```javascript
// 객체 리터럴 ({중괄호 내에 0개 이상의 프로퍼티를 정의})
// 객체를 통째로 넣어주는게 가독성이 더 좋다
new Vue({
  el: ,
  template: ,
  data: ,
  methods: ,
  created: ,
  watch: ,
});

// 객체를 변수에 담아 new Vue(options) 에 넘긴다
var options = {
  el: ,
  template: ,
  data: ,
  methods: ,
  created: ,
  watch: , 
}

new Vue({options})
```
- 생성자 안에 들어가는 인자는 객체  
- **key : value 형태**로 들어오는게 중요하다.  
- , 를 찍고 늘려나간다

## 3. 컴포넌트
### 3-1. 컴포넌트 소개
<https://joshua1988.github.io/vue-camp/vue/components.html>
![이미지](./readme-img/스크린샷%202023-01-08%20오후%208.14.16.png)
- 컴포넌트 : 화면의 영역을 구분하여 코드로 관리하는 것.  
- **재사용성**이 포인트 - 코드의 반복을 줄인다.  
- 영역을 구분했을 때 **컴포넌트간에 관계**가 생긴다.

### 4-2. [실습 안내] 컴포넌트 등록 및 실습
### 4-3. [실슴 풀이] 전역 컴포넌트 등록
```html
<div id="app">
    <!-- 생성한 컴포넌트를 태그형태로 넣어준다 -->
    <app-header></app-header>
    <app-content></app-content>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    // 전역 컴포넌트 등록
    // Vue.component('컴포넌트 이름', {컴포넌트 내용});
    Vue.component('app-header', { 
        template: '<h1>Header</h1>'
    });

    Vue.component('app-content',{
        template: '<div>content</div>'
    })

    new Vue({
        el: '#app', 
    });
</script>
```
컴포넌트를 등록하는 가장 쉬운 방법 - `Vue.component()` 전역함수로 컴포넌트를 등록한다.

![이미지](./readme-img/스크린샷%202023-01-08%20오후%208.26.55.png)
인스턴스를 생성하면 기본적으로 Root 컴포넌트가 된다.  
최상위 컴포넌트 - Root
자식 컴포넌트 - Appheader, Appcontent

### 3-4. 지역 컴포넌트 등록
서비스를 만들 때 가장 많이 사용하는 컴포넌트 등록 방식  
```javascript
new Vue({
    el: '#app', 
    // 지역 컴포넌트 등록 방식
    // {} : 객체 표기법이고 정확한 명칭은 객체 리터럴. 객체 기호라고 보면 된다
    components: { //원어민 입장에서 여러개 들어간 것은 s가 붙는다
        //'컴포넌트 이름' : 컴포넌트 내용
        'app-footer' : {
            template: '<footer>Footer</footer>'
        }
    }
});
```

### 3-5. 전역 컴포넌트와 지역 컴포넌트의 차이점
전역 컴포넌트 Vue.component()   
: 플러그인이라 라이브러리 형태로 전역으로 사용해야하는 컴포넌트를 등록.

지역 컴포넌트 componetns: {}  
: 서비스 구현할 때 사용. 특정 컴포넌트 하단에 어떤 컴포넌트가 등록됐는지 알 수 있다.

### 3-6. 컴포넌트와 인스턴스와의 관계
```html
<div id="app">
    <app-header></app-header>
    <app-footer></app-footer>
</div>

<div id="app2">
    <app-header></app-header>
    <app-footer></app-footer>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    // 전역 컴포넌트 - 모든 인스턴스에 등록이 되어있다. 전 영역에서 사용 가능
    Vue.component('app-header', { 
        template: '<h1>Header</h1>'
    });

    new Vue({
        el: '#app', 
        // 지역 컴포넌트 - 인스턴스 마다 새로 생성해야 함.
        components: {
            'app-footer' : {
                template: '<footer>Footer</footer>'
            }
        }
    });
    
    new Vue({
        el : '#app2',
    })
</script>
```
![이미지](./readme-img/스크린샷%202023-01-08%20오후%209.19.57.png)
`[Vue warn]: Unknown custom element: <app-footer>`  
: app-footer 컴포넌트는 #app 지역 컴포넌트로 등록했기 때문에 #app2에는 적용되지 않는다.

## 4. 컴포넌트 통신 방법 - 기본
### 4-1. 컴포넌트 통신
<https://joshua1988.github.io/vue-camp/vue/components-communication.html>
![이미지](./readme-img/스크린샷%202023-01-08%20오후%209.40.05.png)
컴포넌트간의 관계가 생긴다 = 규칙이 생긴다  
컴포넌트는 데이터를 각각 관리하는데, 컴포넌트간의 데이터를 주고받기 위해서 규칙을 따라야한다.
- 상위에서 하위로는 데이터를 내려줌, 프롭스 속성
- 하위에서 상위로는 이벤트를 올려줌, 이벤트 발생

### 4-2. 컴포넌트 통신 규칙이 필요한 이유

![이미지](./readme-img/스크린샷%202023-01-08%20오후%209.46.36.png)
AppHeader->LoginFrom->AppFooter->NavigationBar  
N 방향 통신 : 특정 컴포넌트 변화에 따라서 나머지 컴포넌트가 유기적으로 데이터를 주고받았을 때 데이터의 방향을 예측하기 어렵다. 

![이미지](./readme-img/스크린샷%202023-01-08%20오후%209.48.06.png)
컴포넌트 통신방식이라는 규칙이 생겼을 때 데이터의 흐름을 추적할 수 있다.

### 4-3. props 속성
### 4-4. props 속성의 특징
### 4-5. [실습 안내]props 속성 실습
### 4-6. [실습 풀이]props 속성 실습 풀이
<https://joshua1988.github.io/vue-camp/vue/props.html>  
`v-bind`
```html
<div id="app">
    <app-header v-bind:props="message"></app-header>
    <app-content v-bind:props="num"></app-content>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var appHeader = { //카멜케이스 네이밍
        template : '<h1>{{props}}</h1>', // Root에서 수정하면 바뀐다
        props: ['props']
    }

    var appContent = { 
        template : '<h1>{{props}}</h1>', 
        props: ['props']
    }

    new Vue({
        el: '#app',
        components : {
            'app-header' : appHeader
        },
        data : {
            message : 'hi' ,
            num : 10
        }
    })
</script>
```
`<하위컴포넌트 v-bind:props 속성 명="상위 컴포넌트 data 속성"></하위컴포넌트>` 
`new Vue({components : {'컴포넌트 이름' :{props : ['props 속성 명']}}})` 


### 4-7. event emit
### 4-8. event emit으로 콘솔 출력하기
<https://joshua1988.github.io/vue-camp/vue/event-emit.html#%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A6%E1%86%AB%E1%84%90%E1%85%B3-%E1%84%87%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A2%E1%86%BC-%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-%E1%84%92%E1%85%A7%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8>  
`v-on`

<playground/event-emit.html>
```html
<div id="app">
    <!-- <app-header v-on:하위 컴포넌트 이벤트="상위 컴포넌트 메서드"></app-header> -->
    <app-header v-on:pass="logText"></app-header>
</div>
```

```javascript
var appHeader = {
    template: '<button v-on:click="passEvent">click me</button>',
    methods:{
        passEvent:function(){
            this.$emit('pass');
        }
    }
}
new Vue({
    el: '#app',
    components: {
        'app-header' : appHeader
    },
    methods: {
        logText : function(){
            console.log('h1')
        }
    }
})
```

![이미지](./readme-img/스크린샷%202023-01-08%20오후%2011.05.38.png)
![이미지](./readme-img/스크린샷%202023-01-08%20오후%2011.56.20.png)
click을 하면 passEvent 함수가 실행되고, passEvent 함수는 $emit으로 pass 이벤트를 발생시켰다.  
상위 컴포넌트에 logText 메서드를 생성하고, 하위 컴포넌트 이벤트 pass와 연결하였다.  
click->passEvent함수실행->pass이벤트발생->logText메서드실행

### 4-11. 뷰 인스턴스에서 this
[this 관련 글 1](https://www.w3schools.com/js/js_this.asp)  
[this 관련 글 2](https://betterprogramming.pub/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)

객체 안에서 다른 속성을 가르킬 때  
![이미지](./readme-img/스크린샷%202023-05-08%20오후%2010.34.20.png)

메서드 속성 함수 안에서 this는 해당 data 속성으 가르킨다  
data에 선언을 했지만 바깥 레벨로 나와있다.  
this.num 은 data의 num 속성이다.
![이미지](readme-img/스크린샷%202023-05-08%20오후%2010.40.05.png)
![이미지](readme-img/스크린샷%202023-05-08%20오후%2010.41.19.png)

## 5. 컴포넌트 통신 방법 - 응용
### 5-1. 같은 컴포넌트 레벨 간의 통신 방법
![이미지](./readme-img/스크린샷%202023-05-08%20오후%2010.48.55.png)

### 5-2. 같은 컴포넌트 레벨 간의 통신 방법 구현 1

## 7. HTTP통신 라이브러리 - axios 
