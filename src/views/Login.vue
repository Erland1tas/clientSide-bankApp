import MainBackground from '../slots/MainBackground.vue';

<template>
  <MainBackground>
    <div class="vertical-center">
      <form>
        <div class="email-section">
          <label for="email">Email</label>
          <input type="text" />
          <div class="email error"></div>
        </div>
        <div class="password-section">
          <label for="password">Password</label>
          <input type="text" />
          <div class="password error"></div>
        </div>
        <button class="login-button">Login</button>
      </form>
      <router-link to="/signup">Create an account</router-link>
    </div>
  </MainBackground>
</template>

<style scoped>
.vertical-center {
  align-self: center;
  background-color: cadetblue;
  border-radius: 5px;
  width: 30%;
  padding: 30px 19px 10px;
}
.vertical-center form {
  margin-bottom: 20px;
}
.email-section,
.password-section {
  margin-bottom: 15px;
}
.email-section .error,
.password-section .error {
  height: 27px;
  color: rgb(211, 13, 122);
}
.email-section label,
.password-section label {
  display: block;
}
.email-section input,
.password-section input {
  width: 100%;
  height: 33px;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 3px 5px;
  font-size: 19px;
}
.login-button {
  padding: 9px 50px;
}
.vertical-center a {
  color: rgb(149, 21, 21);
}
</style>
