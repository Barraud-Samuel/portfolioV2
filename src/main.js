import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


// css
require('./assets/css/main.scss');

// custom js

const cursor = document.querySelector('.cursor');


document.body.onmousemove = function (e) {
  cursor.classList.add('is-moving');

  TweenLite.to(cursor, 0.2, {
    left: e.pageX,
    top: e.pageY,
    ease: Power4.easOut,
  });

  clearTimeout(timer);

  var timer = setTimeout(() => {
    cursor.classList.remove('is-moving');
  }, 300);
};
