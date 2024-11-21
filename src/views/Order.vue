<template>
    <div class="container mt-4">
      <!-- Page Title -->
      <div class="text-center mb-5">
        <h1 class="fw-bold">Order Placement</h1>
        <p class="text-muted">Quickly take customer orders and assign them to tables.</p>
      </div>
  
      <!-- Order Form -->
      <div class="card shadow-sm border-0 mb-5">
        <div class="card-body">
          <form @submit.prevent="placeOrder">
            <div class="row g-3">
              <!-- Select Table -->
              <div class="col-md-6">
                <label class="form-label">Select Table</label>
                <select class="form-select" v-model="orderData.table" required>
                  <option disabled value="">Choose a table...</option>
                  <option v-for="table in tables" :key="table.id" :value="table.number">
                    Table {{ table.number }} ({{ table.status }})
                  </option>
                </select>
              </div>
  
              <!-- Add Items -->
              <div class="col-md-6">
                <label class="form-label">Select Menu Item</label>
                <select class="form-select" v-model="selectedItem">
                  <option disabled value="">Choose an item...</option>
                  <option v-for="item in menu" :key="item.id" :value="item">
                    {{ item.name }} - ${{ item.price }}
                  </option>
                </select>
                <button
                  class="btn btn-secondary mt-2 w-100"
                  :disabled="!selectedItem"
                  @click="addItem"
                >
                  Add Item
                </button>
              </div>
            </div>
  
            <!-- Order Summary -->
            <div v-if="orderData.items.length" class="mt-4">
              <h5>Order Summary</h5>
              <ul class="list-group">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center"
                  v-for="(item, index) in orderData.items"
                  :key="index"
                >
                  {{ item.name }}
                  <span>${{ item.price }}</span>
                </li>
              </ul>
              <div class="mt-3 text-end">
                <h6>Total: ${{ total }}</h6>
              </div>
            </div>
  
            <!-- Submit Order -->
            <button type="submit" class="btn btn-primary mt-4 w-100" :disabled="!orderData.items.length">
              Place Order
            </button>
          </form>
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
        ],
        menu: [
          { id: 1, name: 'Spaghetti', price: 12 },
          { id: 2, name: 'Caesar Salad', price: 8 },
          { id: 3, name: 'Cheesecake', price: 6 },
        ],
        selectedItem: null,
        orderData: {
          table: '',
          items: [],
        },
      };
    },
    computed: {
      total() {
        return this.orderData.items.reduce((sum, item) => sum + item.price, 0);
      },
    },
    methods: {
      addItem() {
        if (this.selectedItem) {
          this.orderData.items.push(this.selectedItem);
          this.selectedItem = null;
        }
      },
      placeOrder() {
        alert(`Order placed for Table ${this.orderData.table}. Total: $${this.total}`);
        // Reset order data
        this.orderData = { table: '', items: [] };
      },
    },
  };
  </script>
  
  <style>
  .card {
    border-radius: 10px;
  }
  .form-select {
    height: auto;
  }
  </style>
  