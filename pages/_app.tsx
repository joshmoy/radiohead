import React, { ReactChild } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles'
import { AppProps } from 'next/app'
import '@fontsource/poppins'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/900.css'

const App = ({ Component, pageProps }: AppProps): ReactChild => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
