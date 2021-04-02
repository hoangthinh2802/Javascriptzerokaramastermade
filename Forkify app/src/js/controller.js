import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    resultsView.renderSpinner();

    const id = window.location.hash.slice(1);

    // 1,  loading recipe
    if (!id) return;
    recipeView.renderSpinner();

    // 2, Rendering recipe
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    //1, Get Serch query
    const query = searchView.getQuery();
    if (!query) return;

    // 2, Load search results
    await model.loadSearchResults(query);

    //3, render results

    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

controlSearchResults();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
