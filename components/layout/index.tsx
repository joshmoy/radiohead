import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box bgColor="brand.main">{children}</Box>
      <Footer />
    </Box>
  )
}

export default Layout
