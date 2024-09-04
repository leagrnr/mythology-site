<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  image: {
    type: String,
    default: null
  },
  darken: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <div :style="{ backgroundImage: image ? `url(${image})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }" class="background">
    <div v-if="darken" class="overlay"></div>
    <slot></slot>
  </div>
</template>

<style scoped>
.background {
  position: relative;
  width: 100%;
  height: 100vh;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>