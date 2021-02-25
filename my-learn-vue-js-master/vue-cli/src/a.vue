<!--
var appHeader = {
    template: '<div>header</div>',
    methods: {
        addNum: function() {
            // 메소드 구현
        }
    }
}

// 이 부분은 main.js에서!
new Vue({
    el: '#app',
    components: {
        'app-header': appHeader
    }
});
-->
<template>
    <!-- HTML -->
    <div>header</div>
</template>

<script>
export default {
    // Javascript - Vue 인스턴스 옵션
    methods: {
        addNum: function() {
            // 메소드 구현
        }
    }
}
</script>

<style>
    /* CSS */
</style>
