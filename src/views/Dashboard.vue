<template>
  <div class="container mt-4">
    <!-- Page Title -->
    <div class="text-center mb-5">
      <h1 class="display-4 fw-bold">Restaurant Management Dashboard</h1>
      <p class="text-muted">Track your restaurant's performance at a glance.</p>
    </div>

    <!-- Summary Cards -->
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card shadow-sm border-0">
          <div class="card-body text-center">
            <h5 class="card-title fw-bold">Total Orders</h5>
            <p class="display-6 text-success">120</p>
            <p class="text-muted">Today</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-sm border-0">
          <div class="card-body text-center">
            <h5 class="card-title fw-bold">Reservations</h5>
            <p class="display-6 text-primary">35</p>
            <p class="text-muted">This Week</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-sm border-0">
          <div class="card-body text-center">
            <h5 class="card-title fw-bold">Revenue</h5>
            <p class="display-6 text-warning">$12,345</p>
            <p class="text-muted">This Month</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="mt-5">
      <h3 class="mb-4">Performance Overview</h3>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <h5 class="card-title">Sales Trends</h5>
              <canvas id="salesChart"></canvas>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <h5 class="card-title">Top Selling Dishes</h5>
              <canvas id="dishesChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'Dashboard',
  setup() {
    onMounted(() => {
      // Sales Chart
      const salesCtx = document.getElementById('salesChart').getContext('2d');
      new Chart(salesCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Revenue',
              data: [5000, 10000, 7500, 12000, 15000, 20000],
              borderColor: '#4caf50',
              tension: 0.4,
            },
          ],
        },
      });

      // Top Selling Dishes Chart
      const dishesCtx = document.getElementById('dishesChart').getContext('2d');
      new Chart(dishesCtx, {
        type: 'bar',
        data: {
          labels: ['Pizza', 'Burger', 'Pasta', 'Salad', 'Steak'],
          datasets: [
            {
              label: 'Orders',
              data: [50, 70, 40, 30, 60],
              backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4caf50', '#f44336'],
            },
          ],
        },
      });
    });
  },
};
</script>

<style>
.card {
  border-radius: 10px;
}

.card-title {
  font-size: 1.25rem;
}

.display-6 {
  font-weight: 700;
}

canvas {
  max-width: 100%;
  height: 300px;
}
</style>
