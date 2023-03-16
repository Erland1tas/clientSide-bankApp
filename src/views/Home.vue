import MainBackground from '../slots/MainBackground.vue';

<template>
  <MainBackground>
    <div class="intro">
      <h1>Bank Application</h1>
      <div class="links">
        <router-link to="/signup">Create an Account</router-link>
        <router-link to="/login">Login</router-link>
      </div>
    </div>
  </MainBackground>
</template>

<style scoped>
.intro {
  align-self: center;
}
.intro h1 {
  padding-bottom: 20px;
  font-size: 30px;
}
.intro .links {
  display: flex;
  justify-content: space-between;
}
.links a {
  color: black;
  background-color: aquamarine;
  padding: 10px;
  border-radius: 5px;
}
</style>
