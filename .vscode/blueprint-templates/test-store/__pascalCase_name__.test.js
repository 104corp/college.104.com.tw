import { createTestingPinia } from '@pinia/testing'
import { use{{ pascalCase name }} } from '@/stores/{{ pascalCase name }}.js'

const pinia = createTestingPinia({ stubActions: false })
const store = use{{ pascalCase name }}('{{ pascalCase name }}', pinia)

describe('{{ pascalCase name }}', () => {
  it('', () => {
  })
})