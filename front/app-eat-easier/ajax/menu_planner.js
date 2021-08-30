const API_URL = "http://localhost:8000/api/";

let user_profile_id = 1
let user_planner_id = 5
let recipe_id = 3
let my_json_list = []

const getRecipeByID = async() => {

    try {
        const response = await fetch(`${API_URL}users/${user_profile_id}/planners/${user_planner_id}/menu/`, {
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

function populate_nodes_header(n){

    console.log("My function name is populate nodes header") 

    this_attr = my_json_list[0].user_planner.plan_title
    my_container.querySelector(".planner_title").innerText = this_attr

    this_attr = my_json_list[0].user_planner.period
    my_container.querySelector(".period").innerText = this_attr

    this_attr = my_json_list[0].meal_date
    my_container.querySelector(".meal_date").innerText = this_attr

}

function populate_nodes_meals(n){

    console.log("My function name is populate nodes meals") 

    this_attr = my_json_list[n].user_recipe.cat_recipe.title
    my_container.querySelector("." + my_json_list[n].meal_type).querySelector(".title").innerText = this_attr    

    this_attr = my_json_list[n].user_recipe.cat_recipe.pic_url
    my_container.querySelector("." + my_json_list[n].meal_type).querySelector(".pic_url").setAttribute("src",this_attr)

    this_attr = my_json_list[n].user_recipe.cat_recipe.level
    my_container.querySelector("." + my_json_list[n].meal_type).querySelector(".level").innerText = this_attr

}

function clone_html_item(){
    
    my_item =  document.createElement("div")
    my_container.appendChild(my_item)

    my_container.lastElementChild.outerHTML = my_container.firstElementChild.outerHTML

}

// the callback needs to be without parenthesis
function container_handler(my_container_name, populate_nodes){
    
    my_container = document.querySelector(my_container_name)
    my_template_item = my_container.children[0]

    json_items_num = my_json_list.length
    console.log("container_handler with " + json_items_num + " items")

    if (my_container_name == ".json_container0"){
    
        populate_nodes(0)
    
    } else if (my_container_name == ".json_container1") {

        if (json_items_num > 1) {

            for(i=0; i < json_items_num; i++){         
    
                if( my_json_list[i].meal_date == "2021-09-06") {

                    populate_nodes(i)

                }                 
                        
            }
        } 

    }  

}

const transfer_retrieve = async() =>{

    // Here instead to have just one container, we need to split it into 4
    my_json_list = await getRecipeByID();
    console.log("transfer retrieve desde menu planner")

    container_handler(".json_container0", populate_nodes_header)
    container_handler(".json_container1", populate_nodes_meals)
        
}


$(document).ready(() => {

    transfer_retrieve();

});
