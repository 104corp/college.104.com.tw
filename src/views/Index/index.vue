<template>
  <div class="Index text-(16 gray-600)">
    <div class="GlobalHeader h-45 border">
      GlobalHeader
    </div>
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
    <div class="Index__tool pb-120">
      <div class="mt-32 text-(36 lake-200 center) leading-44 family-Bungee">
        BEST TOOLS
      </div>
      <h2 class="text-(20 gray-600 center) font-700">
        大學生必用神器介紹
      </h2>
      <div class="ToolShowcase mt-24 h-548 text-16 border">
        ToolShowcase
      </div>
    </div>
    <div
      ref="$anchor_resumeHelper"
      class="-top-90 relative md:top-unset"
    ></div>
    <div class="Index__resume bg-([url(@/assets/img/Index/bg-wave-blue.png)] repeat-x) pt-60 -mt-60">
      <div class="pb-120 bg-[#D1ECEA]">
        <div class="text-(36 lake-200 center) leading-44 family-Bungee">
          RESUME HELPER
        </div>
        <h2 class="text-(20 gray-600 center) font-700">
          幫你做出好履歷
        </h2>
        <div class="layout-container overflow-hidden mt-24 bg-white rounded-16 shadow-card-gray">
          <div class="pt-24 text-gray-600 md:(flex items-center)">
            <div class="mx-16 md:(flex-none ml-40 mr-32 w-240)">
              <div class="text-20 font-700 md:text-24">
                多種履歷版型<span class="md:hidden">，</span><br class="hidden md:block">為你增加亮點
              </div>
              <div class="mt-4 text-base md:mt-24">
                自訂內容更多元的呈現自我
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <div
                v-if="false"
                class="loading mt-16 h-358"
              ></div>
              <div v-else>
                <div class="flex items-center justify-end mx-16 mt-16 md:(ml-0 mr-40)">
                  <a
                    href=""
                    target="_blank"
                    class="inline-flex items-center text-(14 gray-500) font-700 md:hover:text-orange-400"
                  >更多履歷<i class="i-icon:arrow ml-4"></i></a>
                </div>
                <div class="overflow-x-scroll">
                  <div class="flex gap-16 mt-16 mb-24 mx-16 w-full min-w-848 max-w-1088 md:(ml-0 mr-40)">
                    <a
                      v-for="n in 3"
                      :key="n"
                      href=""
                      target="_blank"
                      class="group overflow-hidden rounded-8 border border-gray-300 md:hover:(shadow-card-gray)"
                    >
                      <div class="h-120">
                        <img
                          src="@/assets/img/default-img.png"
                          alt="封面"
                          draggable="false"
                          class="object-cover w-full h-full"
                        >
                      </div>
                      <div class="flex items-end px-16 h-56 border-(b gray-300)">
                        <div class="w-96 aspect-1 overflow-hidden rounded-1/2 mb-8">
                          <img
                            src="@/assets/img/default-img.png"
                            alt="頭貼"
                            draggable="false"
                            class="object-cover w-full h-full"
                          >
                        </div>
                        <div class="ml-12 mt-4 mb-8 text-gray-600">
                          <div class="text-16 leading-24 font-700 md:group-hover:text-orange-400">梁小賢</div>
                          <div class="text-14">數據分析師</div>
                        </div>
                      </div>
                      <div class="p-16 pt-8">
                        <div class="text-(14 gray-600) line-clamp-2">獨立開發的網頁，請參考：https://lefty.blog，後台其他技術，若有興趣了解...</div>
                        <ul class="flex flex-wrap gap-8 mt-8">
                          <li class="px-8 text-(14 gray-500) font-700 bg-gray-200 rounded-8">活動公關</li>
                          <li class="px-8 text-(14 gray-500) font-700 bg-gray-200 rounded-8">創投競賽第三名</li>
                          <li class="px-8 text-(14 gray-500) font-700 bg-gray-200 rounded-8">正向</li>
                          <li class="px-8 text-(14 gray-500) font-700 bg-gray-200 rounded-8">工作認真</li>
                          <li class="px-8 text-(14 gray-500) font-700 bg-gray-200 rounded-8">親切友善</li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-16 text-gray-600 bg-([#FFF1C1] op-60) md:(flex items-center gap-16 px-40)">
            <div class="text-(base gray-500) font-700 md:(flex-none w-32)">
              履歷工具
            </div>
            <div class="grid grid-cols-2 gap-16 mt-8 md:(flex-1 grid-cols-3 gap-0) xl:grid-cols-5">
              <a
                href=""
                target="_blank"
                class="group flex items-center gap-12 md:(gap-16 px-12 h-96 rounded-16) md:hover:bg-white"
              >
                <div class="flex items-center justify-center w-32 aspect-ratio-1 overflow-hidden rounded-1/2 bg-white border border-gray-200 md:w-48 md:group-hover:bg-orange-100">
                  <img
                    src="@/assets/img/Index/icons/icon-resume-example.svg"
                    alt="履歷範本"
                    draggable="false"
                    class="w-16 md:w-24"
                  >
                </div>
                <div>
                  <div class="text-base font-700 md:group-hover:text-orange-400">履歷範本</div>
                  <div class="text-(12 gray-500) md:text-14">參考他人履歷</div>
                </div>
              </a>
              <a
                href=""
                target="_blank"
                class="group flex items-center gap-12 md:(gap-16 px-12 h-96 rounded-16) md:hover:bg-white"
              >
                <div class="flex items-center justify-center w-32 aspect-ratio-1 overflow-hidden rounded-1/2 bg-white border border-gray-200 md:w-48 md:group-hover:bg-orange-100">
                  <img
                    src="@/assets/img/Index/icons/icon-resume-ai.svg"
                    alt="AI履歷健診"
                    draggable="false"
                    class="w-16 md:w-24"
                  >
                </div>
                <div>
                  <div class="text-base font-700 md:group-hover:text-orange-400">AI履歷健診</div>
                  <div class="text-(12 gray-500) md:text-14">一鍵分析找優化方向</div>
                </div>
              </a>
              <a
                href=""
                target="_blank"
                class="group flex items-center gap-12 md:(gap-16 px-12 h-96 rounded-16) md:hover:bg-white"
              >
                <div class="flex items-center justify-center w-32 aspect-ratio-1 overflow-hidden rounded-1/2 bg-white border border-gray-200 md:w-48 md:group-hover:bg-orange-100">
                  <img
                    src="@/assets/img/Index/icons/icon-resume-check.svg"
                    alt="真人履歷健診"
                    draggable="false"
                    class="w-16 md:w-24"
                  >
                </div>
                <div>
                  <div class="text-base font-700 md:group-hover:text-orange-400">真人履歷健診</div>
                  <div class="text-(12 gray-500) md:text-14">一對一免費線上健診</div>
                </div>
              </a>
              <a
                href=""
                target="_blank"
                class="group flex items-center gap-12 md:(gap-16 px-12 h-96 rounded-16) md:hover:bg-white"
              >
                <div class="flex items-center justify-center w-32 aspect-ratio-1 overflow-hidden rounded-1/2 bg-white border border-gray-200 md:w-48 md:group-hover:bg-orange-100">
                  <img
                    src="@/assets/img/Index/icons/icon-resume-article.svg"
                    alt="履歷面試教學"
                    draggable="false"
                    class="w-16 md:w-24"
                  >
                </div>
                <div>
                  <div class="text-base font-700 md:group-hover:text-orange-400">履歷面試教學</div>
                  <div class="text-(12 gray-500) md:text-14">豐富的履歷教學文章</div>
                </div>
              </a>
              <a
                href=""
                target="_blank"
                class="group flex items-center gap-12 md:(gap-16 px-12 h-96 rounded-16) md:hover:bg-white"
              >
                <div class="flex items-center justify-center w-32 aspect-ratio-1 overflow-hidden rounded-1/2 bg-white border border-gray-200 md:w-48 md:group-hover:bg-orange-100">
                  <img
                    src="@/assets/img/Index/icons/icon-resume-tutorial.svg"
                    alt="求職衝刺班"
                    draggable="false"
                    class="w-16 md:w-24"
                  >
                </div>
                <div>
                  <div class="text-base font-700 md:group-hover:text-orange-400">求職衝刺班</div>
                  <div class="text-(12 gray-500) md:text-14">履歷面試線上課程</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <div class="Index__help bg-([url(@/assets/img/Index/bg-wave-lake.png)] repeat-x) pt-60 -mt-60">
      <div class="bg-([url(@/assets/img/Index/bg-qa.png)] cover top repeat-y) pb-60 bg-lake-200">
        <div class="text-(36 [#FFF1C1] center) leading-44 family-Bungee md:pt-20">
          GET HELP
        </div>
        <h2 class="text-(20 white center) font-700">
          有職場疑問？我們為你解答
        </h2>
        <div
          v-if="false"
          class="loading mt-24 h-328 md:h-372"
        ></div>
        <div
          v-else
          class="layout-container grid grid-cols-1 gap-y-8 mt-24 px-16 md:(grid-cols-2 gap-y-12 mt-32)"
        >
          <a
            v-for="n in 8"
            :key="n"
            href=""
            target="_blank"
            class="group flex gap-12 px-20 py-12 bg-white rounded-44 [&:nth-child(n+5)]:hidden md:(px-32 py-16 [&:nth-child(n+5)]:flex [&:nth-child(4n+1)]:mr-100 [&:nth-child(4n+2)]:mr-100 [&:nth-child(4n+3)]:ml-100 [&:nth-child(4n)]:ml-100)"
          >
            <div class="text-(44 [#D1ECEA]) leading-52 family-Bungee">Q</div>
            <div class="min-w-0">
              <div class="text-(16 gray-600) leading-24 font-700 line-clamp-1 md:group-hover:text-lake-200">讀到的科系沒錢途怎麼辦？</div>
              <div class="flex items-center gap-4 flex-wrap mt-4">
                <div class="flex">
                  <div class="w-24 aspect-1 overflow-hidden border border-white rounded-1/2 z-3">
                    <img
                      src="@/assets/img/default-img.png"
                      alt="頭貼"
                      draggable="false"
                      class="object-cover w-full h-full"
                    >
                  </div>
                  <div class="-ml-8 w-24 aspect-1 overflow-hidden border border-white rounded-1/2 z-2">
                    <img
                      src="@/assets/img/default-img.png"
                      alt="頭貼"
                      draggable="false"
                      class="object-cover w-full h-full"
                    >
                  </div>
                  <div class="-ml-8 w-24 aspect-1 overflow-hidden border border-white rounded-1/2 z-1">
                    <img
                      src="@/assets/img/default-img.png"
                      alt="頭貼"
                      draggable="false"
                      class="object-cover w-full h-full"
                    >
                  </div>
                </div>
                <div class="text-(14 gray-500)">11 回答<span class="ml-10">觀看1,974</span></div>
              </div>
            </div>
          </a>
        </div>
        <div class="flex justify-center mt-24">
          <a
            href=""
            target="_blank"
            class="inline-block px-16 text-(base white) font-700 border border-white rounded-4 md:px-32"
          >更多職場問答</a>
        </div>
      </div>
    </div>
    <div
      ref="$anchor_news"
      class="-top-90 relative md:top-unset"
    ></div>
    <div class="Index__news pt-40 pb-100 bg-white md:pb-120">
      <div class="text-(36 lake-200 center) leading-44 family-Bungee">
        NEWS
      </div>
      <h2 class="text-(20 gray-600 center) font-700">
        產業新訊
      </h2>
      <div class="mt-20 md:mt-32">
        <div class="ArticleGallery h-720 text-16 border">
          ArticleGallery
        </div>
      </div>
      <div class="flex justify-center mt-24 md:mt-32">
        <a
          href=""
          target="_blank"
          class="inline-block px-16 text-(base lake-200) font-700 border border-lake-200 rounded-4 md:px-32"
        >更多產業新訊</a>
      </div>
    </div>
    <div class="Index__follow md:(pt-60 -mt-60 bg-([url(@/assets/img/Index/bg-wave-lake.png)] repeat-x))">
      <div class="py-40 bg-lake-200 md:(pt-0 pb-60)">
        <div class="text-(36 [#FFF1C1] center) leading-44 family-Bungee">
          FOLLOW US
        </div>
        <h2 class="text-(20 white center) font-700">
          關注動態
        </h2>
        <ul class="layout-container mt-16 px-16 py-20 bg-white rounded-16 md:(px-40 py-24)">
          <li>
            <div class="flex flex-col gap-12 mx-auto md:(flex-row items-center gap-32 max-w-1120)">
              <div class="ChannelInfo h-112 border md:(w-300 h-312)">
                ChannelInfo
              </div>
              <div class="min-w-0 flex-1">
                <div class="text-base font-700">
                  最新貼文
                </div>
                <div class="PostGallery h-188 border md:h-250">
                  PostGallery
                </div>
              </div>
            </div>
          </li>
          <li class="mt-16 pt-16 border-(t gray-300) md:(mt-24 pt-24)">
            <div class="flex flex-col gap-12 mx-auto md:(flex-row items-center gap-32 max-w-1120)">
              <div class="ChannelInfo h-112 border md:(w-300 h-312)">
                ChannelInfo
              </div>
              <div class="min-w-0 flex-1">
                <div class="text-base font-700">
                  最新單集
                </div>
                <div class="PodcastEpisodes h-238 border md:h-272">
                  PodcastEpisodes
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref, computed 
} from 'vue'
import { useElementBounding } from '@vueuse/core'
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'

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

    &__help {
      .layout-container {
        a:hover {
          box-shadow: 0px 2px 16px 0px rgba(0, 122, 129, .8);
        }
      }
    }
  }
}

@screen xl {
  .Index {
    background-size: 100% 225px, 100% 630px, 100% auto;
  }
}
</style>