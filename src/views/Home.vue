<template>
  <div class="container mt-5">
    <div class="text-center">
      <!-- Carousel Component -->
      <Carousel />

      <!-- Statistics Section -->
      <div class="row mt-5">
        <div class="col-12 col-md-4">
          <div class="card bg-primary text-white shadow-lg">
            <div class="card-body">
              <h5 class="card-title">Total Orders</h5>
              <p class="card-text fs-2">{{ totalOrders }}</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card bg-success text-white shadow-lg">
            <div class="card-body">
              <h5 class="card-title">Active Tables</h5>
              <p class="card-text fs-2">{{ activeTables }}</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card bg-warning text-white shadow-lg">
            <div class="card-body">
              <h5 class="card-title">Menu Items</h5>
              <p class="card-text fs-2">{{ menuItems }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="d-flex justify-content-center mt-4">
        <router-link to="/menu" class="btn btn-primary mx-2 btn-lg" aria-label="Manage Menu">
          Manage Menu
        </router-link>
        <router-link to="/tables" class="btn btn-success mx-2 btn-lg" aria-label="Manage Tables">
          Manage Tables
        </router-link>
        <router-link to="/orders" class="btn btn-warning mx-2 btn-lg" aria-label="Place Orders">
          Place Orders
        </router-link>
      </div>
    
      <div class="mt-5">
        <Report />
      </div>
      
    </div>
  </div>
</template>

<script>
// Import the Carousel and Report components
import Carousel from '@/components/Carousel.vue';
import Report from '@/components/Report.vue';

export default {
  name: 'Home',
  components: {
    Carousel, // Register Carousel component
    Report,   // Register Report component
  },
  data() {
    return {
      // Dynamic statistics data (example values)
      totalOrders: 150,
      activeTables: 25,
      menuItems: 30,
    };
  },
};
</script>

<style scoped>
/* Add custom styles for the homepage */
.container {
  max-width: 1600px;
}

h1 {
  font-size: 3rem;
}

.card-body {
  text-align: center;
  padding: 2rem; /* Improved padding */
}

.card-title {
  font-size: 1.5rem;
}

.card-text {
  font-size: 2rem;
}

.btn {
  font-size: 1.2rem;
}

.shadow-lg {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
