<template>
    <div class="container mt-4">
      <!-- Page Title -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="fw-bold">Menu Management</h1>
        <button class="btn btn-primary" @click="showAddModal = true">
          <i class="bi bi-plus-circle"></i> Add Item
        </button>
      </div>
  
      <!-- Menu Table -->
      <div class="card shadow-sm border-0">
        <div class="card-body">
          <table class="table table-striped table-hover">
            <thead class="table-primary">
              <tr>
                <th>#</th>
                <th>Dish Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in menuItems" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.price }}</td>
                <td>
                  <button class="btn btn-sm btn-warning me-2" @click="editItem(item)">
                    <i class="bi bi-pencil"></i> Edit
                  </button>
                  <button class="btn btn-sm btn-danger" @click="deleteItem(item.id)">
                    <i class="bi bi-trash"></i> Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <!-- Add/Edit Modal -->
      <div class="modal" tabindex="-1" v-if="showAddModal || showEditModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ showEditModal ? 'Edit Item' : 'Add New Item' }}</h5>
              <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="showEditModal ? updateItem() : addItem()">
                <div class="mb-3">
                  <label class="form-label">Dish Name</label>
                  <input type="text" class="form-control" v-model="formData.name" required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Category</label>
                  <input type="text" class="form-control" v-model="formData.category" required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Price</label>
                  <input type="number" class="form-control" v-model="formData.price" required />
                </div>
                <button type="submit" class="btn btn-primary w-100">
                  {{ showEditModal ? 'Update' : 'Add' }}
                </button>
              </form>
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
        menuItems: [
          { id: 1, name: 'Spaghetti', category: 'Main Course', price: 12 },
          { id: 2, name: 'Caesar Salad', category: 'Starter', price: 8 },
          { id: 3, name: 'Cheesecake', category: 'Dessert', price: 6 },
        ],
        showAddModal: false,
        showEditModal: false,
        formData: { id: null, name: '', category: '', price: null },
      };
    },
    methods: {
      addItem() {
        const newItem = { ...this.formData, id: Date.now() };
        this.menuItems.push(newItem);
        this.closeModal();
      },
      editItem(item) {
        this.formData = { ...item };
        this.showEditModal = true;
      },
      updateItem() {
        const index = this.menuItems.findIndex((item) => item.id === this.formData.id);
        if (index !== -1) {
          this.menuItems.splice(index, 1, { ...this.formData });
        }
        this.closeModal();
      },
      deleteItem(id) {
        this.menuItems = this.menuItems.filter((item) => item.id !== id);
      },
      closeModal() {
        this.showAddModal = false;
        this.showEditModal = false;
        this.formData = { id: null, name: '', category: '', price: null };
      },
    },
  };
  </script>
  
  <style>
  .card {
    border-radius: 10px;
  }
  .modal {
    display: block;
    background: rgba(0, 0, 0, 0.5);
  }
  .modal-dialog {
    margin-top: 10%;
  }
  </style>
  