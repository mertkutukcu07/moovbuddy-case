import { colors } from './colors'
import { radius } from './radius'
import { shadows } from './shadows'
import { spacing } from './spacing'
import { typography } from './typography'

export const theme = {
    colors,
    spacing,
    typography,
    radius,
    shadows,
}

export type ThemeColors = typeof colors
export type ThemeSpacing = typeof spacing
export type ThemeTypography = typeof typography
export type ThemeRadius = typeof radius
export type ThemeShadows = typeof shadows
export type Theme = typeof theme
