import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 이거랑 비슷한 거구나~ 생각하면 됨!
// var App = {
// 	template: '<div>app</div>'
// }

// new Vue({
//     el : '#app',
//     components: {
//     	'app': App
// 	}
// })