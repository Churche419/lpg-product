<template>
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-4">
                <img class="img-fluid rounded-4 shadow-sm" :src="'/images/'+ selectedProduct.Image" :alt="selectedProduct.Image">
            </div>
            <div class="col-md-8">
                <h4>{{ selectedProduct.productName }}</h4>
                <h1>${{ selectedProduct.price }}</h1>
                <p class="text-muted">{{ selectedProduct.product_category }}</p>
                <p>{{ selectedProduct.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();
const isLoading = ref(true);

onMounted(async () => {
    store.commit('updateCartFromLocalStorage');
    await store.dispatch('fetchProductById', route.params.id);
    isLoading.value = true;
});

const selectedProduct = computed(() => store.state.selectedProduct);

</script>
