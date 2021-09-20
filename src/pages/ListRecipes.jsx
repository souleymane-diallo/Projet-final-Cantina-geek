import React,{useState, useEffect} from 'react';
import Loader from '../utils/Loader';
import axios from 'axios';
import FilterInput from '../components/FilterInput';
import CardRecipe from '../components/CardRecipe';

const searchFilter = {
  titre:'',
  personnes_min: 0,
  personnes_max: 0,
  niveau:'',
  tempsPreparation: 0
}

const ListRecipes = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState(searchFilter);
  const [searchResults, setSearchResults] = useState(null);
  const [btnSup, setBtnSup] = useState(false);

  async function getRecipes() {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:9000/api/recipes`)
      setRecipes(response.data)
      setSearchResults(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
      getRecipes();
  }, []);
  
  const handleForm = (e) => {
    if (e.target.id === "temps_preparation" || e.target.id === "personnes_min" || e.target.id  === "personnes_max")  {
      setSearchTerm({
        ...searchTerm,
        [e.target.id]: Number(e.target.value),
      });
    } else {
      setSearchTerm({
        ...searchTerm,
        [e.target.id]: e.target.value,
      });
    }
  }
  
  useEffect(() => {
    if (recipes !== null) {
    const search = recipes.filter(recipe => functionTri(recipe));
      setSearchResults(search);
    }
  }, [searchTerm]);

  useEffect(() => {
    getRecipes();
  }, []);

  const functionTri = (recipes = null) => {
    if (recipes.titre.toLowerCase().includes(searchTerm.titre.toLowerCase()) || searchTerm.titre === "") {
      if (recipes.tempsPreparation >= searchTerm.tempsPreparation || searchTerm.tempsPreparation === 0) {
          if (recipes.niveau === searchTerm.niveau || searchTerm.niveau === "") {
            if (recipes.personnes >= searchTerm.personnes_min || searchTerm.personnes_min === 0) {
              if (recipes.personnes <= searchTerm.personnes_max || searchTerm.personnes_max === 0) {
                return true;
              }
            }
          }
        }
      }
      return false;
  }

  const onDeleteRecipe = (btnSup, id) => {
    if(btnSup === true) {
      axios.delete(`http://localhost:9000/api/recipe/${id}`)
      .then(resul => {
        setBtnSup(false);
        getRecipes();  
      },
      (error) =>{
        setError(error)
      })
    }  
  }
  
  if (error) {
    return <span>{error}</span>
  }

  return (
    <>
      <FilterInput handleForm={handleForm} searchTerm={searchTerm} />
        {loading ? (
        <Loader />
      ): (
        <CardRecipe recipes={searchResults}  onDeleteRecipe={onDeleteRecipe} />
      )}
    </>  
)}

export default ListRecipes
