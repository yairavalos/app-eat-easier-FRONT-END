const API_URL = "http://localhost:8000/api/";


const getRecipes = async() => {
    try {
        const response = await fetch(`${API_URL}recipes/`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
};
document.getElementById("recipes").innerHTML =
    $(document).ready(() => {
        getRecipes();
    });