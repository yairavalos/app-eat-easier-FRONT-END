const API_URL = "http://localhost:8000/api/";

let user_profile_id = 0
let my_json_list = []
let my_json_post =[]
let user_planner_id = 0
let user_period = ""
let user_period_start = ""


const getMenuGenerator = async() => {

    try {
        const response = await fetch(`${API_URL}users/${user_profile_id}/planners/`, {
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

const createPlanner = async() => {

    try {
        const response = await fetch(`${API_URL}users/${user_profile_id}/planners/`, {
            headers: {
                "Content-Type": "application/json",
                "method": "POST",
                "body": my_json_post
            },
        });

        const new_data = await response.json()
        console.log(new_data)

        return new_data

    } catch (error) {
        console.log(error)
    }

}


function populate_nodes(n) {

    this_attr = my_json_list[n].id
    my_container.lastElementChild.setAttribute("id", this_attr) //no se toca 

    this_attr = my_json_list[n].plan_title

    console.log(this_attr)
    my_container.lastElementChild.querySelectorAll(".plan_title")[0].innerText = this_attr



}

function clone_html_item() {

    my_item = document.createElement("div")
    my_container.appendChild(my_item)

    my_container.lastElementChild.outerHTML = my_container.firstElementChild.outerHTML

}

const transfer_retrieve = async() => {

    my_json_list = await getMenuGenerator();
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

    user_profile_id = 1
    user_planner_id = 1
    transfer_retrieve();

    $('#myDatePicker').datepicker({
        format: "yyyy-mm-dd",
        language: "es",
        calendarWeeks: true,
        autoclose: true,
        todayHighlight: true
    })


    $('#myDatePicker').datepicker().on('changeDate', function(e){
        user_period_start = $('#myDatePicker').datepicker('getFormattedDate')
        console.log(user_period_start.toString())
    })

    
});
