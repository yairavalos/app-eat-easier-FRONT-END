const API_URL = "http://localhost:8000/api/";

let user_profile_id = 1
let user_planner_id = 5
let recipe_id = 3
let my_json_list = []

let welcome = document.getElementById('user_welcome')

if (localStorage.length > 1) {
    welcome.innerText = "Hola " + localStorage.user
}

const getRecipeByID = async() => {

    try {
        const response = await fetch(`${API_URL}recipes/${localStorage.cat_recipe}/viewer/`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json()
            // console.log(data)

        return data

    } catch (error) {
        console.log(error)
    }

}


function populate_nodes_details(n) {

    //console.log("My function name is populate nodes details")
    //console.log("My n value is " + n)

    this_attr = my_json_list["recipe_details"][n].id
    my_container.setAttribute("id", this_attr)

    this_attr = my_json_list["recipe_details"][n].title
    my_container.querySelector(".title").innerText = this_attr

    this_attr = my_json_list["recipe_details"][n].meal_type
    my_container.querySelector(".meal_type").innerText = this_attr

    this_attr = my_json_list["recipe_details"][n].pic_url
    my_container.querySelector(".pic_url").setAttribute("src", this_attr)

    this_attr = my_json_list["recipe_details"][n].persons + " personas"
    my_container.querySelector(".persons").innerText = this_attr

    this_attr = my_json_list["recipe_details"][n].time_prep + " minuto(s)"
    my_container.querySelector(".time_prep").innerText = this_attr

    this_attr = "dificultad " + my_json_list["recipe_details"][n].level
    my_container.querySelector(".level").innerText = this_attr
}

function populate_nodes_ingredients(n) {

    //console.log("My function name is populate nodes ingredients")

    this_attr = my_json_list["recipe_ingredients"][n].ingredient_qty
    this_attr += " " + my_json_list["recipe_ingredients"][n].unit_type.equivalency
    this_attr += " de " + my_json_list["recipe_ingredients"][n].cat_ingredient.ingredient_name
    my_container.querySelector(".ingredient_name").innerText = this_attr

}

function populate_nodes_apps(n) {

    //console.log("My function name is populate nodes apps")

    this_attr = my_json_list["recipe_apps"][n].apps_type
    my_container.querySelector(".apps_type").innerText = this_attr

}

function populate_nodes_procedure(n) {

    //console.log("My function name is populate nodes procedure")

    this_attr = my_json_list["recipe_procedure"][n].proc_descrip
    my_container.querySelector(".proc_descrip").innerText = this_attr

}

function clone_html_item() {

    my_item = document.createElement("div")
    my_container.appendChild(my_item)

    my_container.lastElementChild.outerHTML = my_container.firstElementChild.outerHTML

}

// the callback needs to be without parenthesis
function container_handler(my_container_name, myjson_item, populate_nodes) {

    my_container = document.querySelector(my_container_name)
    my_template_item = my_container.children[0]

    json_items_num = my_json_list[myjson_item].length
        //console.log("container_handler")

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

}

const transfer_retrieve = async() => {

    // Here instead to have just one container, we need to split it into 4
    my_json_list = await getRecipeByID();
    //console.log("transfer retrieve")

    container_handler(".json_container1", "recipe_details", populate_nodes_details)
    container_handler(".json_container2", "recipe_ingredients", populate_nodes_ingredients)
    container_handler(".json_container3", "recipe_apps", populate_nodes_apps)
    container_handler(".json_container4", "recipe_procedure", populate_nodes_procedure)

}


$(document).ready(() => {

    transfer_retrieve();

});