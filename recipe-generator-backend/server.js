const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const HF_API_KEY = process.env.HF_API_KEY;

app.post('/generate-recipe', async (req, res) => {
    const ingredients = req.body.ingredients;

    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/gpt2',
            {
                inputs: `Create a recipe with these ingredients: ${ingredients.join(', ')}`,
            },
            {
                headers: {
                    Authorization: `Bearer ${HF_API_KEY}`,
                },
            }
        );

        res.json({ recipe: response.data[0].generated_text.trim() });
    } catch (error) {
        console.error('Error generating recipe:', error);
        res.status(500).json({ error: 'Error generating recipe' });
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
