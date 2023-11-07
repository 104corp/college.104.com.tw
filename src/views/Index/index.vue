<template>
  <div class="Index text-(16 gray-600)">
    <GlobalHeader></GlobalHeader>
    <NavBar></NavBar>
    <div class="Index__title pt-20">
      <div class="ScrollingTitle h-32 text-16 border">
        ScrollingTitle
      </div>
    </div>
    <div class="Index__announcement mt-12">
      <div class="ScrollingAnnouncement h-36 border">
        ScrollingAnnouncement
      </div>
    </div>
    <div class="Index__job mt-16">
      <div class="layout-container mx-auto">
        <div class="py-16 bg-white rounded-16 shadow-card-gray md:py-24">
          <div class="flex items-center gap-12 mx-16 md:(gap-24 mx-32)">
            <div class="flex-1 flex items-center h-44 border border-orange-400 rounded-4">
              <div class="p-12 w-1/2">
                <input
                  type="text"
                  placeholder="工作關鍵字"
                  maxLength="100"
                  class="w-full text-14 focus:outline-none caret-orange-400"
                >
              </div>
              <button class="flex items-center gap-12 pr-12 py-12 w-1/2">
                <span class="w-1 h-12 bg-gray-400"></span>
                <span class="flex-1 text-(14 gray-400 left nowrap)">地區</span>
                <i class="i-icon:arrow text-gray-400 transform rotate-90"></i>
              </button>
            </div>
            <a
              href=""
              target="_blank"
              class="btn btn-primary px-12 py-10 md:px-77"
            >搜尋</a>
          </div>
          <div class="flex gap-8 mt-12 px-16 overflow-x-scroll w-full h-26 md:px-32">
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-lake-200"
            >短期現領</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-lake-200"
            >假日工讀</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-lake-200"
            >彈性打工</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-lake-200"
            >飲料手搖</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-lake-200"
            >適合學生</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-green-200"
            >自由安排時間</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-green-200"
            >遠端打工</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-green-200"
            >內外場兼職</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-green-200"
            >門市銷售菁英</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-green-200"
            >自由安排時間</a>
          </div>
          <div class="mx-16 mt-16 md:(flex gap-28 mx-32 mt-28)">
            <div class="flex-1 pt-12 bg-[#F1F9F8] rounded-8 md:w-434 lg:w-auto">
              <div class="flex items-center justify-between px-12">
                <div class="rounded-24 bg-white border border-gray-200">
                  <button class="px-16 py-8 text-(14 white) font-700 bg-lake-200 rounded-24 md:py-4">
                    打工職缺
                  </button>
                  <button class="px-16 py-8 text-(14 gray-500) font-700 rounded-24 md:(py-4 hover:text-lake-200)">
                    實習機會
                  </button>
                </div>
                <a
                  href=""
                  target="_blank"
                  class="inline-flex items-center text-(14 gray-500) font-700 md:hover:text-orange-400"
                >更多<i class="i-icon:arrow ml-4"></i></a>
              </div>
              <div class="overflow-x-scroll px-12 pt-8 pb-12">
                <div class="min-w-676">
                  <div
                    v-if="false"
                    class="loading mt-8 h-164"
                  ></div>
                  <div
                    v-else
                    class="grid grid-cols-3 gap-8"
                  >
                    <a
                      v-for="n in 6"
                      :key="n"
                      href=""
                      target="_blank"
                      class="Index__job__card p-8 w-full h-78 bg-white border border-gray-200 rounded-8 md:hover:(shadow-card-gray)"
                    >
                      <div class="h-40 text-(14 blue-200) font-700 line-clamp-2">
                        [日商] 咖樂迪咖啡農場 京站 小碧潭店 門市兼職人員 _時薪176元～180元(歡迎學生打工、二度就業!!)強力招募中!!
                      </div>
                      <div class="flex gap-8 mt-4 text-12 font-700">
                        <div class="text-gray-500">
                          新北市新店區
                        </div>
                        <div class="text-orange-400">
                          時薪176~180元
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden md:(grid grid-cols-2 grid-rows-2 gap-12 w-396 h-224)">
              <a
                href=""
                target="_blank"
              >
                <img
                  src="@/assets/img/default-img.png"
                  alt="無經驗可"
                  draggable="false"
                  class="object-cover w-full h-full rounded-8"
                >
              </a>
              <a
                href=""
                target="_blank"
              >
                <img
                  src="@/assets/img/default-img.png"
                  alt="暑期打工"
                  draggable="false"
                  class="object-cover w-full h-full rounded-8"
                >
              </a>
              <a
                href=""
                target="_blank"
              >
                <img
                  src="@/assets/img/default-img.png"
                  alt="時間彈性"
                  draggable="false"
                  class="object-cover w-full h-full rounded-8"
                >
              </a>
              <a
                href=""
                target="_blank"
              >
                <img
                  src="@/assets/img/default-img.png"
                  alt="短期任務"
                  draggable="false"
                  class="object-cover w-full h-full rounded-8"
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-16">
      <div class="CardEvent h-104 border">
        CardEvent
      </div>
    </div>
    <SideBar
      :list="sectionList"
    ></SideBar>
    <div
      ref="$anchor_bestTool"
      class="-top-90 relative md:top-unset"
    ></div>
    <SectionTool></SectionTool>
    <div
      ref="$anchor_resumeHelper"
      class="-top-90 relative md:top-unset"
    ></div>
    <SectionResume></SectionResume>
    <div class="Index__story bg-([url(@/assets/img/Index/bg-wave-white.png)] repeat-x) pt-60 -mt-60">
      <div class="pb-120 bg-white">
        <div class="text-(36 lake-200 center) leading-44 family-Bungee">
          STORIES
        </div>
        <h2 class="text-(20 gray-600 center) font-700">
          看看他們在職場的故事
        </h2>
        <div
          v-if="false"
          class="loading mt-24 h-296 md:h-450"
        ></div>
        <div v-else>
          <div class="overflow-x-scroll mt-24 md:(overflow-hidden relative flex items-center justify-center)">
            <div class="flex gap-24 min-w-0">
              <a
                v-for="n in 5"
                :key="n"
                href=""
                target="_blank"
                class="group flex-none w-240 h-296 md:(w-400 h-402)"
              >
                <div class="relative flex flex-col items-center pb-20">
                  <div class="overflow-hidden aspect-ratio-4/3 border border-gray-200 rounded-8">
                    <img
                      src="@/assets/img/default-img.png"
                      alt="故事"
                      draggable="false"
                    >
                  </div>
                  <div class="absolute bottom-0 overflow-hidden w-40 aspect-ratio-1 rounded-1/2 border border-white">
                    <img
                      src="@/assets/img/default-img.png"
                      alt="頭貼"
                      draggable="false"
                      class="object-cover w-full h-full"
                    >
                  </div>
                </div>
                <div class="font-700 text-center">
                  <div class="text-(base gray-500)">林怡瑄・Product Manager</div>
                  <div class="mx-auto my-8 w-20 border-(b-2 lake-200)"></div>
                  <div class="text-18 md:group-hover:text-lake-200">Shopee 蝦皮實習，扎實的數據分析與商業訓練</div>
                </div>
              </a>
            </div>
            <div class="hidden layout-container md:(block absolute w-full) xl:max-w-1200">
              <div class="flex justify-between">
                <button class="flex items-center justify-center w-32 aspect-ratio-1 bg-white rounded-1/2 shadow-button-gray">
                  <i class="i-icon:arrow text-gray-500 transform rotate-180"></i>
                </button>
                <button class="flex items-center justify-center w-32 aspect-ratio-1 bg-white rounded-1/2 shadow-button-gray">
                  <i class="i-icon:arrow text-gray-500"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:(flex gap-4 justify-center mt-24 py-8)">
            <button class="w-24 h-8 rounded-4 bg-lake-200"></button>
            <button class="w-12 h-8 rounded-4 bg-(gray-400 op-30)"></button>
            <button class="w-12 h-8 rounded-4 bg-(gray-400 op-30)"></button>
          </div>
        </div>
        <div class="flex justify-center mt-24">
          <a
            href=""
            target="_blank"
            class="inline-block px-16 text-(base lake-200) font-700 border border-lake-200 rounded-4 md:px-32"
          >更多他人經驗</a>
        </div>
      </div>
    </div>
    <div
      ref="$anchor_getHelp"
      class="-top-90 relative md:top-unset"
    ></div>
    <SectionGetHelp></SectionGetHelp>
    <div
      ref="$anchor_news"
      class="-top-90 relative md:top-unset"
    ></div>
    <SectionArticle></SectionArticle>
    <SectionFollowUs></SectionFollowUs>
    <GoTop></GoTop>
  </div>
