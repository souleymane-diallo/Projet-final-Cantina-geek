import React from 'react';
import Loader from '../utils/Loader';
import FilterInput from '../components/FilterInput';
import CardRecipe from '../components/CardRecipe';

const ListRecipes = ({loading, recipes, onDeleteRecipe }) => {

    return (
        <>
            <FilterInput />
            { loading ? (
            <Loader />
            ): (
                <CardRecipe recipes={recipes} onDeleteRecipe={onDeleteRecipe} />
            )}
        </>
        
    )
}

export default ListRecipes
