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
        const response = await fetch(`${API_URL}users/${localStorage.id}/planners/${localStorage.user_planner_id}/menu/`, {
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

function populate_nodes_header(n) {

    console.log("My function name is populate nodes header")

    this_attr = my_json_list[0].user_planner.plan_title
    my_container.querySelector(".planner_title").innerText = this_attr

    this_attr = my_json_list[0].user_planner.period
    my_container.querySelector(".period").innerText = this_attr

}

function populate_nodes_meals(n) {

    //console.log("My function name is populate nodes meals")

    this_attr = my_json_list[n].user_recipe.cat_recipe.title
    my_container.querySelector("." + my_json_list[n].meal_type).querySelector(".title").innerText = this_attr

    this_attr = my_json_list[n].user_recipe.cat_recipe.pic_url
    my_container.querySelector("." + my_json_list[n].meal_type).querySelector(".pic_url").setAttribute("src", this_attr)


    this_attr = my_json_list[n].user_recipe.cat_recipe.level
    my_container.querySelector("." + my_json_list[n].meal_type).querySelector(".level").innerText = this_attr

    my_container.querySelector("." + my_json_list[n].meal_type).querySelector(".pic_url").dataset.catrecipe = my_json_list[n].user_recipe.cat_recipe.id
}

function clone_html_item() {

    my_item = document.createElement("div")
    my_container.appendChild(my_item)

    my_container.lastElementChild.outerHTML = my_container.firstElementChild.outerHTML

}

// the callback needs to be without parenthesis
function container_handler(my_container_name, target_date, populate_nodes) {

    my_container = document.querySelector(my_container_name)
    my_template_item = my_container.children[0]

    json_items_num = my_json_list.length
    console.log("container_handler with " + json_items_num + " items")
    console.log("my json list start date:" + Date.parse(target_date))


    if (my_container_name == ".json_container0") {

        populate_nodes(0)

    } else if (my_container_name == ".json_container1") {

        if (json_items_num > 1) {

            for (i = 0; i < json_items_num; i++) {

                let my_json_date = new Date(my_json_list[i].meal_date)
                    // console.log("my_json_date: " + my_json_date)
                let my_picker_date = new Date(target_date)
                    // console.log("my_picker_date: " + my_picker_date)

                if (my_json_date.toLocaleDateString() == my_picker_date.toLocaleDateString()) {

                    populate_nodes(i)

                }

            }
        }

    }

}


const transfer_retrieve = async() => {

    // Here instead to have just one container, we need to split it into 2
    my_json_list = await getRecipeByID();
    // console.log("transfer retrieve desde menu planner")

    $("#myDatePicker").datepicker('update', my_json_list[0].user_planner.start_date)

    container_handler(".json_container0", my_json_list[0].user_planner.start_date, populate_nodes_header)
    container_handler(".json_container1", my_json_list[0].user_planner.start_date, populate_nodes_meals)

}

let imgDesayuno = document.getElementById("img-desayuno")

imgDesayuno.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.setItem("cat_recipe", e.target.dataset.catrecipe)
    window.location.href = "detalle_receta.html"

})

let imgComida = document.getElementById("img-comida")

imgComida.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.setItem("cat_recipe", e.target.dataset.catrecipe)
    window.location.href = "detalle_receta.html"

})

let imgCena = document.getElementById("img-cena")

imgCena.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.setItem("cat_recipe", e.target.dataset.catrecipe)
    window.location.href = "detalle_receta.html"

})





$(document).ready(() => {

    $('#myDatePicker').datepicker({
        format: "yyyy-mm-dd",
        language: "es",
        calendarWeeks: true,
        autoclose: true,
        todayHighlight: true
    })

    transfer_retrieve()

    $('#myDatePicker').datepicker().on('changeDate', function(e) {
        container_handler(".json_container1", $('#myDatePicker').datepicker('getFormattedDate'), populate_nodes_meals)
    })

});