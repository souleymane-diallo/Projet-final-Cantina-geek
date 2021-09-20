import React from 'react'
import { FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormLabel, Input, Select, Box, GridItem, Grid} from '@chakra-ui/react'

const FilterInput = ({ handleForm, searchTerm }) => {
  
  return (
    <>
     
      <Box 
        shadow="lg"
        rounded="lg"
        p={4} px={3}
        overflow="hidden"
      >
        <FormControl  onChange={handleForm}>
        <Box 
          shadow="lg"
          rounded="lg"
          p={4} px={3}
          overflow="hidden">
        <Grid autoRows templateColumns="repeat(5, 250px)" gap={3}>
        <GridItem >
          <FormLabel>Titre</FormLabel>
            <Input type="text" id="titre" /> 
          </GridItem>
        <GridItem >
          <FormLabel>De</FormLabel>
          <NumberInput id="personnes_min" min={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </GridItem>
        <GridItem >
          <FormLabel>A</FormLabel>
          <NumberInput id="personnes_max" min={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </GridItem>
        <GridItem>
          <FormLabel>Temps Préparation</FormLabel>
            <Input type="number" id="tempsPreparation" />
        </GridItem>
        <GridItem>
        <FormLabel>Selectionnez un Niveau</FormLabel>
          <Select id="niveau">
            <option value="padawan">padawan</option>
            <option value="jedi">jedi</option>
            <option value="maitre">maitre</option>
          </Select></GridItem>
      </Grid>
      </Box>
    </FormControl>
    </Box> 
    </>
  )
}
  
export default FilterInput
  