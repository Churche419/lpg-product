<template>
    <div class="card h-100 shadow-sm border-0">
      <img class="card-img-top" :src="'/src/assets/images/' + product.Image" alt="">
      <div class="card-body">
                <h2 class="card-title">{{ product.productName }}</h2>
                <h6 class="card-title">${{ product.price }}</h6>
                <h6 class="card-text">{{ truncateText(product.product_description, 20) }}</h6>
                <h6 class="card-text text-muted" style="font-size: 13px;">{{ product.product_category }}</h6>
                <Router-link :to="{name : 'ProductDetailsView', params:{id:product.id}}">View</Router-link></div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  });
  
  const truncateText = (text, limit) => {
    if (!text) return '';
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    } else {
      return text
    }
  }
  </script>
  