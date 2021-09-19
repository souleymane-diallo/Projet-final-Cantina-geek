import React from 'react'
import {
    Box, FormControl, FormLabel, Input,
    Stack,
    Button, Flex,
    Textarea, Select
  } from '@chakra-ui/react';

const Recipe = ({handleForm, submitRecipe, addChamps, removeFormFields, onValidateForm}) => {
    return (
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          p={10}
          mt={12}
        >
            <FormControl isRequired onChange={handleForm}>
              <FormLabel>Titre</FormLabel>
              <Input type="text" id="titre" />
              <FormLabel>Description</FormLabel>
              <Textarea id="description" />
            <Stack spacing={4} mt={4}>
              <FormLabel>Personne</FormLabel>
              <Input type="number" id="personnes" />
              <FormLabel>Niveau</FormLabel>
              <Select id="niveau">
                <option value="padawan">padawan</option>
                <option value="jedi">jedi</option>
                <option value="maitre">maitre</option>
              </Select>
              <FormLabel>Temps préparation</FormLabel>
              <Input type="number" id="tempsPreparation" />
          </Stack>
            <FormLabel>Image</FormLabel>
              <Input type="text" />
            <FormControl id="ingredients">
              <FormLabel>Ingredients</FormLabel>
              {submitRecipe.ingredients?.map((value, index) => (
                <Stack direction="row" spacing={4} mt={4} key={index}>
                  <Input type="text" id="quantite" onChange={(e) => handleForm(e, index, value)} />
                  <Input type="text" id="ingredient" onChange={(e) => handleForm(e, index, value)}  />
                  <Button 
                    bg={'red.400'} 
                    color={'white'}
                    _hover={{ bg: 'red.500'}}
                    onClick={() => removeFormFields('ingrédient', index)}
                  >
                    X
                  </Button>
                </Stack>
              ))}
            </FormControl>
            <Button
              my={3}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500'}} 
              color={'white'}
              onClick={() => addChamps('ingrédient')}
            >
            Ajouter un ingrédient</Button>
            <FormControl id="etapes">
              <FormLabel>Etages</FormLabel>
                {submitRecipe.etapes?.map((value, index) => (
                  <Stack direction="row" key={index} mt={2}>
                    <Textarea id="etape" onChange={(e) => handleForm(e, value, index)} />
                      <Button bg={'red.400'} 
                        _hover={{ bg: 'red.500'}}
                        color={'white'}
                        onClick={() => removeFormFields('étape', index)}
                        >
                          X
                        </Button>
                    </Stack>
                ))}
            </FormControl>
            <Button
              my={3}
              bg={'blue.400'} 
              color={'white'}
              _hover={{ bg: 'blue.500'}}
              onClick={() => addChamps('étape')}
            >
            Ajouter une étape</Button>
          <Flex justifyContent="center">
            <Button
              onClick={onValidateForm}
              mt={4}
              justifyContent="center"
              bg={'green.400'}
              color={'white'}
              _hover={{ bg: 'green.500'}}>
              Ajouter Recette
            </Button>
          </Flex>
      </FormControl>
    </Box>
  )
}

export default Recipe
