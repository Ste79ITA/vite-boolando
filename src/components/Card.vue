<script>
export default {
  data() {
    return { mouseOver: false };
  },
  props: {
    item: {
      type: Object,
      //   required: true,
      default: {},
    },
  },
  methods: {
    showImg() {
      this.mouseOver = !this.mouseOver;
    },
  },
  components: {},
};
</script>
<template>
  <div class="card">
    <img class="second-img" :src="/img/ + item.backImage" alt="" />
    <img
      :class="{ showSecondImage: this.mouseOver }"
      @mouseenter="showImg()"
      @mouseleave="showImg()"
      :src="/img/ + item.frontImage"
      alt=""
    />
    <div class="hearts" :class="{ favorite: item.isInFavorites }">&hearts;</div>
    <div class="label">
      <span class="discount">Discount</span>
      <span class="discount green">sostenibilità</span>
    </div>
    <ul>
      <li>{{ item.brand }}</li>
      <li>{{ item.name }}</li>
      <li>
        <span>19.90 €</span> <span> {{ item.price }} €</span>
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

.showSecondImage {
  opacity: 0;
}
</style>
