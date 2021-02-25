<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 컴포넌트 등록 -->
    <hello-world></hello-world> <!-- 공식 스타일 가이드... VSCode에서 이거 쓰는게 좋다는데? -->
    <HelloWorld msg="Welcome to Your Vue.js App"/> <!--파스칼케이스-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

// new Vue ({
//   name: 'App',
//   components: {
//     'hello-world': HelloWorld
//   }
// });
export default {
  // 인스턴스 or 컴포넌트 옵션 속성을 넣어주면 됨!
  name: 'App',
  components: {
    HelloWorld, // 'hello-world': HelloWorld
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