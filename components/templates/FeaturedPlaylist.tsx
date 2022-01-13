import { FC } from 'react'
import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { arrowIcon } from '@components/Svgs'

const FeaturedPlaylist: FC = () => {
  const songData = [1, 2, 3, 4, 5, 6]
  return (
    <Box bgColor="brand.main" boxShadow="inset 0px 30px 20px rgba(26, 26, 26, 0.25)" py="6rem">
      <Container maxW="144rem" m="0 auto" p="0">
        <Flex
          px={{ base: '3rem', lg: '15rem' }}
          align="center"
          flexDir={{ base: 'column-reverse', lg: 'row' }}>
          <SimpleGrid columns={3} spacing={22.5}>
            {songData.map((_el, id) => (
              <Box
                key={id}
                boxSize={{ base: '10rem', sm: '15rem', md: '20rem', lg: '18.75rem' }}
                bg={`url(/images/song${id + 1}.png)`}
                bgRepeat="no-repeat"
                bgSize="contain"
                borderRadius="0.5rem"></Box>
            ))}
          </SimpleGrid>
          <Box ml={{ lg: '7.5rem' }} w={{ base: '100%', lg: '40%' }}>
            <Text
              color="brand.white"
              fontSize={{ base: '2.4rem', lg: '3.6rem' }}
              fontWeight="500"
              lineHeight={{ base: '3rem', lg: '5.5rem' }}>
              The music you love
            </Text>
            <Text
              color="brand.gray"
              fontSize={{ base: '1.4rem', lg: '1.8rem' }}
              fontWeight="500"
              lineHeight={{ base: '2.4rem', lg: '2.8rem' }}
              mt="1.7rem">
              With over 60 million tracks and tons of exclusive interviews and videos, TIDAL is here
              to bring you closer to the artists you listen to.
            </Text>
            <Flex mt="1rem" align="center" mb={{ base: '2rem', lg: '0' }}>
              <Box sx={{ svg: { width: '1rem' } }} mr="1.5rem">
                {arrowIcon}
              </Box>
              <Text
                color="brand.purple"
                fontSize={{ base: '1.4rem', lg: '1.8rem' }}
                fontWeight="800">
                More Featured Content
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export { FeaturedPlaylist }
