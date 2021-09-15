import React from 'react';
import {
    Flex,
    Stack,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
import Recipe from '../components/Recipe';

const AddRecipe = () => {
    return (
        <Flex
            minH={'100vh'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={5} mx={'auto'} maxW={'xl'} py={4} px={3}>
            <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Ajouter une recette</Heading>
            </Stack>
            <Recipe />
        </Stack>
    </Flex>
    )
}

export default AddRecipe
