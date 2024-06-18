<template>
    <table></table>
    <div class="row mt-5 mb-4" v-bind="product in products" :key="product.id">
        <div class="col-md-3">
              <div class="card" style="width: 14rem;">
          <a href="#">
          <img src="" class="card-img-top" alt="...">
        </a>
                    <div class="card-body" >
                          <h6 class="card-title">{{ product.productName }}</h6>
                              <p>{{ product.price }}</p>    
                    </div>
              </div>
        </div>
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
</script>