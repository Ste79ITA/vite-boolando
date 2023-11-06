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
            <li><img src="/img/icons/icons8-twitter.svg" alt="" /></li>
            <li><img src="/img/icons/icons8-facebook.svg" alt="" /></li>
            <li><img src="/img/icons/icons8-instagram.svg" alt="" /></li>
            <li><img src="/img/icons/icons8-pinterest-30.svg" alt="" /></li>
            <li><img src="/img/icons/icons8-youtube-30.svg" alt="" /></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-around;
  align-content: center;
  gap: 800px;
  padding: 20px 0;
  background-color: black;
  color: white;
}

footer ul {
  display: flex;
  list-style: none;
  padding: 5px 0;
}

footer ul li {
  padding-right: 10px;
}

footer ul li a {
  text-decoration: none;
  color: white;
  font-size: 12px;
}

footer img {
  width: auto;
  height: 20px;
}
</style>
