import React, { useState } from 'react';
import { useHistory} from 'react-router-dom'
import {
    Flex,
    Stack,
    Heading,
  } from '@chakra-ui/react';
import Recipe from '../components/Recipe';
// import FormEdit from '../components/FormEdit';

const data = {
  titre: "",
  description: "",
  niveau: "padawan",
  personnes: 0,
  tempsPreparation: 5,
  ingredients: [["", ""]],
  etapes: [""],
  photo: "http://localhost:9000/images/dustcrepe.jpg",
};

const AddRecipe = () => {

  const [error, setError] = useState(false); 
  const [submitRecipe, setSubmitRecipe] = useState(data);
  const history = useHistory();
  const handleForm = (e, index = null, value = null) => {
    if (e.target.id === "personnes" || e.target.id === "tempsPreparation") {
      setSubmitRecipe({
        ...submitRecipe,
        [e.target.id]: Number(e.target.value),
      });
    } else if (e.target.id === "quantite" && index != null) {
      const newValue = submitRecipe;
      newValue.ingredients[index][0] = e.target.value;
      setSubmitRecipe({ newValue });
      console.log(newValue);
    } else if (e.target.id === "ingredient" && index != null) {
      const newValue = submitRecipe;
      newValue.ingredients[index][1] = e.target.value;
      setSubmitRecipe({ newValue });
      console.log(newValue)
    } else if (e.target.id === "etape" && index != null) {
      const newValue = submitRecipe;
      newValue.etapes[index] = e.target.value;
      setSubmitRecipe({ newValue });
      console.log(newValue)
    } 
    else {
      setSubmitRecipe({
        ...submitRecipe,
        [e.target.id]: e.target.value,
      });
    }
  };

  const addChamps = (option) => {
    if (option === "ingrédient") {
      const recipe = submitRecipe.ingredients;
    recipe.push(["", ""]);
    setSubmitRecipe({
      ...submitRecipe,
      [submitRecipe.ingredients]: recipe,
    });
    } else if (option === "étape") {
      const recipe = submitRecipe.etapes;
      recipe.push("");
      setSubmitRecipe({
      ...submitRecipe,
      [submitRecipe.etapes]: recipe,
    });
    }
  };

  const removeFormFields = (option, i) => {
    if (option === "ingrédient") {
      const recipe = submitRecipe.ingredients;
    recipe.splice(i, 1);
    setSubmitRecipe({
      ...submitRecipe,
      [submitRecipe.ingredients]: recipe,
    });
    } else if (option === "étape") {
      const recipe = submitRecipe.etapes;
    recipe.splice(i, 1);
    setSubmitRecipe({
      ...submitRecipe,
      [submitRecipe.etapes]: recipe,
    });
    }
  }

  function onValidateForm() {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitRecipe),
    };
  
    fetch("http://localhost:9000/api/recipes", requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          if(result.message) {
            history.push('/')
          }
        },
        (error) => {
          setError(error);
          console.log(error)
          alert(error);
        }
      );
  }

  if (error) {
    return <span>{error}</span>
  }
  return (
    <Flex
      minH={'100vh'}
      justify={'center'}
    >
    <Stack spacing={5} mx={'auto'} maxW={'xl'} py={4} px={3}>
      <Stack align={'center'}>
      <Heading fontSize={'4xl'}>Ajouter une recette</Heading>
      </Stack>
      <Recipe handleForm={handleForm}
        submitRecipe={submitRecipe}
        addChamps={addChamps}
        removeFormFields={removeFormFields}
        onValidateForm={onValidateForm}
      />
      {/* <FormEdit 
        handleForm={handleForm} 
        addChamps={addChamps}
        onValidateForm={onValidateForm}
        removeFormFields={removeFormFields}
        submitRecipe={submitRecipe}
      /> */}
    </Stack>
  </Flex>
  )
}

export default AddRecipe
