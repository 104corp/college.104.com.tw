import { useError } from '@/stores/Error.js'

export const errorHandler = (errorConfig) => {
  const errorStore = useError()
  errorStore.execute(errorConfig)
}