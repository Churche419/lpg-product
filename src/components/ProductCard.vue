<template>
    <div class="card h-100 shadow-sm border-0">
      <img class="card-img-top" :src="'assets/images/' + product.Image" alt="">
      <div class="card-body">
        <h3 class="card-title">{{ product.productName }}</h3>
        <h5 class="card-title">${{ product.price.toFixed(2) }}</h5>
        <p class="card-text">{{ truncateText(product.product_description, 20) }}</p>
        <p class="card-text text-muted" style="font-size: 13px;">{{ product.product_category }}</p>
        <button class="btn btn-primary btn-sm" @click="$emit('view-product', product)">View Product</button>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  });
  
  const emit = defineEmits(['view-product']);
  
  const truncateText = (text, limit) => {
    if (!text) return '';
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    } else {
      return text;
    }
  }
  </script>
  