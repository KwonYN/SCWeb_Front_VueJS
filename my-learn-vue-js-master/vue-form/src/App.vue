<template>
  <form v-on:submit.prevent="submitForm"> <!-- .prevent: 이벤트 모디파이어 -->
    <div>
      <!-- label 태그: 어떤 태그를 위한 레이블인지? 
      → for이 username인데, input의 id도 username. 즉, id가 username인 태그를 위한 레이블이라는 뜻!
      → label과 input은 한 쌍이 됨! label을 클릭했을 때 input에 자동적으로 포커싱이 간다고 함(?) -->
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
      <!-- two-way data-binding : 
      input에 있는 내용을 v-model을 이용해서 username을 연결하면,
      input에 있는 내용이 입력될 때마다 username에 반영이 되고, 
      그 username이 화면에 그대로 연결해줌 -->
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
    <!-- 여기에 있는 button에서 이벤트가 발생되면 
    상위 컴포넌트인 form에서 받는 구조.
    그래서 form 태그에서 v-on:이벤트 이름="메서드 이름"
    → button 태그에서 type="이벤트 이름"이었나봄!! -->
  </form>
  <!-- form의 기본 동작은 새로고침!! (즉, 어떠한 행동을 하고 해당 페이지로 감)
  메서드가 바인딩되어 있지 않으면 그냥 새로고침,
  바인딩되어 있으면 그 메서드 실행 후 바로 새로고침! -->
</template>

<script>
// 써드 파티 라이브러리 설치? : npm install axios
// 그 라이브러리 사용? (아래)
import axios from 'axios';

export default {
  data: function() {
    return {
      username: '', // String
      password: '',
    }
  },
  methods: {
    submitForm: function() {
      // form 태그의 이동(새로운 페이지) 및 새로고침을 막음
      // event.preventDefault();
      // Vanilla JS, jQueyr에서 form을 제어하는 방식 → Vue에서는 이벤트 모디파이어 사용
      console.log("id: ",this.username, " / pw: ",this.password);

      // 이전에 axios 강의 부분에서 작성했던 이것과 동일!
      // axios.get('https://jsonplaceholder.typicode.com/users/')
      //   .then(function(response) {
      //     console.log(this);	// 이 안에서의 this는 비동기 처리를 하면서 자연스레 실행 컨텍스트가 바뀌면서 다른 놈이 됨
      //     console.log(response.data);
      //     vm.users = response.data;
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>

<style>

</style>