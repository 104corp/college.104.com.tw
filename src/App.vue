<script setup>
import { useHead } from '@vueuse/head'

useHead()
</script>

<template>
  <RouterView></RouterView>
</template>

<style lang="scss">
@use '@/assets/styles/base.scss';
</style>