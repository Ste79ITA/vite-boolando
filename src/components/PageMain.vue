<script>
import Card from './Card.vue';
import { store } from '../store.js';

export default {
  data() {
    return { cards: store.db };
  },
  components: {
    Card,
  },
  mounted() {},
};
</script>
<template>
  <main>
    <div class="container">
      <div class="row">
        <!-- CARD  -->
        <div class="card" v-for="(card, i) in cards" key="card.id">
          <Card :item="card" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
