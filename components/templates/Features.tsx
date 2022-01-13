import { FC } from 'react'
import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { featuresData } from 'data/featuresData'

const Features: FC = () => {
  return (
    <Box
      bgColor="brand.main"
      boxShadow="inset 0px 30px 20px rgba(26, 26, 26, 0.25)"
      py="6rem"
      mt="2rem">
      <Container maxW="144rem" m="0 auto" p="0">
        <Box px={{ base: '3rem', lg: '15rem' }}>
          <Text
            color="brand.white"
            fontSize={{ base: '2.4rem', lg: '3.6rem' }}
            fontWeight="500"
            lineHeight={{ base: '3rem', lg: '5.5rem' }}>
            Why radiohead?
          </Text>
          <SimpleGrid mt="3.4rem" columns={{ sm: 1, lg: 2 }} spacingY="4rem">
            {featuresData?.map((el, id) => (
              <Box key={id}>
                <Flex align="center">
                  <Box
                    w="0.375rem"
                    h="3.6rem"
                    bgColor="brand.purple"
                    borderRadius="0.25rem"
                    mr="1.2rem"
                  />
                  <Text
                    fontWeight="800"
                    fontSize={{ base: '1.8rem', lg: '2.4rem' }}
                    color="brand.white">
                    {el.title}
                  </Text>
                </Flex>
                <Box m={{ base: '1.5rem 0 0 1.7rem', lg: '3rem 0 0 1.7rem' }}>
                  <Text
                    fontWeight="500"
                    fontSize={{ base: '1.4rem', lg: '1.8rem' }}
                    color="brand.gray"
                    w={{ base: '100%', lg: '45rem' }}>
                    {el.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}

export { Features }
