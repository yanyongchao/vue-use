import { createUseStorageState } from '../createUseStorageState'

export function useSessionStorageState<T = any> (key: string, defaultValue: T) {
  return createUseStorageState('sessionStorage', key, defaultValue)
}