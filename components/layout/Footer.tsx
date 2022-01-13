import { Box, Container, Flex } from '@chakra-ui/react'
import { facebookIcon, instagramIcon, twitterIcon } from '@components/Svgs'
import { FC } from 'react'
const Footer: FC = () => {
  return (
    <Box h="7.5rem" w="100vw" bgColor="brand.main">
      <Container maxW="144rem" m="0 auto" h="full" p="0">
        <Flex justify="center" align="center" h="full">
          <Box
            sx={{ svg: { width: '2.4rem' } }}
            cursor="pointer"
            mr={{ base: '2rem', lg: '7.5rem' }}>
            {instagramIcon}
          </Box>
          <Box
            sx={{ svg: { width: '1.2rem' } }}
            cursor="pointer"
            mr={{ base: '2rem', lg: '7.5rem' }}>
            {facebookIcon}
          </Box>
          <Box sx={{ svg: { width: '2.4rem' } }} cursor="pointer">
            {twitterIcon}
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
