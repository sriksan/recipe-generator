import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeDisplay from './components/RecipeDisplay';
import './App.css';

const App = () => {
    const [recipe, setRecipe] = useState('');

    return (
        <div className="App">
            <h1>Recipe Generator</h1>
            <RecipeForm setRecipe={setRecipe} />
            {recipe && <RecipeDisplay recipe={recipe} />}
        </div>
    );
};

export default App;
