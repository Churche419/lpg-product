<template>
    <div class="container mt-5 mb-5">
        <div class="mb-5">
            <h1>Cart</h1>
        </div>
        <div>
            <div class="list-group">
                <div v-for="product in items" :key="product.id">
                    <CartItemCard :product="product" @edit-product="editProduct(product)" @delete-product="deleteProduct(product)" />
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import CartItemCard from '../components/CartItemCard.vue';

import { computed, onMounted } from 'vue';
import { useStore } from "vuex";
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

onMounted(() => {
    store.commit('updateCartFromLocalStorage');//to ensure that the cart data is loaded from localStorage when the component is mounted
});

const items = computed(() => store.getters.cartItems);

function editProduct(product) {
    router.push({ name: 'ProductDetailsView', params: { id: product.id } });
};

const deleteProduct = async (product) => {
    await store.commit('deleteFromCart', product);
};


</script>