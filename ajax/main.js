const API_URL = "http://localhost:8000/api/";


const getUsers = async() => {
    const response = await fetch(`${API_URL}users/`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    // console.log(data);

};

$(document).ready(() => {
    getUsers();
});