# 문서
- [Vue.js 공식 문서](https://vuejs.org/guide/introduction.html)

- [Vue.js 스타일 가이드](https://v2.vuejs.org/v2/style-guide/?redirect=true)

- [Vue.js Cookbook](https://v2.vuejs.org/v2/cookbook/?redirect=true)

- [Vuex 공식 문서](https://v3.vuex.vuejs.org/)

- [VueRouter 공식 문서](https://v3.router.vuejs.org/)

- [Vue CLI 공식 문서](https://cli.vuejs.org/)

# 요약
- Reactivity : vue js가 추구하는 핵심기능. 데이터에 대한 변화를 vue에서 감지하여 화면에 반영하는 것.
- 인스턴스 : vue로 개발 할 떄 필수로 생성해야 하는 단위이자 실제로 인스턴스 안에 내용들을 추가하여 화면을 조작.
- 컴포넌트 : 화면의 영역을 구분하여 개발하는 방식. 컴포넌트로 개발을 했을 때 재사용성이 핵심.
- 컴포넌트 통신 : 컴포넌트로 개발을 했을 때 데이터 흐름을 제어하기 위한 규칙을 제한. 데이터 흐름을 예측할 수 있다.
  - props : 상위->하위
  - event emit : 하위->상위
- HTTP 통신 라이브러리 (axios) 
- 템플릿 문법 : 화면을 조작하기 위한 뷰의 문법들
  - 데이터 바인딩 : 리엑티비티와 비슷한 개념. 데이터 변화에 따라 화면에 반영해주는것이 리엑티비티, 화면에 엮어내는것이 데이터 바인딩.
  - 뷰 디렉티브 : 화면을 조작하기 위해서 뷰가 추가적으로 제공한는 문법. html 속성으로 이루어져있음(v-)
- Vue CLI : 프로젝트 생성 할 때 명령어로 생성
- 싱글 파일 컴포넌트 : .vue 파일