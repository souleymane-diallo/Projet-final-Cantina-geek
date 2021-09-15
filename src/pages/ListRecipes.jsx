import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../utils/Loader';
import CardRecipe from '../components/CardRecipe';

const client = axios.create({
    baseURL: `http://localhost:9000/api`
})

const ListRecipes = () => {

    const [recettes, setRecettes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getRecipes() {
            setLoading(true);
            try {
                const response = await client.get(`/recipes`)
                setRecettes(response.data)
            } catch (err) {
                console.log(err.errorMessage)
                setError(true);
            }
            finally {
                setLoading(false);
            }
        }
        getRecipes();
    }, []);

    if (error) {
        return <span>{error.errorMessage}</span>
    }
    return (
        <>
            { loading ? (
            <Loader />
            ): (
                <CardRecipe recipes={recettes} />
            )}
        </>
        
    )
}

export default ListRecipes
