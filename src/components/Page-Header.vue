<script>
export default {
  data() {
    return { message: 'TEST' };
  },
};
</script>
<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><a href="#">Donna</a></li>
          <li><a href="#">Uomo</a></li>
          <li><a href="#">Bambini</a></li>
        </ul>
      </nav>
      <img src="./img/boolean-logo.png" alt="Logo" />
      <div>
        <ul>
          <li><img src="./img/icons/header/icons8-user-24.png" alt="" /></li>
          <li><img src="./img/icons/header/icons8-heart-24.png" alt="" /></li>
          <li>
            <img src="./img/icons/header/icons8-shopping-bag-24.png" alt="" />
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-around;
  background-color: rgb(237, 114, 46);
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
