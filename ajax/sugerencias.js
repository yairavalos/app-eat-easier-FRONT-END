const API_URL = "http://localhost:8000/api/";

let user_profile_id = 2
let my_json_list = []

let welcome = document.getElementById('user_welcome')

if (localStorage.length > 1) {
    welcome.innerText = "Hola " + localStorage.user
}

const getUserRecipes = async() => {

    try {
        const response = await fetch(`${API_URL}users/profiles/suggest/${localStorage.id}/`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json()
            //console.log(data)

        return data

    } catch (error) {
        console.log(error)
    }

}

// POST USER PROFILE FOOD
const postFetch = async(datos) => {
    const data = await fetch(`${API_URL}users/profiles/favorite/`, {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos)
    })
    return await data.json()
}

function populate_nodes(n) {

    this_attr = my_json_list[n].id
    my_container.lastElementChild.setAttribute("id", this_attr)

    this_attr = my_json_list[n].pic_url
    my_container.lastElementChild.querySelectorAll(".json_node .pic_url")[0].setAttribute("src", this_attr)

    this_attr = my_json_list[n].title
    my_container.lastElementChild.querySelectorAll(".title")[0].innerText = this_attr

    this_attr = my_json_list[n].meal_type
    my_container.lastElementChild.querySelectorAll(".meal_type")[0].innerText = this_attr

    this_attr = my_json_list[n].level
    my_container.lastElementChild.querySelectorAll(".level")[0].innerText = this_attr

}

function clone_html_item() {

    my_item = document.createElement("div")
    my_container.appendChild(my_item)

    my_container.lastElementChild.outerHTML = my_container.firstElementChild.outerHTML

}


function generateJSON() {
    foodDict = []
    let datos = []
    let recipeList = document.querySelectorAll(".json_item")
        //esta linea debe cambiar por el contenedor de las tarjetas 
    for (let i = 0; i < recipeList.length; i++) {

        datos.push({
            "user_profile": localStorage.id,
            "cat_recipe": recipeList[i].id, //este se debe llenar con el id de la tarjeta
            "checked": true,
            "favorite": true
        })
    }
    //console.log("Data from generateJSON(): ", datos)
    return datos
}


const transfer_retrieve = async() => {

    my_json_list = await getUserRecipes();
    json_items_num = my_json_list.length

    if (json_items_num > 1) {

        for (i = 0; i < json_items_num; i++) {

            populate_nodes(i)

            if (i < json_items_num - 1) {
                clone_html_item()
            }
        }

    } else {
        populate_nodes(0)
    }

    //console.log("transfer retrieve")

}
let btnSave = document.getElementById("btn_home")

btnSave.addEventListener('click', (e) => {
    e.preventDefault()


    dataToSend = generateJSON()
        //console.log("Saving this AJAX POST before to go", dataToSend)

    try {
        let response = postFetch(dataToSend)
        setTimeout(function() { window.location.href = "home.html" }, 3000);

    } catch (error) {
        console.log(error)

    }

})


$(document).ready(() => {

    my_container = document.querySelector(".json_container")
    my_template_item = my_container.children[0]

    user_profile_id = 2
    transfer_retrieve();

});