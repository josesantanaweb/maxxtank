/* eslint-disable @typescript-eslint/no-explicit-any */
import { Color, getIsBaseColor, ValueFormatter } from '../types'

export const defaultValueFormatter: ValueFormatter = (value: number) => value.toString()

export const currencyValueFormatter: ValueFormatter = (e: number) => `$ ${Intl.NumberFormat('en-US').format(e)}`

export const sumNumericArray = (arr: number[]) => arr.reduce((prefixSum, num) => prefixSum + num, 0)

export const isValueInArray = (value: any, array: any[]): boolean => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true
    }
  }
  return false
}

export function mergeRefs<T = any>(refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref != null) {
        ;(ref as React.MutableRefObject<T | null>).current = value
      }
    })
  }
}

export function makeClassName(componentName: string) {
  return (className: string) => {
    return `js-${componentName}-${className}`
  }
}

interface ColorClassNames {
  bgColor: string
  hoverBgColor: string
  selectBgColor: string
  textColor: string
  selectTextColor: string
  hoverTextColor: string
  borderColor: string
  selectBorderColor: string
  hoverBorderColor: string
  ringColor: string
  strokeColor: string
  fillColor: string
}

const getIsArbitraryColor = (color: Color | string) =>
  color.includes('#') || color.includes('--') || color.includes('rgb')

/**
 * Returns an object containing CSS class names for various color properties based on the provided color and shade.
 * @param color - The color value or name.
 * @param shade - The shade value (optional).
 * @returns An object containing CSS class names for color properties.
 *
 * @example
 * getColorClassNames('blue', 500);
 * // Returns:
 * // {
 * //   bgColor: 'bg-blue-500',
 * //   hoverBgColor: 'hover:bg-blue-500',
 * //   selectBgColor: 'ui-selected:bg-blue-500',
 * //   textColor: 'text-blue-500',
 * //   selectTextColor: 'ui-selected:text-blue-500',
 * //   hoverTextColor: 'hover:text-blue-500',
 * //   borderColor: 'border-blue-500',
 * //   selectBorderColor: 'ui-selected:border-blue-500',
 * //   hoverBorderColor: 'hover:border-blue-500',
 * //   ringColor: 'ring-blue-500',
 * //   strokeColor: 'stroke-blue-500',
 * //   fillColor: 'fill-blue-500'
 * // }
 */
export function getColorClassNames(color: Color | string, shade?: number): ColorClassNames {
  const isBaseColor = getIsBaseColor(color)
  if (color === 'white' || color === 'black' || color === 'transparent' || !shade || !isBaseColor) {
    const unshadedColor = !getIsArbitraryColor(color) ? color : `[${color}]`
    return {
      bgColor: `bg-${unshadedColor}`,
      hoverBgColor: `hover:bg-${unshadedColor}`,
      selectBgColor: `ui-selected:bg-${unshadedColor}`,
      textColor: `text-${unshadedColor}`,
      selectTextColor: `ui-selected:text-${unshadedColor}`,
      hoverTextColor: `hover:text-${unshadedColor}`,
      borderColor: `border-${unshadedColor}`,
      selectBorderColor: `ui-selected:border-${unshadedColor}`,
      hoverBorderColor: `hover:border-${unshadedColor}`,
      ringColor: `ring-${unshadedColor}`,
      strokeColor: `stroke-${unshadedColor}`,
      fillColor: `fill-${unshadedColor}`,
    }
  }
  return {
    bgColor: `bg-${color}-${shade}`,
    selectBgColor: `ui-selected:bg-${color}-${shade}`,
    hoverBgColor: `hover:bg-${color}-${shade}`,
    textColor: `text-${color}-${shade}`,
    selectTextColor: `ui-selected:text-${color}-${shade}`,
    hoverTextColor: `hover:text-${color}-${shade}`,
    borderColor: `border-${color}-${shade}`,
    selectBorderColor: `ui-selected:border-${color}-${shade}`,
    hoverBorderColor: `hover:border-${color}-${shade}`,
    ringColor: `ring-${color}-${shade}`,
    strokeColor: `stroke-${color}-${shade}`,
    fillColor: `fill-${color}-${shade}`,
  }
}
