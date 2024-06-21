<template>
    <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ product.productName }}</h5>
            <small class="text-body-secondary">{{ product.product_category }}</small>
        </div>
        <p class="mb-1">Quantity: {{ product.quantity }}, Total Cost: ${{ itemCost }}</p>
        <small class="text-body-secondary">${{ formattedPrice }}/item</small>
        <div class="mt-3">
            <button class="btn btn-link btn-sm" @click="$emit('edit-product', product)">Edit Product</button>
            <button class="btn btn-link btn-sm text-danger" @click="$emit('delete-product', product)">Delete Product</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { formatPrice } from '/utils/formatters.js'; 
const props = defineProps({
    product: Object
});

const emit = defineEmits(['edit-product', 'delete-product']);//if you want to emit custom events from a component, you need to declare them explicitly using the emits option. This is a new requirement introduced in Vue 3 to prevent potential issues

//We are trying to access the product from the props object therefore we need to destructure the props object as done above so as to access the product price and quantity
const itemCost = computed(() => {
    return formatPrice(props.product.product_price * props.product.quantity)
})

const formattedPrice = computed(() => {
    return formatPrice(props.product.product_price);
});

</script>