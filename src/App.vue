<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <header>
      <h1>Membros Hackathon</h1>
      <nav>
        <RouterLink to="/Equipe" class="button">Equipe</RouterLink>
      </nav>
    </header>
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 400%;
  text-align: left;
  padding: 2%;
  padding-bottom: 0px;
}
.wrapper {
  display: flex;
  flex-direction:column;
  background-color: cornsilk;
  align-content: center;
}
nav .button{
  background-color: aliceblue;
  margin: 3%;
  margin-top: 0%;
  text-decoration: none;
}

h1{
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 400%;
  text-align: left;
  padding: 2%;
  padding-bottom: 0px;
 
}

header{
  background-color: rgb(124, 124, 124);
  color: white;
}

nav{
  color: rgb(5, 0, 0);
  text-align: left;
  margin-top: 0%;
  padding-bottom: 3%;
  margin-left: 2%;
  padding-top: 1%;
}
</style>
