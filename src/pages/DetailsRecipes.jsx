import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Flex, Box, chakra, Image, Button, Stack, List, ListItem, ListIcon} from '@chakra-ui/react';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {GiCookingPot, GiCheckMark} from 'react-icons/gi'
import{ useParams } from 'react-router-dom';
import Loader from '../utils/Loader';
import axios from 'axios';
import { useFetch } from '../utils/hooks/useFetch';

const DetailsRecipes = () => {
    const history = useHistory()
    const params = useParams();
    const id = params.id;
    const { data, error, isLoading } = useFetch(`http://localhost:9000/api/recipe/${id}`);    
    const recipe = data;
    
    if (error) {
      return  <span>{error}</span>
    }
    const onDeleteRecipe = (id) => {
        axios.delete(`http://localhost:9000/api/recipe/${id}`)
        .then(resul => {
            alert(resul.data.message)
            history.push('/')
        })
        .catch((e) => {
           alert(e); 
        })
    }
    return (
            <>
            {isLoading ? (
                <Loader />
            ) : ( recipe &&
                <Flex
                    p={20}
                    key={recipe.id}
                    w="full"
                    alignItems="center"
                    justifyContent="center"    
                >
                    <Box
                        mx="auto"
                        rounded="lg"
                        shadow="md"
                        maxW="2xl"
                        mt={14}
                    >

                        <Image
                        roundedTop="lg"
                        w="full"
                        h={80}
                        fit="cover"
                        src={recipe.photo}
                        alt={recipe.titre}
                        />

                    <Box p={6}>
                <Box>
                    <chakra.h2
                    fontSize={{ base: "2xl", md: "3xl" }}
                    textTransform="uppercase"
                    >
                    {recipe.titre}
                    </chakra.h2>
                    
                    <chakra.p
                    mt={2}
                    fontSize="sm"
                    >
                    {recipe.description}
                    </chakra.p>
                    <Stack direction="row" justifyContent="space-around" mt={3}>
                        <chakra.span>
                            Niveau : {recipe.niveau}
                        </chakra.span>
                        <chakra.span>
                            Temps : {recipe.tempsPreparation} min
                        </chakra.span>
                        <chakra.span>
                            {recipe.personnes}{' '} personne{recipe.personnes > 0 && 's'}
                        </chakra.span>
                    </Stack>
                    
                    <chakra.h3 my={2}>
                        INGREDIENTS :
                    </chakra.h3>
        
                    <List spacing={3}>
                        {recipe.ingredients?.map(ingredient => 
                        <ListItem>
                        <ListIcon as={GiCookingPot} color="green.200" />
                            {ingredient.slice(0,1)+ " "+ingredient.slice(1)}
                        </ListItem>
                        )}    
                    </List>
                    <chakra.h3 my={2}>
                        ETAPES :
                    </chakra.h3>
                    <List spacing={3}>
                        {recipe.etapes.map(etape => 
                        <ListItem>
                        <ListIcon as={GiCheckMark} color="green.200" />
                            {etape}
                        </ListItem>
                    )}    
                    </List>
                    
                    <Stack direction="row" justifyContent="space-around" mt={3} >
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
                </Box>
                </Box>
            </Box>
            </Flex>  
            )}
        </>
    )
}

export default DetailsRecipes
