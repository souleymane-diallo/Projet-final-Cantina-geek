import React from 'react';
import { Link } from 'react-router-dom'
import {Flex, Box, Image, useColorModeValue, chakra, Stack, Button} from "@chakra-ui/react"
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {GiClick} from 'react-icons/gi'
const CardRecipe = ({ recipes, onDeleteRecipe }) => {
    return (
        <Flex
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            p={10}
            w="full"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
        >
            {recipes?.map(recipe => 
            <Box 
                key={recipe.id}
                w="sm"
                mx="auto"
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                mb={5}
            >
                <Image
                    w="full"
                    h={56}
                    fit="cover"
                    objectPosition="center"
                    src={recipe?.photo}
                    alt={recipe?.titre}
                />
                <Box py={4} px={6}>
                 <chakra.h2 
                    fontSize="xl"
                    fontWeight="bold"
                >
                    {recipe.titre}
                 </chakra.h2>
                 <Flex flexDirection="column">
                    <chakra.span fontSize="lg">Niveau : {recipe.niveau}</chakra.span>
                    <chakra.span fontSize="lg">Temps : {recipe.tempsPreparation} min</chakra.span>
                    <chakra.span fontSize="lg">{recipe.personnes} personne{recipe.personnes > 1 && 's'} </chakra.span>
                    <Stack direction="row" justifyContent="space-around" my={3}>
                        <Button leftIcon={<AiFillEdit />} colorScheme="blue" variant="outline">
                           <Link to={`edit/${recipe.id}`}>Edit</Link> 
                        </Button>
                        <Button 
                            onClick={() =>{
                                const confirBox = window.confirm(
                                    `voulez-vous supprimer cette recette ${recipe.titre}`
                                )
                                if (confirBox === true) {
                                    onDeleteRecipe(recipe.id)
                                }  
                            }}
                            rightIcon={<AiFillDelete />} 
                            colorScheme="red" variant="outline"
                        >
                            Delete
                        </Button>
                    </Stack>
                    <Stack direction="row" spacing={4}>
                        <Link to={`recipe/${recipe.id}`} >
                            <Button leftIcon={<GiClick />} colorScheme="blue" variant="solid">
                                Click Here...
                            </Button>
                        </Link>
                    </Stack>
                </Flex>
                </Box>
            </Box>)}
        </Flex>
    )
}

export default CardRecipe
