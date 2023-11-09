<script>
import Card from './Card.vue';
import { store } from '../store.js';

export default {
  data() {
    return { showModal: false, selectedItem: {} };
  },
  components: {
    Card,
  },
  methods: {
    openModal(item) {
      this.showModal = true;
      this.selectedItem = item;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  computed: {
    cards: function () {
      return store.db;
    },
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="row">
        <!-- CARD  -->
        <div class="card" v-for="(card, i) in cards" key="card.id">
          <Card :item="card" @displayModal="openModal" />
        </div>
      </div>
    </div>
    <div @click="closeModal()" v-if="showModal" class="overlay">
      <div class="modal">
        <div class="close-modal-btn" @click="closeModal()">
          <font-awesome-icon icon="fa-regular fa-circle-xmark" />
        </div>
        <div class="modal-title">
          <div class="modal-img">
            <img :src="/img/ + this.selectedItem.frontImage" alt="" />
          </div>
          <div class="modal-content">
            <h4>{{ this.selectedItem.brand }}</h4>
            <h2>{{ this.selectedItem.name }}</h2>
            <p>{{ this.selectedItem.price }} €</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $white-color;
  width: 100%;
  max-width: 500px;
  z-index: 2;
  border-radius: 10px;
  padding: 30px;

  .modal-title {
    @include flex;
    align-items: center;
  }

  .modal-img {
    width: 100%;
    max-width: 200px;
  }
  .modal-content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-left: 40px;
  }
  .close-modal-btn {
    text-align: end;
    font-size: 25px;
    margin-top: -20px;
  }
}

.overlay::before {
  content: ' ';
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 1;
}
.close-modal-btn {
  cursor: pointer;
}
</style>
