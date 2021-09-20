import React from 'react'
import {
    Box, FormControl, FormLabel, Input,
    Stack,
    Button,
    Textarea,
    Flex, Select
  } from '@chakra-ui/react';

function FormEdit({handleForm, submitRecipe, addChamps, removeFormFields, onValidateForm}) {

  return (
    <Box
      rounded={'lg'}
      boxShadow={'lg'}
      p={10}
      mt={12}
    >
      {submitRecipe && (
        <FormControl isRequired onChange={handleForm}>
              <FormLabel>Titre</FormLabel>
                <Input type="text" value={submitRecipe.titre} id="titre" />
              <FormLabel>Description</FormLabel>
              <Textarea id="description" defaultValue={submitRecipe.description} />
            <Stack spacing={4} mt={4}>
              <FormLabel>Personne</FormLabel>
              <Input type="number" id="personnes" value={submitRecipe.personnes} />
              <FormLabel>Niveau</FormLabel>
              <Select id="niveau" value={submitRecipe.niveau}>
                <option value="padawan">padawan</option>
                <option value="jedi">jedi</option>
                <option value="maitre">maitre</option>
              </Select>
              <FormLabel>Temps préparation</FormLabel>
              <Input type="number" id="tempsPreparation" value={submitRecipe.tempsPreparation} />
          </Stack>
            <FormLabel>Image</FormLabel>
              <Input type="text" />
              <FormControl isRequired id="ingredients">
              <FormLabel>Ingredients</FormLabel>
              {submitRecipe.ingredients?.map((value, index) => (
                <Stack direction="row" spacing={4} mt={4} key={index} >
                  <Input type="text" value={value[0]} id="quantite" onChange={(e) => handleForm(e, index, value)} />
                  <Input type="text" value={value[1]} id="ingredient" onChange={(e) => handleForm(e, index, value)} />
                  <Button 
                    bg={'red.400'} 
                    color={'white'}
                    _hover={{ bg: 'red.500'}}
                    onClick={() => removeFormFields('ingrédient')}
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
            <FormControl isRequired id="etapes">
              <FormLabel>Etages</FormLabel>
                {submitRecipe.etapes && submitRecipe.etapes.map((value, index) => (
                  <Stack direction="row"  mt={2} key={index}>
                    <Textarea id="etape" value={value} onChange={(e) => handleForm(e, index, value)} />
                      <Button bg={'red.400'} 
                        _hover={{ bg: 'red.500'}}
                        color={'white'}
                        onClick={() => removeFormFields('étape')}
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
              mt={4}
              onClick={onValidateForm}
              justifyContent="center"
              bg={'blue.400'}
              color={'white'}
              _hover={{ bg: 'blue.500'}}>
              {submitRecipe.id ? 'Modifier une Recette' : 'Ajouter une recette' }
            </Button>
          </Flex>
      </FormControl>
      )}   
    </Box>
  )
}

export default FormEdit
