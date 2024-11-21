import axios from 'axios';

const API_URL = 'http://localhost:8000/api/token/';  // Change to your backend URL

// Login function to get the token
export const login = (credentials) => {
  return axios
    .post(API_URL, credentials)
    .then(response => {
      // Store the token in localStorage or a Vuex store
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      return response.data;
    });
};

// Logout function
export const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
};

// Check if the user is logged in
export const isAuthenticated = () => {
  const token = localStorage.getItem('access_token');
  return token !== null;
};
