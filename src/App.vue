<script setup>
import { useHead } from '@vueuse/head'

useHead()
</script>

<template>
  <section>
    <RouterView></RouterView>
  </section>
</template>

<style lang="scss">
@use '@/assets/styles/base.scss';
</style>