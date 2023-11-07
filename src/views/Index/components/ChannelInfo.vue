<template>
  <a
    :href="props.link"
    target="_blank"
    class="ChannelInfo group flex items-center gap-20"
    md="flex-shrink-0 flex-col items-start gap-16 w-300"
  >
    <div
      class="flex-shrink-0 overflow-hidden w-80 aspect-ratio-1 border border-gray-300"
      md="w-160"
      :class="{ 'rounded-full': props.type === 'ig',
                'rounded-10': props.type === 'podcast' }"
    >
      <BaseImage
        :src="props.image"
        :alt="props.name"
        class="w-full h-full object-cover"
      ></BaseImage>
    </div>
    <div class="min-w-0">
      <div
        class="flex items-center text-base font-700 line-clamp-1"
        md="text-20 group-hover:text-lake-200"
      >
        {{ props.name }}
        <span
          class="i-icon:arrow text-16 ml-4"
          md="hidden"
          :class="{ 'hidden': props.type === 'podcast' }"
        ></span>
      </div>
      <div
        class="text-14 whitespace-pre-line line-clamp-4"
        md="mt-8 line-clamp-5"
      >
        {{ props.description }}
      </div>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
.ChannelInfo {
}

// xl | lg | md | sm
// @screen md {}
</style>