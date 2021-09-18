import React, { useState, useEffect } from 'react';

import {
    Flex,
    Stack,
    Heading,
  } from '@chakra-ui/react';
//import { useParams } from 'react-router-dom';
import FormEdit from '../components/FormEdit';


const EditRecipe = () => {
    
  return (
      <Flex
          minH={'100vh'}
          justify={'center'}
      >
          <Stack spacing={5} mx={'auto'} maxW={'xl'} py={4} px={3}>
              <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Modifier une recette</Heading>
              </Stack>
              <FormEdit />
          </Stack>
      </Flex>
  )
}

export default EditRecipe
