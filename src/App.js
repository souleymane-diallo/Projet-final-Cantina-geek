import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header.jsx/Header';
import Hero from './components/Hero/Hero';
import AddRecipe from './pages/AddRecipe';
import './index.css'
import DetailsRecipes from './pages/DetailsRecipes';
import EditRecipe from './pages/EditRecipe';
import ListRecipes from './pages/ListRecipes';
import ErrorPage from './pages/ErrorPage';

function App() {
  
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Hero />
          <ListRecipes />
        </Route>
        <Route path="/recipe/:id">
          <DetailsRecipes />
        </Route>
        <Route path="/addrecipe">
          <AddRecipe />
        </Route>
        <Route path="/edit/:id">
          <EditRecipe />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
