import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import {
    Flex,
    Stack,
    Heading,
  } from '@chakra-ui/react';
import FormEdit from '../components/FormEdit';

const EditRecipe = () => {
    const params = useParams();
    const id = params.id; 
    const history = useHistory();
    const [submitRecipe, setSubmitRecipe] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:9000/api/recipe/${id}`)
          .then((res) => res.json())
          .then((recipes) => {
            setSubmitRecipe(recipes);
          });
    },[id]);

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
        } else if (e.target.id === "ingredient" && index != null) {
          const newValue = submitRecipe;
          newValue.ingredients[index][1] = e.target.value;
          setSubmitRecipe({ newValue });
        } else if (e.target.id === "etape" && index != null) {
          const newValue = submitRecipe;
          newValue.etapes[index] = e.target.value;
          setSubmitRecipe({ newValue });
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
        recipe.push(["",""]);
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
        method: "PUT",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify(submitRecipe),
    };
    fetch(`http://localhost:9000/api/recipe/${id}`, requestOptions)
        .then((res) => res.json())
        .then(
        (result) => {
            setSubmitRecipe(result);
            if(result.message) {
                history.push('/')
            }
        },
        (error) => {
        //   setError(error);
        console.log(error);
        }
        );
    }

  return (
      <Flex
          minH={'100vh'}
          justify={'center'}
      >
          <Stack spacing={5} mx={'auto'} minW={'60%'} py={4} px={3}>
              <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Modifier une recette</Heading>
              </Stack>
              <FormEdit 
                  handleForm={handleForm} 
                  addChamps={addChamps}
                  onValidateForm={onValidateForm}
                  removeFormFields={removeFormFields}
                  submitRecipe={submitRecipe}
              />
          </Stack>
      </Flex>
  )
}

export default EditRecipe
