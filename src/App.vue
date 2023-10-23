<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: '104z-temp 前端專案共用模板',
  meta: [
    {
      name: 'description',
      content: '104z-temp 前端專案共用模板 vue3+pinia+vite',
    },
  ],
})
</script>

<template>
  <section>
    <header>
      <img
        alt="104 logo"
        src="@/assets/images/logo.svg"
        width="200"
        height="150"
      >
    </header>

    <RouterView></RouterView>
  </section>
</template>

<style lang="scss">
@use '@/assets/styles/base.scss';

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
}
</style>