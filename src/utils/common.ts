/**
 * @func 获取随机数
 * @author yyc
 */
export const getRandom = () => {
  return Math.random().toString(16).substring(2)
}

// 判断是否是浏览器
export const inBrowser = typeof window !== 'undefined'
