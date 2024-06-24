<template>
    <div class="container mt-5 mb-5">
        <div class="">
            <div class="col-md-4">
                <img class="img-fluid rounded-4 shadow-sm" :src="'/images/'+ selectedProduct.Image" :alt="selectedProduct.Image">
            </div><br><br>
            <div class="col-md-8">
                <h4>{{ selectedProduct.productName }}</h4>
                <h1>${{ selectedProduct.price }}</h1>
                <p class="text-muted">{{ selectedProduct.product_category }}</p>
                <p>{{ selectedProduct.description }}</p>
                <button type="button" class="btn btn-primary" @click="addToCart()">Add to cart</button><br><br>
                <button type="button" class="btn btn-primary" @click="removeFromCart()">Remove From Cart</button><br><br>
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


const addToCart = async () => {
    await store.commit('addToCart', selectedProduct.value);
};
const removeFromCart = async () => {
    await store.commit('removeFromCart', selectedProduct.value);
};


</script>
