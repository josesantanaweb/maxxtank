import { merge } from '@/lib'
import { colorPalette } from '@/styles/theme'
import { ButtonVariant, Color } from '@/types'
import { getColorClassNames } from '@/utils'

export const getButtonProportions = (variant: ButtonVariant) => {
  if (!(variant === 'light')) {
    return {
      xs: {
        paddingX: 'px-2.5',
        paddingY: 'py-1.5',
        fontSize: 'text-xs',
      },
      sm: {
        paddingX: 'px-4',
        paddingY: 'py-2',
        fontSize: 'text-sm',
      },
      md: {
        paddingX: 'px-4',
        paddingY: 'py-2',
        fontSize: 'text-md',
      },
      lg: {
        paddingX: 'px-4',
        paddingY: 'py-2.5',
        fontSize: 'text-lg',
      },
      xl: {
        paddingX: 'px-4',
        paddingY: 'py-3',
        fontSize: 'text-xl',
      },
    }
  }
  return {
    xs: {
      paddingX: '',
      paddingY: '',
      fontSize: 'text-xs',
    },
    sm: {
      paddingX: '',
      paddingY: '',
      fontSize: 'text-sm',
    },
    md: {
      paddingX: '',
      paddingY: '',
      fontSize: 'text-md',
    },
    lg: {
      paddingX: '',
      paddingY: '',
      fontSize: 'text-lg',
    },
    xl: {
      paddingX: '',
      paddingY: '',
      fontSize: 'text-xl',
    },
  }
}

export const getButtonColors = (variant: ButtonVariant, color?: Color) => {
  switch (variant) {
    case 'primary':
      return {
        textColor: color ? getColorClassNames('white').textColor : 'text-white dark:text-white',
        hoverTextColor: color ? getColorClassNames('white').textColor : 'text-white dark:text-white',
        bgColor: color
          ? getColorClassNames(color, colorPalette.background).bgColor
          : 'bg-blue-500 dark:bg-dark-blue-500',
        hoverBgColor: color
          ? getColorClassNames(color, colorPalette.darkBackground).hoverBgColor
          : 'hover:bg-blue-400 dark:hover:bg-300',
        borderColor: color
          ? getColorClassNames(color, colorPalette.border).borderColor
          : 'border-tremor-brand dark:border-dark-tremor-brand',
        hoverBorderColor: color
          ? getColorClassNames(color, colorPalette.darkBorder).hoverBorderColor
          : 'hover:border-tremor-brand-emphasis dark:hover:border-dark-tremor-brand-emphasis',
      }
    case 'outline':
      return {
        textColor: color ? getColorClassNames(color, colorPalette.text).textColor : 'text-blue-500 dark:text-blue-500',
        hoverTextColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : 'hover:text-blue-400 dark:hover:text-dark-blue-400 ',
        bgColor: getColorClassNames('transparent').bgColor,
        hoverBgColor: color
          ? merge(
              getColorClassNames(color, colorPalette.background).hoverBgColor,
              'hover:bg-opacity-20 dark:hover:bg-opacity-20'
            )
          : 'hover:bg-red-500 dark:hover:bg-dark-red-500',
        borderColor: color
          ? getColorClassNames(color, colorPalette.border).borderColor
          : 'border-blue-500 dark:border-dark-blue-500',
      }
  }
}
