import { FC } from 'react'
import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import { arrowIcon } from '@components/Svgs'

const Playlist: FC = () => {
  return (
    <Box
      bgColor="brand.main"
      boxShadow="inset 0px 30px 20px rgba(26, 26, 26, 0.25)"
      py="6rem"
      mt="2rem">
      <Container maxW="144rem" m="0 auto" p="0">
        <Flex
          px={{ base: '3rem', lg: '15rem' }}
          align="center"
          justify="space-between"
          flexDir={{ base: 'column', lg: 'row' }}>
          <Box w={{ base: '100%', lg: '55%' }}>
            <Text
              color="brand.white"
              fontSize={{ base: '2.4rem', lg: '3.6rem' }}
              fontWeight="500"
              lineHeight={{ base: '3rem', lg: '5.5rem' }}>
              Hand-picked playlists
            </Text>
            <Text color="brand.gray" w={{ base: '100%', lg: '70.8%' }} mt="1.7rem">
              Stream guest playlists curated by the artists you love. Also, check out our original
              playlists <br /> hand-picked by our team of experts.
            </Text>
            <Flex mt="1rem" align="center" mb={{ base: '2rem', lg: '0' }}>
              <Box sx={{ svg: { width: '1rem' } }} mr="1.5rem">
                {arrowIcon}
              </Box>
              <Text
                color="brand.purple"
                fontSize={{ base: '1.4rem', lg: '1.8rem' }}
                fontWeight="800">
                Discover Radioheat
              </Text>
            </Flex>
          </Box>
          <Flex>
            <Box w={{ base: '40%', lg: '22.2rem' }} mr="7.5rem">
              <Image
                src="/images/track1.png"
                alt="track-thumbnail"
                w="full"
                borderRadius="1.5rem"
              />
            </Box>
            <Box w={{ base: '40%', lg: '22.2rem' }}>
              <Image
                src="/images/track2.png"
                alt="track-thumbnail"
                w="full"
                borderRadius="1.5rem"
              />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export { Playlist }
