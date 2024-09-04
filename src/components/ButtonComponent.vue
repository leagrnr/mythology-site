<!-- src/components/ButtonComponent.vue -->
<template>
  <component :is="href ? 'a' : 'button'" :href="href" :type="href ? null : type" class="btn" :disabled="disabled">
    {{ label }}
  </component>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: null
  }
});
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  display: inline-block;
}

.btn:hover {
  background-color: #0056b3;
  border: none;
}
</style>