</template>

<script setup>
import {
  ref, computed 
} from 'vue'
import { useElementBounding } from '@vueuse/core'
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
import SectionResume from './components/SectionResume.vue'
import SectionGetHelp from './components/SectionGetHelp.vue'
import SectionTool from './components/SectionTool.vue'
import SectionArticle from './components/SectionArticle.vue'
import SectionFollowUs from './components/SectionFollowUs.vue'

const $anchor_bestTool = ref(null)
const $anchor_resumeHelper = ref(null)
const $anchor_getHelp = ref(null)
const $anchor_news = ref(null)

const { top: bestToolsTop } = useElementBounding($anchor_bestTool)
const { top: resumeHelperTop } = useElementBounding($anchor_resumeHelper)
const { top: getHelpTop } = useElementBounding($anchor_getHelp)
const { top: newsTop } = useElementBounding($anchor_news)

const sectionList = computed(() => [
  {
    text: '工具介紹',
    anchorTop: bestToolsTop.value
  },
  {
    text: '履歷幫手',
    anchorTop: resumeHelperTop.value
  },
  {
    text: '職場問答',
    anchorTop: getHelpTop.value
  },
  {
    text: '產業新訊',
    anchorTop: newsTop.value
  }
])
</script>

<style lang="scss">
.Index {
  background-image: url('@/assets/img/Index/bg-top.png'), linear-gradient(#d1ecea, #d1ecea), url('@/assets/img/Index/bg-deco.png');
  background-position: top 100px center, top 100px center, top 100px center;
  background-repeat: no-repeat, no-repeat, repeat-y;
  background-size: auto 225px, 100% 542px, 100% auto;

  .overflow-x-scroll {
    &::-webkit-scrollbar {
      --at-apply: 'hidden';
    }
  }
}

// xl | lg | md | sm
@screen md {
  .Index {
    background-size: auto 225px, 100% 630px, 100% auto;
  }
}

@screen xl {
  .Index {
    background-size: 100% 225px, 100% 630px, 100% auto;
  }
}
</style>