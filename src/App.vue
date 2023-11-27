<script setup>
import { useHead } from '@vueuse/head'

useHead()
</script>

<template>
  <RouterView></RouterView>
  <GlobalFooter></GlobalFooter>
</template>

<style lang="scss">
@use '@/assets/styles/base.scss';
</style>