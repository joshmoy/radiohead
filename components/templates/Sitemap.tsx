import { FC } from 'react'
import { Box, Container, Flex, Text } from '@chakra-ui/react'
import { logoIcon } from '@components/Svgs'
import { sidemapData } from 'data/sitemapData'
const Sitemap: FC = () => {
  return (
    <Box bgColor="brand.secondary" p="3.6rem 0 9.2rem">
      <Container maxW="144rem" m="0 auto" p="0">
        <Flex px={{ base: '3rem', lg: '15rem' }} flexDir={{ base: 'column', lg: 'row' }}>
          <Box w={{ base: '100%', lg: '45%' }}>
            <Box sx={{ svg: { width: '18rem' } }}>{logoIcon}</Box>
            <Text mt="3.37rem" w="37rem" color="rgba(249, 248, 255, 0.25)">
              Radiohead is the first global music streaming service with high fidelity sound, hi-def
              video quality, along with expertly curated playlists and original content making it a
              trusted source for music and culture.
            </Text>
          </Box>
          <Flex
            justify="space-between"
            flexWrap="wrap"
            w={{ base: '100%', lg: '55%' }}
            mt={{ base: '2rem', lg: '0' }}>
            {sidemapData?.map((el, id) => (
              <Box key={id}>
                <Text
                  color="brand.gray"
                  fontSize={{ base: '1.6rem', lg: '2.4rem' }}
                  fontWeight="500">
                  {el.title}
                </Text>
                <Box mt="1.65rem">
                  {el.links?.map((link, idx) => (
                    <Text
                      key={idx}
                      color="brand.white"
                      fontSize={{ base: '1.3rem', lg: '1.8rem' }}
                      fontWeight="500"
                      cursor="pointer"
                      transition=".5s"
                      _hover={{ textDecor: 'underline' }}
                      _notLast={{ mb: '1.275rem' }}>
                      {link}
                    </Text>
                  ))}
                </Box>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Sitemap
