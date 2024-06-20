<template>
    <div btn btn- secondary>
      
  
      <div class="container mt-4 mb-5 bg-light p-4 rounded">
        <div class="image-container position-relative mb-5">
          <img src="../assets/images/background.jpg" alt="Background Image" class="w-100 rounded">
          <div class="text-overlay position-absolute text-center">
            <h1>LGP</h1>
            <p>We are thrilled to have you here. Get your products at the best deals here.</p>
          </div>
        </div>
      </div>
  
      <div class="container">
        <h2 class="text-center mb-4">Featured Products</h2>
        <div class="row">
          <div class="col-md-3" v-for="product in featuredProducts" :key="product.id">
            <div class="card mb-4">
              <a href="#">
                <img :src="product.image" class="card-img-top" :alt="product.productName">
              </a>
              <div class="card-body text-center">
                <h6 class="card-title">{{ product.productName }}</h6>
                <p>{{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Product Categories -->
      <div class="container mt-5 mb-5">
        <h2 class="text-center mb-4">Shop by Categories</h2>
        <div class="row">
          <div class="col-md-3" v-for="category in categories" :key="category.id">
            <div class="card mb-4">
              <a href="#">
                <img :src="category.image" class="card-img-top" :alt="category.name">
              </a>
              <div class="card-body text-center">
                <h6 class="card-title">{{ category.name }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Promotional Banner -->
      <div class="container mt-5 mb-5">
        <div class="alert alert-secondary text-center">
          <h1>Get Support</h1>
          <p>For enquiries, contact us.</p>
          <a href="#" class="btn btn-primary">Contact Us</a>
        </div>
      </div>
  
      <!-- Footer -->
      <footer class="bg-dark text-white text-center py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h5>About Us</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula urna at leo vestibulum.</p>
            </div>
            <div class="col-md-4">
              <h5>Quick Links</h5>
              <ul class="list-unstyled">
                <li><a href="#" class="text-white">Home</a></li>
                <li><a href="#" class="text-white">Shop</a></li>
                <li><a href="#" class="text-white">Contact</a></li>
                <li><a href="#" class="text-white">About</a></li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5>Follow Us</h5>
              <a href="#" class="text-white">Instagram</a> | <a href="#" class="text-white">Facebook</a>
            </div>
          </div>
          <hr>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  onMounted(async () => {
    await store.dispatch('fetchProducts');
  });
  
  const products = computed(() => store.state.products);
  
  // Sample data for featured products and categories (replace with actual data)
  const featuredProducts = computed(() => products.value.slice(0, 4));
  const categories = computed(() => [
    { id: 1, name: 'Electronics', image: 'path/to/electronics.jpg' },
    { id: 2, name: 'Fashion', image: 'path/to/fashion.jpg' },
    { id: 3, name: 'Home & Garden', image: 'path/to/home_garden.jpg' },
    { id: 4, name: 'Sports', image: 'path/to/sports.jpg' },
  ]);
  </script>
  
  <style>
  .image-container img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .text-overlay {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.6);
    color: whitesmoke;
    padding: 20px;
    border-radius: 10px;
  }
  
  .card img {
    height: 200px;
    object-fit: cover;
  }
  
  footer a {
    color: #fff;
    text-decoration: none;
  }
  
  footer a:hover {
    text-decoration: underline;
  }
  </style>