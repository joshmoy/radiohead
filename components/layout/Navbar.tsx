import {
  Box,
  Text,
  Container,
  Flex,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent
} from '@chakra-ui/react'
import { logoIcon, MenuIcon } from '@components/Svgs'
import { FC, useState, useEffect } from 'react'

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

const navData = ['Contact', 'Plans', 'Blog']

const Navbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      h="9rem"
      w={{ base: '100%', lg: '100vw' }}
      bgColor="brand.secondary"
      position="fixed"
      transition=".5s"
      top={0}
      zIndex={90}>
      <Container maxW="144rem" m="0 auto" h="full" p="0">
        <Flex px={{ base: '3rem', lg: '15rem' }} h="full" align="center" justify="space-between">
          <Box sx={{ svg: { width: '18rem' } }}>{logoIcon}</Box>
          <Flex align="center" display={{ base: 'none', lg: 'flex' }}>
            <Flex mr="3.5rem">
              {navData?.map((el, id) => (
                <Text
                  key={id}
                  color="brand.white"
                  fontSize="1.8rem"
                  fontWeight="600"
                  cursor="pointer"
                  _notLast={{ mr: '3.2rem' }}>
                  {el}
                </Text>
              ))}
            </Flex>
            <Button
              color="brand.white"
              borderRadius=".4rem"
              h="4rem"
              w="12rem"
              mr="1.8rem"
              bgColor="brand.purple"
              _hover={{ bgColor: 'brand.purple', opacity: 0.7 }}
              _active={{ boxShadow: 'none' }}>
              Sign In
            </Button>
            <Button
              color="brand.purple"
              border="1px solid #7971E9"
              borderRadius=".4rem"
              h="4rem"
              w="10.8rem"
              bgColor="transparent"
              _hover={{ bgColor: 'brand.purple', opacity: 0.7, color: 'brand.white' }}
              _active={{ boxShadow: 'none' }}>
              Sign Up
            </Button>
          </Flex>
          <Flex
            boxSize="5rem"
            align="center"
            justify="center"
            display={{ base: 'flex', lg: 'none' }}
            bgColor="brand.main"
            cursor="pointer"
            onClick={onOpen}
            borderRadius="5px">
            {MenuIcon}
          </Flex>
        </Flex>
        <MobileSidebar onClose={onClose} isOpen={isOpen} />
      </Container>
    </Box>
  )
}

const MobileSidebar: FC<MenuProps> = ({ onClose, isOpen }) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
      <DrawerOverlay />
      <DrawerContent bgColor="brand.secondary">
        <Box mt="7.9rem" px="3rem">
          {navData?.map((el, id) => (
            <Flex
              key={id}
              h="7rem"
              align="center"
              px="1rem"
              borderRadius="5px"
              _active={{ bgColor: '#2b5166' }}>
              <Text
                color="#fff"
                fontWeight="600"
                mr="6.9rem"
                cursor="pointer"
                _notLast={{ mb: '2rem' }}>
                {el}
              </Text>
            </Flex>
          ))}
          <Box my="2rem">
            <Button
              color="brand.white"
              borderRadius=".4rem"
              h="4rem"
              w="12rem"
              mr="1.8rem"
              bgColor="brand.purple"
              _hover={{ bgColor: 'brand.purple', opacity: 0.7 }}
              _active={{ boxShadow: 'none' }}>
              Sign In
            </Button>
          </Box>
          <Button
            color="brand.purple"
            border="1px solid #7971E9"
            borderRadius=".4rem"
            h="4rem"
            w="12rem"
            bgColor="transparent"
            _hover={{ bgColor: 'brand.purple', opacity: 0.7, color: 'brand.white' }}
            _active={{ boxShadow: 'none' }}>
            Sign Up
          </Button>
        </Box>
      </DrawerContent>
    </Drawer>
  )
}
export default Navbar
