<template>
    <div btn btn- secondary>
      
  
      <div class="container mt-4 mb-5 bg-light p-4 rounded  p-3 mb-2 bg-dark-subtle text-dark-emphasis">
        <div class="image-container position-relative mb-5">
          <img src="/images/background.jpg" alt="Background Image" class="w-100 rounded">
          <div class="text-overlay position-absolute text-center">
            <h1>LGP</h1>
            <p>We are thrilled to have you here. Get your products at the best deals here.</p>
          </div>
        </div>
      </div>
  
      <div class="container p-3 mb-2 bg-dark-subtle text-dark-emphasis">
        <h2 class="text-center mb-4 
        ">Featured Products</h2>
        <div class="row">
          <div class="col-md-3" v-for="product in featuredProducts" :key="product.id">
            <div class="card mb-4">
              <a href="/products">
                <img :src="'/images/' + product.Image" class="card-img-top">
              </a>
              
              <div class="card-body text-center ">
                <h6 class="card-title">{{ product.productName }}</h6>
                <p>{{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- <div class="container mt-5 mb-5">
        <h2 class="text-center mb-4">Shop by Categories</h2>
        <div class="row">
          <div class="col-md-3" v-for="category in categories" :key="category.id">
            <div class="card mb-4">
              <a href="#">
                <img :src="'/src/assets/images/' + product.Image" class="card-img-top" >
              </a>
              <div class="card-body text-center">
                <h6 class="card-title">{{ product.product_category}}</h6>
              </div>
            </div>
          </div>
        </div>
      </div> -->
  
      <div class="container mt-5 mb-5  p-3 mb-2 bg-dark-subtle text-dark-emphasis">
        <div class="alert alert-secondary text-center">
          <h1>Get Support</h1>
          <p>For enquiries, contact us.</p>
          <a href="/contact" class="btn btn-primary">Contact Us</a>
        </div>
      </div>
      
      <marquee direction="left" class="p-3 mb-2 bg-dark-subtle text-dark-emphasis">For enquiries, please contact us : 0803282837 , 0912872727, 23482282837. We are 
        working hard to make your experience on our site more better. Follow us on X : https://X.com/lpg products. thank you
      </marquee>
  
      <footer class="bg-dark text-white text-center py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h5>About Us</h5>
              <p>We aim to provide high-quality products and excellent customer service
                 to shoppers from all around the world.</p>
            </div>
            <div class="col-md-4">
              <h5>Quick Links</h5>
              <ul class="list-unstyled">
                <li><RouterLink to="/" class="nav-link">Home</RouterLink></li>
                <li><RouterLink to="/products" class="nav-link">Shop</RouterLink></li>
                <li><RouterLink to="/about" class="nav-link">About</RouterLink></li>
                <!-- <li><RouterLink to="/about" class="nav-link">Contact</RouterLink></li> -->
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
  
  
  const featuredProducts = computed(() => products.value.slice(0, 4));
  // const categories = computed(() => [
  //   { id: 1, name: 'Electronics', image:  '/src/assets/images/xr.jpeg'  },
  //   { id: 2, name: 'Fashion', image:  '/src/assets/images/jordan.jpg'  },
  //   { id: 3, name: 'Home & Garden', image:  '/src/assets/images/ps5.jpeg' },
  //   { id: 4, name: 'Sports', image:  '/src/assets/images/s24.jpeg'  },
  // ]);
  </script>
  
  <style>
  .image-container img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .text-overlay {
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    background-color: rgba(219, 205, 205, 0.6);
    color: rgb(2, 1, 1);
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