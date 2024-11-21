<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow-lg">
            <div class="card-body">
              <h5 class="card-title text-center">Login</h5>
              <form @submit.prevent="loginUser">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" v-model="username" class="form-control" id="username" required />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" v-model="password" class="form-control" id="password" required />
                </div>
                <button type="submit" class="btn btn-primary w-100">Login</button>
              </form>
              <p class="text-center mt-3">Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async loginUser() {
        try {
          const response = await axios.post('http://your-backend-api-url/api/token/', {
            username: this.username,
            password: this.password,
          });
          const token = response.data.access;
          localStorage.setItem('jwtToken', token); // Store the JWT in localStorage
          this.$router.push('/'); // Redirect to home page after successful login
        } catch (error) {
          alert('Login failed! Please check your credentials.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add some basic styling */
  </style>
  