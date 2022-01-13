import React, { ReactChild } from 'react'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '@components/layout'
import { Clients, FeaturedPlaylist, HeroSection, Playlist } from '@components/templates'
import { Features } from '@components/templates/Features'
import Sitemap from '@components/templates/Sitemap'

const Home = (): ReactChild => {
  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <HeroSection />
        <Clients />
        <FeaturedPlaylist />
        <Playlist />
        <Features />
        <Sitemap />
      </Layout>
    </Box>
  )
}

export default Home
