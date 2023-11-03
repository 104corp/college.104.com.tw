<template>
  <div class="GlobalFooter mt-auto">
    <div class="text-12 leading-20 px-16 py-12 h-44 text-center bg-black text-white md:hidden">
      一零四資訊科技股份有限公司 版權所有 ©{{ new Date().getFullYear() }}
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
#app-footer {
  @apply hidden md:block;
}

.GlobalFooter {
}
</style>