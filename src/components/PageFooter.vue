<script>
export default {
  data() {
    return { message: 'TEST' };
  },
};
</script>
<template>
  <div>
    <footer>
      <div>
        Boolando s.r.l
        <ul>
          <li><a href="#">Informazioni legali</a></li>
          <li><a href="#">Informativa sulla privacy</a></li>
          <li><a href="#">Diritto di recesso</a></li>
        </ul>
      </div>
      <div>
        <div>
          Trovaci anche su
          <ul>
            <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
            <li><font-awesome-icon icon="fa-brands fa-facebook" /></li>
            <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
            <li><font-awesome-icon icon="fa-brands fa-pinterest" /></li>
            <li><font-awesome-icon icon="fa-brands fa-youtube" /></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;
footer {
  @include flex;
  justify-content: space-around;
  align-content: center;
  gap: 800px;
  padding: 20px 0;
  background-color: $black-color;
  color: $white-color;
}

footer ul {
  @include flex;
  padding: 5px 0;
}

footer ul li {
  padding-right: 10px;
}

footer ul li a {
  color: $white-color;
  font-size: 12px;
}

footer img {
  width: auto;
  height: 20px;
}
</style>
