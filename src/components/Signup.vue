<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow-lg">
            <div class="card-body">
              <h5 class="card-title text-center">Sign Up</h5>
              <form @submit.prevent="registerUser">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" v-model="username" class="form-control" id="username" required />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" v-model="password" class="form-control" id="password" required />
                </div>
                <div class="mb-3">
                  <label for="confirmPassword" class="form-label">Confirm Password</label>
                  <input type="password" v-model="confirmPassword" class="form-control" id="confirmPassword" required />
                </div>
                <button type="submit" class="btn btn-success w-100">Sign Up</button>
              </form>
              <p class="text-center mt-3">Already have an account? <router-link to="/login">Login</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "Signup",
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      async registerUser() {
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
  
        try {
          const response = await axios.post('http://your-backend-api-url/api/register/', {
            username: this.username,
            password: this.password,
          });
          this.$router.push('/login'); // Redirect to login after successful registration
        } catch (error) {
          alert('Sign up failed! Please try again.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add some basic styling */
  </style>
  