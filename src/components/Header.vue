<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<template>
    <div class="alert alert-primary">
        <h1><strong>{{ title }}</strong></h1>
        <p>{{ description }}</p>
    </div>
</template>