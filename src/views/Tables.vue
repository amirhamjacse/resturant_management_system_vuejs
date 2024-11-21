<template>
    <div class="container mt-4">
      <!-- Page Title -->
      <div class="text-center mb-5">
        <h1 class="fw-bold">Table Management</h1>
        <p class="text-muted">Manage table statuses and reservations with ease.</p>
      </div>
  
      <!-- Table Layout -->
      <div class="row g-4">
        <div 
          class="col-md-4 col-sm-6 col-12" 
          v-for="table in tables" 
          :key="table.id"
        >
          <div
            class="card text-center shadow-sm"
            :class="{
              'bg-success text-white': table.status === 'Free',
              'bg-warning text-white': table.status === 'Reserved',
              'bg-danger text-white': table.status === 'Occupied',
            }"
          >
            <div class="card-body">
              <h5 class="card-title">Table {{ table.number }}</h5>
              <p class="card-text">Status: {{ table.status }}</p>
              <div class="mt-3">
                <button
                  class="btn btn-light btn-sm me-2"
                  @click="reserveTable(table)"
                  v-if="table.status === 'Free'"
                >
                  <i class="bi bi-person-plus"></i> Reserve
                </button>
                <button
                  class="btn btn-danger btn-sm"
                  @click="clearTable(table)"
                  v-if="table.status !== 'Free'"
                >
                  <i class="bi bi-x-circle"></i> Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tables: [
          { id: 1, number: 1, status: 'Free' },
          { id: 2, number: 2, status: 'Reserved' },
          { id: 3, number: 3, status: 'Occupied' },
          { id: 4, number: 4, status: 'Free' },
          { id: 5, number: 5, status: 'Reserved' },
          { id: 6, number: 6, status: 'Occupied' },
        ],
      };
    },
    methods: {
      reserveTable(table) {
        table.status = 'Reserved';
      },
      clearTable(table) {
        table.status = 'Free';
      },
    },
  };
  </script>
  
  <style>
  .card {
    border-radius: 10px;
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-title {
    font-size: 1.5rem;
  }
  </style>
  