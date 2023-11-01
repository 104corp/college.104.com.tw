import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'

export const use{{ pascalCase name }} = (id = '{{ pascalCase name }}', pinia) => {
  return defineStore(id, () => {
    const _{{$欄位名稱}} = ref({{$欄位初始值}})
  
    const {{$欄位名稱}} = computed(() => _{{$欄位名稱}}.value)
    const {{$action}} = async () => {
      const result = {}
  
      _{{$欄位名稱}}.value = result
  
      return result
    }
  
    return {
      {{$欄位名稱}},
      {{$action}}
    }
  })(pinia)
}