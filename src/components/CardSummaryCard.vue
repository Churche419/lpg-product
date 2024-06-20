<template>
    <div v-if="cartTotal != 0.00" class="card cartHasItem">
        <div class="card-header">
            <h6>Cart Total</h6>
        </div>
        <div class="card-body">
            <h5 class="card-title">${{ cartTotal }}</h5>
            <p class="card-text">Proceed to check and make payment.</p>
            <button class="btn btn-dark">Check</button>
        </div>
    </div>
    <div v-else class="card cartHasNoItem">
        <div class="card-header">
            <h6>Cart</h6>
        </div>
        <div class="card-body">
            <p class="card-text">nothing has being picked</p>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from "vuex";
import { formatPrice } from '../utils/formatters.js';

const store = useStore();

onMounted(() => {
    store.commit('updateCartFromLocalStorage');//to ensure that the cart data is loaded from localStorage when the component is mounted
});

const cartTotal = computed(() => formatPrice(store.getters.cartTotal));

</script>

<style>

</style>