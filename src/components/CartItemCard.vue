<template>
    <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between align-items-center">
            <h5 class="mb-1">{{ product.productName }}</h5>
            <small class="text-muted">{{ product.product_category }}</small>
        </div>
        <div class="mt-2">
            <p class="mb-1">Total Cost: ${{ product.price }}</p>
            <p class="mb-1">Quantity: {{ product.quantity }}</p>
        </div>
        <div class="mt-3 d-flex justify-content-end">
            <button class="btn btn-link btn-sm" @click="$emit('edit-product', product)">Edit Product</button>
            <button class="btn btn-link btn-sm text-danger" @click="$emit('delete-product', product)">Delete Product</button>
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

const emit = defineEmits(['edit-product', 'delete-product']);
</script>
