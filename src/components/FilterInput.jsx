import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Flex, FormControl,
  Input, Stack, Select,
  DrawerContent,
  DrawerCloseButton,
  Button
} from "@chakra-ui/react"
const searchFilter = {
  titre:'',
  personnes: 0,
  niveau:'',
  tempsPreparation: 0
}
const FilterInput = ({onTitreFilter, onNiveauFilter}) => {
  const [inputFilter, setInputFilter] = React.useState(searchFilter);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const handleInput = (field) => (e) => {
    const {value} = e.target
    if (e.target.id === 'personnes' || e.target.id === 'tempsPreparation') {
      setInputFilter({
      ...inputFilter, 
      [field]: Number(value)
      })
    } else {
      setInputFilter({
      ...inputFilter, 
      [field]: value})
    }
    console.log(inputFilter);
    switch (field) {
      case "titre":
        onTitreFilter(value);
      break;
      case "niveau":
        onNiveauFilter(value);
      break;
      default:
        break;
    }
  }  
    return (
      <>
      <Flex justifyContent="center" mt={3}>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Filtrer 
        </Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Effectuez un filtre</DrawerHeader>
          <DrawerBody>
            <FormControl >
              <Stack mt={3}>
                <Input type="text"
                  value={inputFilter.titre}
                 onChange={handleInput('titre')} id="titre" placeholder="Titre..." />
              </Stack>
              <Stack mt={3}>
                <Input type="number" onChange={handleInput('personnes')} id="personnes"  placeholder="Nombre de personne" />
              </Stack>
              <Stack mt={3}>
                <Input type="number" onChange={handleInput('tempsPreparation')} id="tempsPreparation" placeholder="Temps de préparation" />
              </Stack>
              <Stack mt={3}>
                <Select placeholder="Niveau" id="niveau" onChange={handleInput('niveau')}>
                  <option value="padawan">padawan</option>
                  <option value="jedi">jedi</option>
                  <option value="maitre">maitre</option>
                </Select>
              </Stack>
            </FormControl>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Annuler
            </Button>
            <Button colorScheme="blue">Filtrer</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
    )
}
  
export default FilterInput
  