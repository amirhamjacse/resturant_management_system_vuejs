<template>
  <footer class="footer bg-dark text-white py-5">
    <div class="container">
      <div class="row">
        <!-- About Section -->
        <div class="col-md-4 mb-4 mb-md-0">
          <h5 class="fw-bold text-uppercase mb-3">About Us</h5>
          <p class="text-muted">
            We help you manage your restaurant seamlessly. Track orders, menu items, and tables effortlessly.
          </p>
        </div>

        <!-- Quick Links Section -->
        <div class="col-md-4 mb-4 mb-md-0">
          <h5 class="fw-bold text-uppercase mb-3">Quick Links</h5>
          <ul class="list-unstyled">
            <li><router-link to="/menu" class="text-muted text-decoration-none">Manage Menu</router-link></li>
            <li><router-link to="/tables" class="text-muted text-decoration-none">Manage Tables</router-link></li>
            <li><router-link to="/orders" class="text-muted text-decoration-none">Place Orders</router-link></li>
          </ul>
        </div>

        <!-- Social Media Section -->
        <div class="col-md-4 mb-4 mb-md-0">
          <h5 class="fw-bold text-uppercase mb-3">Follow Us</h5>
          <div class="d-flex justify-content-start">
            <a href="#" class="text-muted mx-3 fs-4" aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="text-muted mx-3 fs-4" aria-label="Twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="text-muted mx-3 fs-4" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="text-muted mx-3 fs-4" aria-label="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider Line -->
      <hr class="my-4 border-secondary" />

      <!-- Copyright Section -->
      <div class="text-center">
        <p class="text-muted mb-0">© 2024 Restaurant Manager. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css';  // Import Bootstrap Icons

export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #2c2f38;
  color: #dcdcdc;
}

.footer a {
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.footer a:hover {
  color: #ff6347;  /* Subtle hover effect on links */
}

.footer .bi {
  font-size: 1.6rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.footer .bi:hover {
  transform: scale(1.1);  /* Slightly scale the icons on hover */
  color: #ff6347;
}

.list-unstyled li {
  margin-bottom: 10px;
}

footer .text-muted {
  color: white !important;  /* Ensure the text is white */
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Make sure all text inside the footer is white */
.footer h5, .footer p {
  color: white !important;
}

.text-uppercase {
  letter-spacing: 1px;
}

hr {
  border: 0;
  border-top: 1px solid #444;
}

</style>
