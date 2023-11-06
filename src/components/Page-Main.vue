<script>
export default {
  data() {
    return { message: 'TEST' };
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="row">
        <!-- CARD 1 -->
        <div class="card">
          <img class="second-img" src="/img/1b.webp" alt="" />
          <img src="/img/1.webp" alt="" />
          <div class="hearts">&hearts;</div>
          <div class="label">
            <span class="discount">-50%</span>
            <span class="discount green">Sostenibilità</span>
          </div>
          <ul>
            <li>Levi's</li>
            <li>RELAXED FIT TEE UNISEX</li>
            <li><span>14.99 €</span><span> 29.99 €</span></li>
          </ul>
        </div>
        <!-- CARD 2 -->
        <div class="card">
          <img class="second-img" src="/img/2b.webp" alt="" />
          <img src="/img/2.webp" alt="" />
          <div class="hearts">&hearts;</div>
          <div class="label">
            <span class="discount">-50%</span>
          </div>
          <ul>
            <li>Guess</li>
            <li>ROSES TEE</li>
            <li><span>20,99 €</span><span> 29,99 €</span></li>
          </ul>
        </div>
        <!-- CARD 3 -->
        <div class="card">
          <img class="second-img" src="/img/3b.webp" alt="" />
          <img src="/img/3.webp" alt="" />
          <div class="hearts">&hearts;</div>
          <div class="label">
            <span class="discount">-50%</span>
          </div>
          <ul>
            <li>Come Zucchero Filato</li>
            <li>VOGLIA DI COLORI PASTELLO</li>
            <li><span>129,99 €</span><span> 184,99 €</span></li>
          </ul>
        </div>
        <div class="card">
          <!-- CARD 4 -->
          <img class="second-img" src="/img/4b.webp" alt="" />
          <img src="/img/4.webp" alt="" />
          <div class="hearts">&hearts;</div>
          <div class="label">
            <span class="discount">-50%</span>
            <span class="discount green">Sostenibilità</span>
          </div>
          <ul>
            <li>Levi's</li>
            <li>TEE UNISEX</li>
            <li><span>14,99 €</span><span> 22,99 €</span></li>
          </ul>
        </div>
        <!-- CARD 5 -->
        <div class="card">
          <img class="second-img" src="/img/5b.webp" alt="" />
          <img src="/img/5.webp" alt="" />
          <div class="hearts">&hearts;</div>
          <ul>
            <li>Maya Deluxe</li>
            <li>STRIPE BODICE</li>
            <li><span>22,99 €</span></li>
          </ul>
        </div>
        <div class="card">
          <!-- CARD 6 -->
          <img class="second-img" src="/img/6b.webp" alt="" />
          <img src="/img/6.webp" alt="" />
          <span class="hearts">&hearts;</span>
          <div class="label">
            <span class="discount green">Sostenibilità</span>
          </div>
          <ul>
            <li>Esprit</li>
            <li>MAGLIONE - BLACK</li>
            <li><span>29,99 €</span></li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

/* HEARTS */
.hearts {
  position: absolute;
  display: inline-block;
  background-color: white;
  padding: 10px 13px;
  top: 8px;
  right: 0px;
  font-size: 15px;

  &:hover {
    color: $red-color;
  }
}

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

/* LABELS */

.label {
  position: absolute;
  display: inline-block;
  left: 0px;
  bottom: 15%;
  color: white;
}
.discount {
  background-color: $red-color;
  padding: 3px 5px;
}

.green {
  background-color: $green-color;
}
</style>
