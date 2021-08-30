const API_URL = "http://localhost:8000/api/";

let user_profile_id = 1
let user_planner_id = 5
let my_json_list = []


const getUserMenuPlanner = async() => {

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


function populate_nodes(n){

    this_attr = my_json_list[n].id
    my_container.lastElementChild.setAttribute("id", this_attr)

    this_attr = my_json_list[n]
    my_container.lastElementChild.querySelectorAll(".json_node .pic_url")[0].setAttribute("src", this_attr)


}

function clone_html_item(){
    
    my_item =  document.createElement("div")
    my_container.appendChild(my_item)

    my_container.lastElementChild.outerHTML = my_container.firstElementChild.outerHTML

}

function container_handler(){

    // This function its going to handler 3 different containers
    // The 3 of them are goint to have the exactly same functions
    // The main difference its going to be meal_type = desayuno | comida | cena
    console.log("hola")

}

const transfer_retrieve = async() =>{

    my_json_list = await getUserMenuPlanner();
    json_items_num = my_json_list.length

    if (json_items_num > 1) {

        for(i=0; i < json_items_num; i++){
            
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

    // We need to address 3 different containers
    // maybe would be better to move this to container_handler
    my_container = document.querySelector(".json_container")
    my_template_item = my_container.children[0]

    transfer_retrieve();

});
