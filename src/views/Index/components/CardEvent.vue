<template>
  <div
    class="CardEvent flex-1 overflow-hidden min-w-280 text-14 bg-white border border-gray-200 rounded-16 shadow-card-gray"
    md="max-w-454 text-16"
  >
    <div
      v-if="props.isLoading"
      class="loading w-full h-104"
      md="h-148"
    ></div>
    <div v-else-if="props.title">
      <a
        :href="props.link"
        target="_blank"
      >
        <div
          class="group flex w-full h-76"
          md="h-112"
        >
          <div
            class="flex-shrink-0 w-76 aspect-ratio-1"
            md="w-112"
          >
            <BaseImage
              :src="props.image"
              :alt="props.title"
              class="h-full w-full object-cover"
            ></BaseImage>
          </div>
          <div class="pl-16 pr-12 py-8 border-l border-gray-200">
            <div class="grid gap-8">
              <p
                class="font-700 line-clamp-3 break-all"
                :md="`leading-24 group-hover:text-orange-400 ${props.content ? 'line-clamp-2' : 'line-clamp-4'}`"
              >
                <span
                  class="align-top inline-block py-2 mr-2 w-32 text-12 text-white text-center bg-lake-200 rounded-4"
                  md="py-0 leading-24"
                >
                  {{ props.typeName }}
                </span>
                {{ props.title }}
              </p>
              <p
                class="hidden text-14 text-gray-600"
                md="line-clamp-2"
              >
                {{ props.content }}
              </p>
            </div>
          </div>
        </div>
      </a>
      <a
        :href="props.moreLink"
        target="_blank"
      >
        <div
          class="flex items-center justify-center gap-4 py-8 text-gray-500 border-(t gray-200)"
          md="hover:text-orange-400"
        >
          <p class="text-14 font-700">{{ props.moreText }}</p>
          <span class="i-icon:arrow"></span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  typeName: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  moreLink: {
    type: String,
    default: ''
  },
  moreText: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.CardEvent {
}

// xl | lg | md | sm
// @screen md {}
</style>