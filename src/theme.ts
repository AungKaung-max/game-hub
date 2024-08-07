// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
}

// 3. extend the theme
const theme = extendTheme({ config,
  colors: {
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      200: '#d3d3d3',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#6c6c6c',
      700: '#202020',
      800: '#121212',
      900: '#111'
    },
    red: {
      50: '#ffe5e5',
      100: '#fbb5b5',
      200: '#f78585',
      300: '#f45555',
      400: '#f12525',
      500: '#e80000',
      600: '#b80000',
      700: '#880000',
      800: '#580000',
      900: '#280000',
    },
  }

 })

export default theme