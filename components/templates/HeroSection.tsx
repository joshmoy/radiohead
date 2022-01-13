import { FC } from 'react'
import { Container, Flex, Text, Button, Box } from '@chakra-ui/react'
import { appleIcon, playstoreIcon } from '@components/Svgs'

const HeroSection: FC = () => {
  return (
    <Flex
      justify="center"
      h={{ base: '60vh', lg: '80vh' }}
      direction="column"
      bg={`url(/images/bg.png)`}
      bgColor="brand.main"
      bgSize="100% 100%">
      <Container
        maxW="144rem"
        m="0 auto"
        pl={{ base: '3rem', lg: '15rem' }}
        pr={{ base: '3rem', lg: '0' }}>
        <Text
          as="h1"
          color="brand.white"
          fontSize={{ base: '2.4rem', lg: '3.6rem' }}
          fontWeight="500"
          lineHeight={{ base: '3rem', lg: '5.5rem' }}
          w={{ lg: '45rem' }}>
          Discover, search, and play any song featuring voice control.
        </Text>
        <Button
          color="brand.white"
          borderRadius=".4rem"
          h="4rem"
          w="15.8rem"
          mt="3rem"
          bgColor="brand.purple"
          _hover={{ bgColor: 'brand.purple', opacity: 0.7 }}
          _active={{ boxShadow: 'none' }}>
          Try it free
        </Button>
        <Flex mt="3rem">
          <Flex
            w="10.8rem"
            h="4rem"
            bgColor="#000"
            borderRadius=".5rem"
            p="0 .7rem"
            mr="1.4rem"
            cursor="pointer"
            justify="space-between"
            align="center">
            <Box sx={{ svg: { width: '2rem' } }}>{appleIcon}</Box>
            <Box>
              <Text color="brand.white" fontSize=".7rem" fontWeight="500">
                Download on the
              </Text>
              <Text color="brand.white" fontSize="1.3rem" fontWeight="500" lineHeight="1.5rem">
                App Store
              </Text>
            </Box>
          </Flex>
          <Flex
            w="12rem"
            h="4rem"
            bgColor="#000"
            borderRadius=".5rem"
            p="0 .7rem"
            cursor="pointer"
            justify="space-between"
            align="center">
            <Box sx={{ svg: { width: '2rem' } }}>{playstoreIcon}</Box>
            <Box>
              <Text color="brand.white" fontSize=".7rem" fontWeight="500">
                GET IT ON
              </Text>
              <Text color="brand.white" fontSize="1.3rem" fontWeight="500" lineHeight="1.5rem">
                Google Play
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export { HeroSection }
