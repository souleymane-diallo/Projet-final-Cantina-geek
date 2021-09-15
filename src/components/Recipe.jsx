import React from 'react'
import {
    Box, FormControl, FormLabel, Input,
    Stack,
    Select,
    Button,
    Textarea,
    useColorModeValue,
  } from '@chakra-ui/react';

const Recipe = ({ recipe }) => {
    return (
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          
          {recipe &&
            <>
            <Stack direction="row" spacing={4} mt={4}>
            <FormControl>
              <FormLabel>Titre</FormLabel>
              <Input type="text" value={recipe.titre} />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input type="text" value={recipe.description} />
            </FormControl>
          </Stack>
          <Stack direction="row" spacing={4} mt={4}>
            <FormControl>
              <FormLabel>Personne</FormLabel>
              <Input type="number" value={recipe.personnes} />
            </FormControl>
            <FormControl>
              <FormLabel>Niveau</FormLabel>
              <Input type="text" value={recipe.niveau} />
            </FormControl>
            <FormControl>
              <FormLabel>Temps préparation</FormLabel>
              <Input type="number" value={recipe.tempsPreparation} />
            </FormControl>
          </Stack>
        <Stack direction="row" spacing={4} mt={4}>
            <FormLabel>Ingredients</FormLabel>
            <FormControl>
              <Input type="number" />
            </FormControl>
            <FormControl>
            <Select>
                <option value="cm">cm</option>
                <option value="cm">mg</option>
                <option value="cm">kg</option>
            </Select>
            </FormControl>
            <FormControl>
              <Input type="text" />
            </FormControl>
        </Stack>
        <Stack direction="row" spacing={4} mt={4}>
            <FormControl id="password">
              <FormLabel>Etages</FormLabel>
              <Textarea value={recipe.etapes} />
            </FormControl>
        </Stack>
        </> 
        }
            <Stack mt={5}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Ajouter
              </Button>
            </Stack>
        </Box>
    )
}

export default Recipe
