<script>
export default {
  data() {
    return {
      message: 'TEST',
      nav1: 'Donna',
      nav2: 'Uomo',
      nav3: 'Bambini',
      logo: '/public/img/boolean-logo.png',
      user: '/img/icons/header/icons8-user-24.png',
      heart: '/img/icons/header/icons8-heart-24.png',
      cart: '/img/icons/header/icons8-shopping-bag-24.png',
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
            <a href="#">{{ nav1 }}</a>
          </li>
          <li>
            <a href="#">{{ nav2 }}</a>
          </li>
          <li>
            <a href="#">{{ nav3 }}</a>
          </li>
        </ul>
      </nav>
      <img :src="logo" alt="Logo" />
      <div>
        <ul>
          <li><img :src="user" alt="" /></li>
          <li><img :src="heart" alt="" /></li>
          <li>
            <img :src="cart" alt="" />
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

header {
  display: flex;
  justify-content: space-around;
  background-color: $main-color;
  align-items: center;
}

nav ul,
header div ul {
  padding: 20px;
  display: flex;
  list-style: none;
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
