<script setup>

import Button from "@/components/ButtonComponent.vue";

</script>

<template>
  <header>
    <Button label="Grecque" href="/greek"  />
    <Button label="Nordique" href="/nordic"/>
    <Button label="Egyptienne" href="/egyptian" />
    <Button label="Japonaise" href="/japanese" />
  </header>
  <router-view />
</template>

<style scoped>

header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  height: 10vh;
}

</style>