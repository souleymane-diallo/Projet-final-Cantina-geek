import React, { useState, useEffect} from 'react';
import { Flex, Box, chakra, Image, Button, Stack, List, ListItem, ListIcon} from '@chakra-ui/react';
import {FaRegEdit} from 'react-icons/fa';
import {RiDeleteBin6Line} from 'react-icons/ri'
import {GiCookingPot, GiCheckMark} from 'react-icons/gi'
import{ useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../utils/Loader';

const client = axios.create({
    baseURL: `http://localhost:9000/api`
});

const DetailsRecipes = () => {
    const params = useParams();
    const id = params.id;
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        async function getRecipe() {
            setLoading(true);
            try {
                const response = await client.get(`/recipe/${id}`)
                setRecipe(response.data);
            }
            catch (err) {
                setError(true);
                console.log(err.errorMessage)
            }
            finally {
                setLoading(false);
            }
        }
        getRecipe();

    }, [id]);

    if (error) {
        return <span>il y a un problème</span>
    }

    return (
            <>
            {loading ? (
                <Loader />
            ) : ( recipe &&
                <Flex
                    p={20}
                    w="full"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box
                        mx="auto"
                        rounded="lg"
                        shadow="md"
                        maxW="2xl"
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
                        {recipe.ingredients.map(ingredient => 
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
                        <Button leftIcon={<FaRegEdit />} colorScheme="pink" variant="outline">
                            Edit
                        </Button>
                        <Button rightIcon={<RiDeleteBin6Line />} colorScheme="blue" variant="outline">
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
