<template>
    <div class="container mt-5 mb-5">
      <h1>Products</h1>
          <div v-if="isLoading">Loading...</div>
      <div v-else>
        <div v-if="products.length > 0">
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col" v-for="product in products" :key="product.id">
              <ProductCard :product="product" @view-product="viewProduct(product)"/>
            </div>
          </div>
        </div>
        <div v-else>No product found</div>
      </div>
    </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter  } from "vue-router";

const store = useStore();
const isLoading = ref(true);
const router = useRouter();

onMounted(async () => {
    await store.dispatch("fetchProducts");
    isLoading.value = false;
});

isLoading.value = false;

const products = computed(() => store.state.products);

function viewProduct(product) {
  // Navigate to ProductDetails view with the product ID as a parameter
  router.push({ name: 'ProductDetailsView', params: { id: product.id } });
}
</script>