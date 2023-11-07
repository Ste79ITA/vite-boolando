<script>
export default {
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
<template>
  <div class="card">
    <img class="second-img" :src="item.backImage" alt="" />
    <img :src="item.frontImage" alt="" />
    <div class="hearts" :class="{ favorite: item.isInFavorites }">&hearts;</div>
    <div class="label">
      <span class="discount">discount</span>
      <span class="discount green">sostenibilità</span>
    </div>
    <ul>
      <li>{{ item.brand }}</li>
      <li>{{ item.name }}</li>
      <li>
        <span>14.99 €</span><span> {{ item.price }} €</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

/* DESCRIPTIONS */

.card {
  ul {
    list-style: none;
    li {
      &:nth-child(odd) {
        color: $grey-color;
        font-size: 13px;
      }
      &:last-child :nth-child(odd) {
        color: $red-color;
      }
    }
  }
}

/* HEARTS */
.hearts {
  @include absolute;
  background-color: white;
  padding: 10px 13px;
  top: 8px;
  right: 0px;
  font-size: 15px;
}

.favorite {
  color: $red-color;
}
/* LABELS */

.label {
  @include absolute;

  left: 0px;
  bottom: 15%;
  color: $white-color;
}
.discount {
  background-color: $red-color;
  padding: 3px 5px;
}

.green {
  background-color: $green-color;
}
</style>
