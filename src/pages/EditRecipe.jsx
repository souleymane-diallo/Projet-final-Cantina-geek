import React, { useState, useEffect } from 'react';
import Loader from '../utils/Loader';
import axios from 'axios';
import {
    Flex,
    Stack,
    Heading,
  } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Recipe from '../components/Recipe';

const client = axios.create({
    baseURL: `http://localhost:9000/api`
});
const EditRecipe = () => {
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
        return <span>{error.errorMessage}</span>
    }
    return (
        <Flex
            minH={'100vh'}
            justify={'center'}
        >
            <Stack spacing={5} mx={'auto'} maxW={'xl'} py={4} px={3}>
                <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Modifier une recette</Heading>
                </Stack>
                {loading ? (
                    <Loader />
                ):(
                    <Recipe recipe={recipe} />
                )}
            </Stack>
        </Flex>
    )
}

export default EditRecipe
