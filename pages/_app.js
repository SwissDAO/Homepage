import '../styles/globals.css'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '../styles/theme/chakra_theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}


export default MyApp
