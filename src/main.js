import { createApp } from 'vue';
// import './style.css'
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faUser,
  faHeart,
  faCircleXmark,
} from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faUser,
  faHeart,
  faBagShopping,
  faCircleXmark,
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
  faYoutube
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
