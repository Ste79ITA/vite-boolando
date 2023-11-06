<script>
export default {
  data() {
    return {
      message: 'TEST',
      nav: ['Donna', 'Uomo', 'Bambini'],
      logo: '/public/img/boolean-logo.png',
      icons: [
        '/img/icons/header/icons8-user-24.png',
        '/img/icons/header/icons8-heart-24.png',
        '/img/icons/header/icons8-shopping-bag-24.png',
      ],
    };
  },
};
</script>
<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">{{ nav[0] }}</a>
          </li>
          <li>
            <a href="#">{{ nav[1] }}</a>
          </li>
          <li>
            <a href="#">{{ nav[2] }}</a>
          </li>
        </ul>
      </nav>
      <img :src="logo" alt="Logo" />
      <div>
        <ul>
          <li><img :src="icons[0]" alt="" /></li>
          <li><img :src="icons[1]" alt="" /></li>
          <li>
            <img :src="icons[2]" alt="" />
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

header {
  @include flex;
  justify-content: space-around;
  background-color: $main-color;
  align-items: center;
}

nav ul,
header div ul {
  padding: 20px;
  @include flex;
}

header nav ul li a,
header div ul li {
  text-decoration: none;
  color: white;
  padding-left: 5px;
}

header ul li img {
  width: auto;
  height: 20px;
}

header img {
  width: auto;
  height: 30px;
}
</style>
