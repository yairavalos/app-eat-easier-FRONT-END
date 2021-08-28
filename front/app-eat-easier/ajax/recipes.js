const API_URL = "http://localhost:8000/api/";

let my_recipes = []

const getRecipes = async() => {
    try {
        const response = await fetch(`${API_URL}recipes/`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        my_recipes = data;
        console.log(data);

    } catch (error) {
        console.log(error);
    }
};

/* document.getElementById("recipes").innerHTML = */


$(document).ready(() => {
    getRecipes();

    for (item in my_recipes){
        console.log(item['id']);
    }
});


