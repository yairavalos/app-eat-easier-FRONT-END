const API_URL = "http://localhost:8000/api/";

let user_profile_id = 1;
let my_json_list = [];
let my_user = {};


const generateNewUser = async(postData) => {

    const data = await fetch(`${API_URL}users/signup/`, {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData)
    })

    const dataResult = await data.json()

    console.log(dataResult)
    saveUserProfile(dataResult)

    return dataResult
}

/*
async function generateNewUser(userData) {
    console.log("posting with ajax: ");

    try {
        const response = await fetch(`${API_URL}users/signup/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //"Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(userData),
        });

        const data = response.json();
        saveUserProfile(data);
        console.log("My response from AJAX: ", data);
    } catch (error) {
        console.log("manejo de error ", response.json())
        console.log(error);
    }
}
*/


function saveUserProfile(myJSON) {
    localStorage.clear();

    for ([key, value] of Object.entries(myJSON)) {
        localStorage.setItem(key, value);
        console.log("mi item key is: " + key);
        console.log("my value is: " + value);
    }
}

const myForm = document.getElementById("register_form");

function getLocalUserData() {
    let user_data = {
        username: myForm.querySelector("#my_username").value,
        password: myForm.querySelector("#my_pw1").value,
        email: myForm.querySelector("#my_email").value,
        first_name: myForm.querySelector("#my_first_name").value,
        last_name: myForm.querySelector("#my_last_name").value,
    };

    return user_data;
}

myForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Event prevented");

    const data = getLocalUserData();

    await generateNewUser(data);
});



/* Algorithm
    Pre-requirements:
    - Json variable with User Profile Structure
    - Back-End validation for POST Transactions
    - Password encription from Django how it works
    First before to send anything
    validate form fields
    prevent default behaviors from Form and modal
    if its not filled correctly needs to stay into the same page
    once its filled correctly its try to post it into db
    if its repeated Auth its gonna complain
        we need to handle it
    once its done confirm from end-point its done
    then
        we need to do the next actions
    save into datastorage the user identity
    show modal confirming the success or not
    redirect to go to favorites or to another page
    if its the first time
        redirect to people amount
    it its a user
        redirect them to favorites or home
    por default javascript son sincronos
    async / await -> solamente cuando se requiera que se ejecute código sin esperar la respuesta previa
*/