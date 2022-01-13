import { Flex, Container, Box } from '@chakra-ui/react'
import {
  blackBerryIcon,
  playStationIcon,
  redbullIcon,
  seinheserIcon,
  tiktokIcon
} from '@components/Svgs'
import { FC } from 'react'

const Clients: FC = () => {
  return (
    <Flex h="13rem" w="100vw" bgColor="brand.secondary">
      <Container maxW="144rem" m="0 auto" h="full" p="0">
        <Flex
          justify="space-between"
          px={{ base: '3rem', lg: '15rem' }}
          align="center"
          h="full"
          flexWrap="wrap">
          <Box sx={{ svg: { width: '13rem' } }}>{playStationIcon}</Box>
          <Box sx={{ svg: { width: '13rem' } }}>{blackBerryIcon}</Box>
          <Box sx={{ svg: { width: '10rem' } }}>{redbullIcon}</Box>
          <Box sx={{ svg: { width: '10rem' } }}>{tiktokIcon}</Box>
          <Box sx={{ svg: { width: '17rem' } }}>{seinheserIcon}</Box>
        </Flex>
      </Container>
    </Flex>
  )
}

export { Clients }
