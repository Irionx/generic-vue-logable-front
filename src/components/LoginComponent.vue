<template>
  <div>
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="login">
      <label for="username">Nombre de Usuario:</label>
      <input type="text" id="username" v-model="username" required>

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="password" required autocomplete="current-password">


      <button type="submit">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
import authService from '../services/authService';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      authService.login(this.username, this.password)
        .then(() => {
          console.log('Token de autenticación recibido:');
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          console.error('Error de inicio de sesión:', error);
        });
    },
  },
};
</script>

<style scoped>
div {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>