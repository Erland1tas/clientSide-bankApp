<template>
  <MainBackground>
    <div class="vertical-center">
      <form @submit.prevent="createAccount">
        <div class="email-section">
          <label>Email</label>
          <input type="text" v-model.trim="email" />
          <div class="email error">{{ emailErr }}</div>
        </div>
        <div class="password-section">
          <label>Password</label>
          <input type="text" v-model.trim="password" />
          <div class="password error">{{ passwordErr }}</div>
        </div>
        <button class="create-button">Create Account</button>
      </form>
      <router-link to="/login">Have an account already</router-link>
    </div>
  </MainBackground>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      emailErr: '',
      passwordErr: ''
    }
  },
  methods: {
    async createAccount() {
      this.emailErr = ''
      this.passwordErr = ''
      try {
        const res = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email, password: this.password })
        })
        const data = await res.json()
        if (data.error) {
          this.emailErr = data.error.email
          this.passwordErr = data.error.password
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

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
.create-button {
  padding: 9px 22px;
}
.vertical-center a {
  color: rgb(149, 21, 21);
}
</style>
