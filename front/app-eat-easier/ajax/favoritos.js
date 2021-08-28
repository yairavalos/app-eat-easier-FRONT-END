const API_URL = "http://localhost:8000/api/";

let user_profile_id = 2
let my_favorites = []

const getUserFavorites = async() => {
    try {
        const response = await fetch(`${API_URL}users/${user_profile_id}/favorites/`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        my_favorites = data;
        console.log(data);

    } catch (error) {
        console.log(error);
    }
};

$(document).ready(() => {
    getUserFavorites();
});
