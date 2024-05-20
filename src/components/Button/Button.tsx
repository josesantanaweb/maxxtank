'use client'
import { HorizontalPositions, Sizes } from '@/constants'
import { merge } from '@/lib'
import { ButtonVariant, Color, HorizontalPosition, Size } from '@/types'
import React from 'react'
import { getButtonColors, getButtonProportions } from './styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string
  iconPosition?: HorizontalPosition
  iconSize?: Size
  size?: Size
  color?: Color
  variant?: ButtonVariant
  disabled?: boolean
  loading?: boolean
  loadingText?: string
  // tooltip?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size = Sizes.SM,
    color,
    variant = 'primary',
    disabled,
    children,
    className,
    icon,
    iconPosition = HorizontalPositions.Left,
    iconSize = Sizes.MD,
    ...other
  } = props

  const IconSize = `text-${iconSize}`
  const Icon = `icon-${icon} ${IconSize}`
  const isDisabled = disabled
  const buttonColorStyles = getButtonColors(variant, color)
  const buttonProportionStyles = getButtonProportions(variant)[size]

  /**
   *
   * TODO:
   * - [] Add tooltip support
   * - [] Add tooltip props
   */

  return (
    <button
      // ref={mergeRefs([ref, tooltipProps.refs.setReference])}
      className={merge(
        'shrink-0 inline-flex justify-center items-center group font-medium outline-none gap-1 rounded-md border',
        buttonProportionStyles.paddingX,
        buttonProportionStyles.paddingY,
        buttonProportionStyles.fontSize,
        buttonColorStyles?.textColor,
        buttonColorStyles?.bgColor,
        buttonColorStyles?.borderColor,
        buttonColorStyles?.hoverBorderColor,
        !isDisabled
          ? merge(
              getButtonColors(variant, color)?.hoverTextColor ?? '',
              getButtonColors(variant, color)?.hoverBgColor ?? '',
              getButtonColors(variant, color)?.hoverBorderColor ?? ''
            )
          : 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={isDisabled}
      // {...getReferenceProps}
      {...other}
    >
      {icon && iconPosition === HorizontalPositions.Left && <span className={Icon}></span>}
      {children}
      {icon && iconPosition === HorizontalPositions.Right && <span className={Icon}></span>}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
