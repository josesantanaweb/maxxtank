export type ValueFormatter = {
  (value: number): string
}

const iconVariantValues = ['simple', 'light', 'shadow', 'solid', 'outlined'] as const

export type IconVariant = (typeof iconVariantValues)[number]

export type HorizontalPosition = 'left' | 'right'

export type VerticalPosition = 'top' | 'bottom'

export type ButtonVariant = 'primary' | 'outline' | 'light'

const sizeValues = ['xs', 'sm', 'md', 'lg', 'xl'] as const

export type Size = (typeof sizeValues)[number]

const colorValues = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const

export type Color = (typeof colorValues)[number]
export type CustomColor = Color | string
export const getIsBaseColor = (color: Color | string) => colorValues.includes(color as Color)