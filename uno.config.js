import {
  defineConfig, 
  transformerDirectives, 
  transformerVariantGroup,
  presetIcons,
  presetWind
} from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ],
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        icon: FileSystemIconLoader(
          './src/assets/icons',
          svg => svg.replace(/#7E7E7E/, 'currentColor')
        )
      }
    })
  ],
  theme: {
    breakpoints: {
      sm: '360px',
      md: '1024px',
      lg: '1366px',
      xl: '1680px'
    },
    colors: {
      black: '#000',
      white: '#fff',
  
      gray: {
        100: '#F3F3F3',
        200: '#EEEEEE',
        300: '#DDDDDD',
        400: '#A9A9A9',
        500: '#7E7E7E',
        600: '#292929'
      },
      red: {
        100: '#FFE9EC',
        200: '#EA475B'
      },
      orange: {
        100: '#FFEEDF',
        200: '#FFD6B2',
        300: '#FF9100',
        400: '#FF7800'
      },
      lake: {
        100: '#39C8D0',
        200: '#00AFB8'
      },
      green: {
        100: '#92CF53',
        200: '#6FB827'
      },
      yellow: {
        100: '#FFC31B',
      },
      blue: {
        100: '#4E91FF',
        200: '#1654B9'
      },
      purple: {
        100: '#78269F'
      }
    },
    fontSize: {
      12: [ '12px', { 'line-height': '18px' } ],
      14: [ '14px', { 'line-height': '20px' } ],
      16: [ '16px', { 'line-height': '22px' } ],
      base: [ '16px', { 'line-height': '28px' } ],
      18: [ '18px', { 'line-height': '24px' } ],
      20: [ '20px', { 'line-height': '28px' } ],
      24: [ '24px', { 'line-height': '32px' } ]
    },
    boxShadow: {
      'card-gray': '0px 2px 8px 0px rgba(126, 126, 126, 0.20)',
      'button-gray': '0px 0px 8px 0px rgba(41, 41, 41, 0.20)'
    }
  },
  shortcuts: [
    {
      'layout-container': 'mx-auto max-w-full md:max-w-960 lg:max-w-1200 xl:max-w-1440',
      'btn': 'inline-block rounded-4 cursor-pointer',
      'btn-primary': 'bg-orange-300 border-orange-300 text-white hover:(bg-orange-400 border-orange-400)'
    },
    [
      /^tag-primary-(.*)-(.*)$/, 
      ([ , color, level ]) => 
        `bg-transparent text-${ color }-${ level } border-${ color }-${ level } inline-block border rounded-12 py-2 px-7 text-14`
    ]
  ],
  rules: [
    [
      /^family-([a-zA-Z_]*)$/,
      ([ , name ]) => {
        name = name.replace('_', ' ')
        return {
          'font-family': `${ name }, Arial, 'Microsoft JhengHei Modify', '微軟正黑體',
          'Microsoft JhengHei', Roboto, 'PingFangTC', sans-serif`,
        }
      }
    ]
  ]
})