import React from 'react';
import {Flex, Stack, Box, Heading, chakra } from '@chakra-ui/react'

const Hero = () => {
    return (
        <Box
        w="full"
        h="60"
        backgroundImage="url(https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)"
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["2xl","3xl"]}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            >
              Build Your new{" "}
              <chakra.span color="blue.400" textDecor="underline">
                Saas
              </chakra.span>
            </Heading>
            <chakra.p
              w="fit-content"
              color="white"
            >
              Start project
            </chakra.p>
          </Stack>
        </Flex>
      </Box>
    )
}

export default Hero
