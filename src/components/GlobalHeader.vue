<template>
  <div
    class="GlobalHeader bg-white pt-44"
    md="pt-0"
  >
    <div
      class="px-11 py-16 fixed flex bg-white top-0 w-full h-44 items-center border-b border-gray-300 z-50"
      md="relative"
    >
      <button
        ref="$hamburger"
        class="text-(24 gray-500) w-24 h-24"
        md="hidden"
        :class="hamburgerStatus ? 'i-icon:plus rotate-45' : 'i-icon:menu'"
        @click="hamburgerToggle()"
      ></button>
      <div
        :class="hamburgerStatus ? 'flex': 'hidden'"
        class="top-44 fixed w-full h-full left-0 flex-col bg-white shadow-card-gray px-16 py-8 z-50"
        md="-top-1 px-0 py-12 text-14 absolute shadow-none h-auto w-auto ml-16 block"
      >
        <a
          v-for="link in links"
          :key="link.name"
          :href="addQuery(link.url, utm)"
          target="_blank"
          class="border-t border-gray-200 py-8 first:border-none"
          md="mr-12 border-none hover:text-orange-400 "
        >{{ link.name }}</a>
        <div
          class="block relative"
          md="inline-block"
        >
          <button
            ref="$moreMenu"
            class="hidden items-center"
            md="flex hover:(text-orange-400 font-700)"
            :class="moreMenuStatus ? 'text-orange-400 font-700' : 'text-gray-600'"
            @click="moreMenuToggle()"
          >
            更多<i
              i-icon="arrow"
              class="ml-4"
              :class="moreMenuStatus ? '-rotate-90' : 'rotate-90'"
            ></i>
          </button>
          <div
            :class="moreMenuStatus ? 'block': 'md:hidden'"
            class="top-44 w-full bg-white border-t border-gray-200
            before:(hidden content-[''] absolute bg-white shadow-button-gray w-12 h-12 -top-6 right-10 scale-80 rotate-45)
            after:(hidden content-[''] absolute top-0 bg-white w-20 h-12 right-6)"
            md="top-32 absolute right-0 bg-white w-240 rounded-4 shadow-button-gray z-30 before:block after:block"
          >
            <a
              v-for="moreLink in moreLinks"
              :key="moreLink.name"
              :href="addQuery(moreLink.url, utm)"
              class="block py-8 text-left border-t border-gray-200 first:border-none"
              md="text-center p-16 hover:text-orange-400 "
              target="_blank"
            >{{ moreLink.name }}</a>
          </div>
        </div>
      </div>
      <h1
        class="ml-16 overflow-hidden w-104 h-16"
        md="m-0 mx-auto w-152 h-24"
        bg="[url(@/assets/img/logo-campus.svg)] contain no-repeat center"
      >
        <router-link
          class="inline-block whitespace-no-wrap -translate-y-100% "
          :to="{ name: 'index' }"
        >
          104 Campus－高中職升學、探索、育才入口
        </router-link>
      </h1>
      <div class="absolute right-0 mr-16">
        <div
          v-if="storeUser.loading.getProfile"
          class="loading"
        ></div>
        <div v-else>
          <button
            v-if="storeUser.isLogin"
            ref="$profileMenu"
            @click="profileMenuToggle()"
          >
            <div
              :style="{ backgroundImage: `url(${storeUser.avatar})` }"
              class="border border-gray-200 w-32 h-32 bg-contain bg-center rounded-full"
              md="hidden"
            ></div>
            <p
              class="hidden text-14 py-12 font-700"
              md="flex items-center"
            >
              <span>{{ storeUser.profile.familyName }}{{ storeUser.profile.firstName }}</span><i
                i-icon="arrow"
                class="block rotate-90 ml-4"
              ></i>
            </p>
            <div
              v-show="profileMenuStatus"
              class="top-44 fixed right-0 z-30 h-full w-full cursor-default 
              before:(content-[''] shadow-button-gray absolute w-12 h-12 -top-6 right-26 scale-80 rotate-45)
              after:(content-[''] bg-white z-31 absolute w-12 h-12 -top-6 right-26 scale-80 rotate-45)"
              md="right-9 absolute w-240 h-auto before:right-10 after:right-10"
            >
              <div class="h-full relative bg-white rounded-4 shadow-button-gray z-31">
                <a
                  :href="storeUser.logoutUrl"
                  class="p-16 block text-left text-14 font-700 relative"
                  md="hover:text-orange-400"
                >登出</a>
              </div>
            </div>
          </button>
          <a
            v-else
            :href="storeUser.loginUrl"
            class="font-700 text-14"
            md="hover:text-orange-400"
          >登入<span
            class="hidden"
            md="inline"
          >/註冊</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  onMounted, ref 
} from 'vue'
import { onClickOutside } from '@vueuse/core'
import {
  profileUrl, mainUrl, guideUrl, nabiUrl, giverUrl
} from '@/common/domainConfig.js'
import { addQuery } from '@/utils/urlHandler.js'
import { useUser } from '@/stores/User'
import { checkDataType } from '@/utils/typeChecker.js'

const props = defineProps({
  useStore: {
    type: Function,
    default: useUser
  },
  links: {
    type: Array,
    default: () => {
      return [ 
        {
          name: '人力銀行',
          url: `${ mainUrl }jobs/main/?v=2`
        },
        {
          name: '興趣測驗',
          url: `${ guideUrl }interest/`
        },
        {
          name: '升學就業地圖',
          url: `${ guideUrl }career/`
        },
        {
          name: '學習精靈',
          url: nabiUrl
        }
      ]
    },
    validator: (val) => {
      return checkDataType([ 
        {
          name: 'string',
          url: 'string'
        } 
      ], val)
    }
  },
  moreLinks: {
    type: Array,
    default: () => {
      return [ 
        {
          name: '職業適性測驗',
          url: `${ guideUrl }personality/`
        },
        {
          name: '工作世界',
          url: `${ guideUrl }wow/`
        },
        {
          name: '職涯診所',
          url: `${ giverUrl }questionList?orderType=recommend`
        },
        {
          name: '個人品牌',
          url: profileUrl
        },
        {
          name: '所有服務',
          url: `${ mainUrl }jobs/main/sitemap`
        }
      ]
    },
    validator: (val) => {
      return checkDataType([ 
        {
          name: 'string',
          url: 'string'
        } 
      ], val)
    }
  },
  utm: {
    type: Object,
    default: () => {
      return {
        utm_source: 'cweb_studentmainpage',
        utm_medium: 'university_whitebar'
      }
    }
  }
})

const storeUser = props.useStore()

const useMenuHandler = (el) => {
  const status = ref(false)
  onClickOutside(el, () => {
    toggle(false)
  })
  const toggle = (switchTo = !status.value) => {
    status.value = switchTo
  }
  
  return {
    status, toggle 
  }
}

const $hamburger = ref(null)
const {
  status: hamburgerStatus, toggle: hamburgerToggle
} = useMenuHandler($hamburger)

const $profileMenu = ref(null)
const {
  status: profileMenuStatus, toggle: profileMenuToggle 
} = useMenuHandler($profileMenu)

const $moreMenu = ref(null)
const {
  status: moreMenuStatus, toggle: moreMenuToggle 
} = useMenuHandler($moreMenu)

onMounted(async () => {
  await storeUser.getProfile()
})
</script>

<style lang="scss">
.GlobalHeader {
  h1 {
    background-size: auto 16px;
  }
}

@screen md {
  .GlobalHeader {
    h1 {
      background-size: auto 22px;
    }
  }
}
</style>