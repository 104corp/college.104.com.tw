<template>
  <div
    class="ToolShowcase layout-container mx-auto"
    md="relative box-content mt-12 pr-348 max-w-520 min-h-592"
  >
    <div
      class="flex justify-between relative mx-auto mt-24 px-16 max-w-540"
      md="static mt-0 px-0"
    >
      <TransitionGroup tag="ul">
        <li
          v-for="(item, index) in props.list"
          :key="index"
          class="group"
          md="relative p-20 transition-all duration-200 ease-linear before:(content-empty absolute w-0 h-0 top-1/2 -right-14 transform -translate-y-1/2 border-(y-15 r-0 l-14 transparent))"
          :class="{ 'active md:(bg-[#FFF7D9] rounded-16 before:border-l-[#fff7d9])': activeIndex === index }"
          @mouseover="activeIndex = index"
        >
          <div
            class="flex items-center relative mb-12 text-18 font-700 overflow-visible"
            md="static mb-0"
          >
            <span
              class="mr-12 text-24 leading-28 font-700 text-lake-200 family-Bungee"
              md="mr-20 text-(32 gray-400) leading-38 group-[.active]-text-lake-200"
            >0{{ index + 1 }}</span>
            <div
              class="text-18 text-gray-500 text-nowrap group-[.active]-text-gray-600"
              md="text-(20 gray-600)"
            >
              {{ item.title }}
            </div>
            <div
              class="i-icon:arrow hidden ml-4 text-16"
              md="block"
            ></div>
          </div>
          <div
            class="relative pl-28 mx-16 mb-8 z-1 before:(content-empty absolute top-0 left-0 w-3 h-full bg-lake-200 rounded-2) group-[.active]-h-372"
            md="pl-64 m-0 max-w-none before:hidden group-[.active]-h-unset"
          >
            <div
              v-show="activeIndex === index"
              class="text-base"
            >
              {{ item.content }}
            </div>
            <div
              class="hidden flex-col items-start gap-12 mt-12 group-[.active]-inline-flex"
              md="flex flex-row gap-16 mt-4 group-[.active]-mt-12"
            >
              <a
                v-for="button in item.buttons"
                :key="button.text"
                :href="button.link"
                :target="button.target"
                class="btn flex-shrink-0 px-32 py-6 text-(base lake-200 center) font-700 border border-lake-200 rounded-4"
                md="px-16 py-2"
              >{{ button.text }}</a>
            </div>
          </div>
        </li>
      </TransitionGroup>
      <div
        class="flex-shrink-0 flex items-center relative top-[calc(var(--tools-index)*40px)] w-180 h-372 z-0"
        md="absolute top-0 right-0 w-288 h-full max-h-592"
        :style="{ '--tools-index': activeIndex + 1 }"
      >
        <div
          class="hidden"
          md="block absolute left-36 w-360 h-360 rounded-full border border-(dashed lake-200) transition-all duration-300 ease-linear"
          :style="{ 'transform': `rotate(${90 + 180 * activeIndex}deg)` }"
        >
          <BaseImage
            :src="props.list[activeIndex].icon"
            alt="icon"
            class="absolute top-0 left-1/2 -m-50 w-100 h-100 transform -rotate-90"
          ></BaseImage>
          <BaseImage
            :src="props.list[activeIndex].icon"
            alt="icon"
            class="absolute bottom-0 left-1/2 -m-50 w-100 h-100 transform rotate-90"
          ></BaseImage>
        </div>
        <div
          class="absolute bottom-12 right-0 w-300 h-300 bg-[#FFF1C1] bg-op-60 rounded-full"
          md="hidden"
        ></div>
        <div
          class="relative p-8 w-full h-full bg-white border border-gray-300 rounded-28 shadow-card-gray"
          md="p-12 rounded-45"
        >
          <div class="relative w-full h-full">
            <TransitionGroup name="animate-fade">
              <BaseImage
                v-for="(item, index) in props.list"
                v-show="activeIndex === index"
                :key="index"
                :src="item.image"
                :alt="item.title"
                class="absolute top-0 left-0 w-full h-full border border-gray-300 rounded-20 object-cover"
                md="rounded-34"
              ></BaseImage>
            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { checkDataType } from '@/utils/typeChecker.js'

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
    validator (value) {
      const dataType = [ {
        title: 'string',
        content: 'string',
        image: 'string',
        icon: 'string',
        buttons: [ {
          text: 'string',
          link: 'string',
          target: 'string'
        } ]
      } ]
      return checkDataType(dataType, value)
    }
  },
  categoryChinese: {
    type: String,
    default: ''
  }
})

const activeIndex = ref(0)
</script>

<style lang="scss">
.ToolShowcase {
  --tools-index: 1;
}

// xl | lg | md | sm
// @screen xl {}
</style>