import { getRandom } from '../utils/common'

type PollingParams = {
  time?: number
  cb: Function
  isAsync?: boolean
}

export function usePolling () {
  const timerObj: AnyObject = {}

  const startPolling = ({ time = 1000, cb, isAsync = true }: PollingParams) => {
    if (!cb || !(cb instanceof Function)) {
      // cb为函数
      throw Error('cb is require and is a function')
    }

    const uniqueKey = getRandom()

    timerObj[uniqueKey] = true

    let timerFn = () => {
      if (!timerObj[uniqueKey]) {
        console.log(`ID为 ${uniqueKey} 的定时器轮询已被清除`)
        return
      }
      if (isAsync) {
        // 异步
        // console.log('Async polling start')
        cb()
        setTimeout(timerFn, time)
      } else {
        // 同步
        // console.log('Wait polling start')
        cb().then(() => {
          setTimeout(timerFn, time)
        })
      }
    }

    timerFn()

    return () => {
      delete timerObj[uniqueKey]
    }
  }

  return {
    startPolling
  }
}