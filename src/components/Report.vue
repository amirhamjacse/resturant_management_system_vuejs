<template>
  <div class="container-fluid mt-5">
    <div class="text-center">
      <h5 class="fw-bold mb-4">Restaurant Reports</h5>
      <!-- Row for charts -->
      <div class="row">
        <!-- Bar Chart Column -->
        <div class="col-md-6 mb-4">
          <div class="card shadow-lg">
            <div class="card-body">
              <h5 class="card-title">Orders by Category</h5>
              <div class="chart-container">
                <BarChart :data="barChartData" :options="chartOptions" />
              </div>
            </div>
          </div>
        </div>

        <!-- Pie Chart Column -->
        <div class="col-md-6 mb-4">
          <div class="card shadow-lg">
            <div class="card-body">
              <h5 class="card-title">Menu Item Distribution</h5>
              <div class="chart-container">
                <PieChart :data="pieChartData" :options="chartOptions" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bar, Pie } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from "chart.js";

// Registering required Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

export default {
  name: "Report",
  components: {
    BarChart: Bar,
    PieChart: Pie,
  },
  data() {
    return {
      // Data for Bar Chart (Orders by Category)
      barChartData: {
        labels: ["Starters", "Main Course", "Desserts", "Drinks"],
        datasets: [
          {
            label: "Orders",
            data: [120, 200, 150, 90], // Replace with dynamic data
            backgroundColor: "#007bff",
            borderColor: "#007bff",
            borderWidth: 1,
          },
        ],
      },
      // Data for Pie Chart (Menu Item Distribution)
      pieChartData: {
        labels: ["Vegan", "Non-Vegan", "Drinks", "Snacks"],
        datasets: [
          {
            data: [40, 35, 15, 10], // Replace with dynamic data
            backgroundColor: ["#ff6347", "#32cd32", "#ffeb3b", "#ff9800"],
            hoverOffset: 4,
          },
        ],
      },
      // Chart options
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.chart-container {
  height: 400px; /* Adjust to desired height */
  position: relative;
}

canvas {
  width: 100%;
  height: 100%;
}

canvas {
  width: 100% !important;
  height: 100% !important;
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: contain;  /* Ensures the chart fits within the container */
}
</style>
