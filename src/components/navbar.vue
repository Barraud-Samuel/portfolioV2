<template>
  <div class="navbar">
    <div class="navbar__brandName">
      <img src="../assets/logo.png">
    </div>
    <nav class="navbar__nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  z-index: 3;
}
.navbar__nav {
  width: 20%;
  min-width: 300px;
  margin:  auto 0;
  ul{
    display: flex;
    justify-content: space-around;
    li a{
      text-decoration: none;
      color: #fff;
      font-family: 'Lato', sans-serif;
    }
  }
}
  .navbar__brandName{
    img{
      max-width: 60px;
    }
  }
</style>
