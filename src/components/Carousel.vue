<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://via.placeholder.com/1600x500" class="d-block w-100" alt="First Slide" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Welcome to Restaurant Manager</h5>
            <p>Manage your restaurant efficiently with ease!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/1600x500" class="d-block w-100" alt="Second Slide" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Manage Your Menu</h5>
            <p>Efficiently update and manage your menu items</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/1600x500" class="d-block w-100" alt="Third Slide" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Track Your Orders</h5>
            <p>Stay on top of all the orders in your restaurant</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Carousel",
  };
  </script>
  
  <style scoped>
  .carousel-inner img {
    height: 500px; /* Set a fixed height for carousel images */
    object-fit: cover;
  }
  
  .carousel-caption h5 {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .carousel-caption p {
    font-size: 1.2rem;
  }
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: invert(100%);
  }
  </style>
  