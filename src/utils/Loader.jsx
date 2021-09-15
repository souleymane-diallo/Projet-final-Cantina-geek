import React from 'react';
import { Spinner, Flex } from "@chakra-ui/react"

const Loader = () => {
    return (
        <Flex 
         justifyContent="center"
         alignItems="center"
        >
            <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="lg"
        />
        </Flex>
    )
}

export default Loader
