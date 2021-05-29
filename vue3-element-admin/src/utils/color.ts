import color from 'css-color-function'
import { formula, IObject } from './constants'

// 转换成不同色调的rgb颜色值
// https://www.w3cplus.com/css/the-power-of-rgba.html
export const generateColors = (primary: string): IObject => {
  const colors = {} as IObject
  Object.keys(formula).forEach(key => {
    // element ui 主题色 渐变色设计 https://juejin.cn/post/6844903960218697741
    // 根据主题色生成渐变色 将formula对象中字符primary 替换成我们所选的主题色
    const value = formula[key].replace(/primary/g, primary)
    colors[key] = color.convert(value) // 转换成rgba颜色值
  })
  return colors
}

// 主题色的渐变色设计 https://juejin.cn/post/6844903960218697741
// color-mod css颜色函数
// https://www.w3cplus.com/css4/color-mod.html
// export const formula: IObject = {
//   'shade-1': 'color(primary shade(10%))',
//   'light-1': 'color(primary tint(10%))',
//   'light-2': 'color(primary tint(20%))',
//   'light-3': 'color(primary tint(30%))',
//   'light-4': 'color(primary tint(40%))',
//   'light-5': 'color(primary tint(50%))',
//   'light-6': 'color(primary tint(60%))',
//   'light-7': 'color(primary tint(70%))',
//   'light-8': 'color(primary tint(80%))',
//   'light-9': 'color(primary tint(90%))'
// }
