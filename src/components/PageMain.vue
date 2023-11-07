<script>
import Card from './Card.vue';
import db from '../db.json';
export default {
  data() {
    return { cards: db.products };
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
