<!-- 규칙: <template> root 무조건 하나의 element만 있어야 함!!! -->
<template>
  <div>
      <!-- v-bind:props 속성 이름="상위 컴포넌트 데이터 이름" -->
    <app-header 
    v-bind:propsdata="str"
    v-on:renew="renewStr"></app-header>
  </div>
  <!-- <div>
      The template root requires exactly one element.
  </div> -->
</template>

<script>
import AppHeader2 from './components/AppHeader2.vue';

// 기존엔 이렇게 템플릿을 변수로 선언해서 넣어주었지만,
// 이제는 파일 자체를 들고 와서 연결해주는 것이기에 파일의 경로를 import해야 함!
// var AppHeader = {
//   template: '<header><h1>Hi, I am AppHeader</h1></header>',
//   props: ['propsdata']
// }

// new Vue({
//   data: {
//     str: 'hi'
//   },
//    components: {
//        'app-header': AppHeader2
//    },
//    methods: {
//        renewStr: function() {
//            this.str = 'Hello~ I am App';
//        }
//    }
// }); 

export default {
    data: function() { // 기존까지 해왔던 방식인 위의 내용과 같은 의미!
        return {
            str: 'Hi~ I am App'
        }
    },
    components: {
        'app-header': AppHeader2
    },
    methods: {
        renewStr: function() {
            this.str = 'Hello~ I am App';
        }
    }
}
</script>

<style>

</style>