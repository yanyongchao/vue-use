import { createUseStorageState } from '../createUseStorageState'

export function useLocalStorageState<T = any> (key: string, defaultValue: T) {
  return createUseStorageState('localStorage', key, defaultValue)
}