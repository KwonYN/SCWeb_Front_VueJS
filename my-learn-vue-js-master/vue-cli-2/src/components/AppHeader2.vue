<template>
  <header>
      <h1>{{ str }}, I am AppHeader. I got "{{ propsdata }}"!</h1>
      <button v-on:click="sendEvent">send event</button>
  </header>
</template>

<script>
export default {
    // 이 부분 아무 것도 작성을 하지 않으면 화면에 아무런 표시가 되지 않는걸??;;
    data: function() {
        return {
            str: 'Hi'
        }
    },
    props:['propsdata'],
    methods: {
        sendEvent: function() {
            this.$emit('renew');
        }
    }
}
</script>

<style>

</style>