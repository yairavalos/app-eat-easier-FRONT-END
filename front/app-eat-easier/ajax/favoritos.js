const API_URL = "http://localhost:8000/api/";

let user_profile_id = 0
let my_json_list = []

let welcome = document.getElementById('user_welcome')

if (localStorage.length > 1) {
    welcome.innerText = "Hola " + localStorage.user
}

const getUserFavorites = async() => {

    try {
        const response = await fetch(`${API_URL}users/${user_profile_id}/favorites/`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json()
        console.log(data)

        return data

    } catch (error) {
        console.log(error)
    }

}


function populate_nodes(n) {

    this_attr = my_json_list[n].id
    my_container.lastElementChild.setAttribute("id", this_attr)

    this_attr = my_json_list[n].cat_recipe.pic_url
    my_container.lastElementChild.querySelectorAll(".json_node .pic_url")[0].setAttribute("src", this_attr)

    this_attr = my_json_list[n].cat_recipe.title
    my_container.lastElementChild.querySelectorAll(".title")[0].innerText = this_attr

    this_attr = my_json_list[n].cat_recipe.meal_type
    my_container.lastElementChild.querySelectorAll(".meal_type")[0].innerText = this_attr

    this_attr = my_json_list[n].cat_recipe.level
    my_container.lastElementChild.querySelectorAll(".level")[0].innerText = this_attr

}

function clone_html_item() {

    my_item = document.createElement("div")
    my_container.appendChild(my_item)

    my_container.lastElementChild.outerHTML = my_container.firstElementChild.outerHTML

}

const transfer_retrieve = async() => {

    my_json_list = await getUserFavorites();
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

    console.log("transfer retrieve")

}


$(document).ready(() => {

    my_container = document.querySelector(".json_container")
    my_template_item = my_container.children[0]

    user_profile_id = 0
    transfer_retrieve();

});