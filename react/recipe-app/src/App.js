import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  const APP_ID = 'bf09a11c'
  const APP_KEY = '77858a1259be7211ab9b5ee1a566934e'
  //const [count, setCount] = useState(0);

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    //document.title = `Vous avez cliqué ${count} fois`;
    getRecipes()

  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
    //console.log(search)
  }

  return (
    <div className="App">
      {/* <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button> */}
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button className="search-button">
          Submit
        </button>
      </form>
      <div className="recipes">
        { recipes.map( recipe => 
          <Recipe 
            key={recipe.recipe.image} 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        )}
      </div>
    </div>
  );
}

export default App;
