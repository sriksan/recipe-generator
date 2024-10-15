import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = ({ setRecipe }) => {
    const [ingredients, setIngredients] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/generate-recipe', {
                ingredients: ingredients.split(',')
            });
            setRecipe(response.data.recipe);
        } catch (error) {
            console.error('Error generating recipe:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter ingredients (comma separated):</label>
            <input
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="e.g., chicken, rice, onion"
            />
            <button type="submit">Generate Recipe</button>
        </form>
    );
};

export default RecipeForm;
