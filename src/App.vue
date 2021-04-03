<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/Buylist">Home</router-link> |
      <router-link to="/basket">Basket</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
@import './css/font.css';
#app {
  margin: 0 auto;
  width: 360px;
  background: #EEEEEE;
  padding-bottom:100px ;
}
/* =============================== < global class > =================================== */
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #9c9c9c;
  width: 100%;
  height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

.line {
  margin-top: 5%;
  width: 100%;
  height: 1px;
  background: #EEEEEE;
}
</style>
