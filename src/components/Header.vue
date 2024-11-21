<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-primary shadow-sm py-3">
      <div class="container">
        <!-- Branding -->
        <a class="navbar-brand fw-bold fs-3" href="#">
          <i class="bi bi-shop-window me-2"></i>Restaurant Manager
        </a>

        <!-- Toggle Button for Mobile View -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/menu">Menu Management</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/tables">Table Management</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/orders">Order Placement</router-link>
            </li>
          </ul>
          <!-- User Profile Dropdown -->
          <div class="dropdown ms-3">
            <button
              class="btn btn-light dropdown-toggle"
              type="button"
              id="userMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-circle"></i> Admin
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item text-danger" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.bg-gradient-primary {
  background: linear-gradient(90deg, #007bff, #0056b3);
}
.navbar-brand i {
  font-size: 1.5rem;
}
</style>
