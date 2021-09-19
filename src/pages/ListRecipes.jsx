import React,{useState, useEffect} from 'react';
import Loader from '../utils/Loader';
import axios from 'axios';
import FilterInput from '../components/FilterInput';
import CardRecipe from '../components/CardRecipe';

const ListRecipes = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getRecipes() {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:9000/api/recipes`)
      setRecipes(response.data)
    } catch (error) {
      console.log(error)
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
      getRecipes();
  }, []);
  
  const handleFilterTitre = (titre) => {
    const filteredData = recipes.filter((item) => {
      if(item.titre.toLowerCase().includes(titre.toLowerCase())){
        return item;
      }
    })
    setRecipes(filteredData);
    console.log(filteredData)
  }
  const handleFilterNiveau = (niveau) => {
    const filteredData = recipes.filter((item) => {
      if(item.niveau.toLowerCase().includes(niveau.toLowerCase())){
        return item;
      }
    });
    setRecipes(filteredData);
    console.log(filteredData);
  }
  const onDeleteRecipe = (id) => {
    axios.delete(`http://localhost:9000/api/recipe/${id}`)
    .then(resul => {
      alert(resul.data.message)
      getRecipes();  
    })
    .catch((e) => {
        alert(e); 
    })
  }
  
  if (error) {
    return <span>{error}</span>
  }

  return (
    <>
      <FilterInput 
        onTitreFilter={handleFilterTitre} 
        onNiveauFilter={handleFilterNiveau}
      />
        {loading ? (
        <Loader />
      ): (
        <CardRecipe recipes={recipes} onDeleteRecipe={onDeleteRecipe} />
      )}
    </>  
)}

export default ListRecipes
