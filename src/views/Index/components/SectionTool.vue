<template>
  <div class="SectionTool pb-92 md:pb-168">
    <div class="mt-32 text-(36 lake-200 center) leading-44 family-Bungee">
      BEST TOOLS
    </div>
    <h2 class="text-(20 gray-600 center) font-700">
      大學生必用神器介紹
    </h2>
    <div class="ToolShowcase mx-auto layout-container md:(relative box-content mt-12 pr-348 max-w-520)">
      <div class="ToolShowcase__list flex justify-between relative mx-auto mt-24 px-16 md:(static mt-0 px-0)">
        <TransitionGroup tag="ul">
          <li
            v-for="(item, index) in toolStore.tool"
            :key="index"
            class="ToolShowcase__item md:p-20"
            :class="{ 'active': isActiveIndex(index) }"
            @mouseover="changeActiveIndex(index)"
          >
            <div class="ToolShowcase__item__title flex items-center relative mb-12 text-18 font-700 whitespace-no-wrap overflow-visible md:static md:mb-0 md:text-20">
              <span
                class="mr-12 text-24 leading-28 font-700 text-lake-200 md:(mr-20 text-(32 gray-400) leading-38)"
                :class="{ 'md:text-lake-200': isActiveIndex(index) }"
              >0{{ index + 1 }}</span>
              <div
                class="text-18 text-gray-500 text-nowrap md:(text-(20 gray-600))"
                :class="{ 'text-gray-600': isActiveIndex(index) }"
              >
                {{ item.title }}
              </div>
              <div class="i-icon:arrow hidden ml-4 text-16 md:block"></div>
            </div>
            <div
              class="ToolShowcase__item__content relative pl-28 mx-16 mb-8 z-1 md:pl-64 md:m-0 md:max-w-none md:h-auto"
              :class="{ 'h-372': isActiveIndex(index) }"
            >
              <div
                v-show="isActiveIndex(index)"
                class="text-base"
              >
                {{ item.content }}
              </div>
              <div
                class="hidden flex-col items-start gap-12 mt-12 md:(flex flex-row gap-16)"
                :class="{ 'inline-flex md:mt-12': isActiveIndex(index),
                          'md:mt-4': !isActiveIndex(index) }"
              >
                <a
                  v-for="button in item.buttons"
                  :key="button.text"
                  :href="button.link"
                  :target="button.target"
                  class="btn flex-shrink-0 px-32 py-6 text-(base lake-200 center) font-700 border border-lake-200 rounded-4 md:(px-16 py-2)"
                >{{ button.text }}</a>
              </div>
            </div>
          </li>
        </TransitionGroup>
        <div
          class="ToolShowcase__item__demo flex-shrink-0 flex items-center relative right-0 w-180 h-372 z-0 md:absolute md:top-0 md:right-0 md:w-288 md:h-full"
          :style="{ '--tools-index': activeIndex + 1 }"
        >
          <div
            class="ToolShowcase__item__demo--circle hidden absolute w-360 h-360 rounded-full border border-dashed border-lake-200 md:block"
            :style="{ transform: `rotate(${90 + 180 * activeIndex}deg)` }"
          >
            <BaseImage
              :src="toolStore.tool[activeIndex].icon"
              alt="icon"
              class="absolute top-0 left-1/2 w-100 h-100 transform -rotate-90"
            ></BaseImage>
            <BaseImage
              :src="toolStore.tool[activeIndex].icon"
              alt="icon"
              class="absolute bottom-0 left-1/2 w-100 h-100 transform rotate-90"
            ></BaseImage>
          </div>
          <div class="ToolShowcase__item__demo--bg absolute bottom-12 right-0 w-300 h-300 rounded-full md:hidden"></div>
          <div class="ToolShowcase__item__demo--main relative p-8 w-full h-full bg-white border border-gray-300 shadow-008 md:p-12">
            <div class="relative w-full h-full">
              <TransitionGroup name="animate-fade">
                <BaseImage
                  v-for="(item, index) in toolStore.tool"
                  v-show="isActiveIndex(index)"
                  :key="index"
                  :src="item.image"
                  :alt="item.title"
                  class="absolute top-0 left-0 w-full h-full border border-gray-300 object-cover"
                ></BaseImage>
              </TransitionGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { } from 'vue'
import { storeToRefs } from 'pinia'
import { useTool } from '@/stores/Tool.js'

const toolStore = useTool()
const { activeIndex } = storeToRefs(toolStore)

const isActiveIndex = (index) => {
  return activeIndex.value === index
}

const changeActiveIndex = (index) => {
  activeIndex.value = index
}
</script>

<style lang="scss">
.SectionTool {
}

.ToolShowcase {
  --tools-index: 1;

  &__list {
    max-width: 540px;
  }

  &__item {
    &__title {
      span {
        font-size: 24px;
        font-family: 'Bungee', cursive;
      }
    }

    &__content {
      min-width: 160px;
      // max-width: 300px;

      &::before {
        content: '';
        width: 3px;
        border-radius: 2px;
        @apply absolute top-0 left-0 h-full bg-lake-200;
      }
    }

    &__demo {
      top: calc( 40px * var(--tools-index) );
      min-height: 370px;

      &--bg {
        @apply bg-[#FFF1C1] bg-op-60;
      }

      &--main {
        border-radius: 28px;

        img {
          border-radius: 20px;
        }
      }
    }
  }
}

// xl | lg | md | sm
// @screen xl {}
@screen md {
  .ToolShowcase {
    min-height: 592px;

    &__item {
      transition: all .2s linear;

      &.active {
        border-radius: 16px;
        @apply relative bg-[#FFF7D9];

        &::before {
          content: '';
          right: -14px;
          transform: translateY(-50%);
          border-style: solid;
          border-width: 15px 0 15px 14px;
          border-color: transparent transparent transparent #fff7d9;
          @apply absolute w-0 h-0 top-1/2;
        }
      }

      &__title {
        span {
          font-size: 32px;
        }
      }

      &__content {
        &::before {
          @apply hidden;
        }
      }

      &__demo {
        top: 0;
        max-height: 592px;

        &--circle {
          left: 36px;
          transition: transform .3s linear;

          > * {
            margin: calc(-100px / 2);
          }
        }

        &--main {
          border-radius: 45px;

          img {
            border-radius: 34px;
          }
        }
      }
    }
  }
}
</style>