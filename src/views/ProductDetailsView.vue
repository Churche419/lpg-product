<template>
    <div class="container mt-5 mb-5">
        <div v-if="isLoading">...</div>
        <div v-else class="row">
            <div class="col-md-4">
                <img class="img-fluid rounded-4 shadow-sm" :src="`/src/assets/images/${selectedProduct.Image}`" :alt="selectedProduct.Image">
            </div>
            <div class="col-md-8">
                <h4>{{ selectedProduct.productName }}</h4>
                <h1>${{ selectedProduct.price.toFixed(2) }}</h1>
                <p class="text-muted">{{ selectedProduct.product_category }}</p>
                <p>{{ selectedProduct.description }}</p>
                <button class="btn btn-dark btn-sm" @click="addToCart">Add to cart</button>
                <button class="btn btn-danger btn-sm" @click="removeFromCart" v-if="productQuantity">-</button>
                <p v-if="productQuantity" class="mt-3">Quantity: {{ productQuantity }}</p>
                <div v-if="productQuantity">
                    <RouterLink to="/cart">View cart</RouterLink>
                </div>
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
    isLoading.value = false;
});

const selectedProduct = computed(() => store.state.selectedProduct);

const addToCart = () => {
    store.commit('addToCart', selectedProduct.value);
};

const removeFromCart = () => {
    store.commit('removeFromCart', selectedProduct.value);
};

const productQuantity = computed(() => store.getters.productQuantity(selectedProduct.value));
</script>
