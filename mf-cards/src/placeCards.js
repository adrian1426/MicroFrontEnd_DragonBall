import { createApp } from 'vue';

import Cards from './components/Cards.vue';

export default function placeCard(element) {
  createApp(Cards).mount(element);
}