import React from 'react';
import {Flex, Stack, Box } from '@chakra-ui/react'

const Hero = () => {
    return (
        <Box
        w="full"
        h="80"
        backgroundImage="url(https://images.unsplash.com/photo-1518291344630-4857135fb581?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)"
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
        >
          <Stack textAlign="center" alignItems="center" spacing={2}>
            <h2 className="hiroTitle">
              Bienvenue à Cantina Geek
            </h2>
            <p className="subTitle">
              une application de recettes de cuisine pour les padawan en cuisine
            </p>
          </Stack>
        </Flex>
      </Box>
    )
}

export default Hero
