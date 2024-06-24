<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary  ">
  <div class="container-fluid  p-3 mb-2 bg-black text-white">
    <a class="navbar-brand" href="#"><img src="/images/logo.jpg" alt="" srcset="" width="100px" padding="20px"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link" style="color:white">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link" style="color:white">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/products" class="nav-link" style="color:white">Shops</RouterLink>
        </li>
        <li>
          <RouterLink to="/cart" class="nav-link" style="color:white">Cart</RouterLink>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color:white">
            Others
          </a>
          <ul class="dropdown-menu  ">
            <li><RouterLink to="/contact" class="nav-link" >Contact Us</RouterLink></li>
            <li><a class="dropdown-item" href="#">coming soon</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">coming soon...</a></li>
          </ul>
        </li>
      
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<RouterView/>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>