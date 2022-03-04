import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    white: {
      "50": "#F5F8FA"
    },
    black: {
      "50": "#47585B"
    },
    yellow: {
      "900": "#FFBA08"
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
  styles: {
    global: {
      body: {
        bg: 'white.50',
        color: 'black.50'
      }
    }
  }
})