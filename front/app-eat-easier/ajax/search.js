const API_URL = "http://localhost:8000/api/";

let user_profile_id = 0
let my_json_list = []
let busqueda = "desayuno"

const getSearch = async(search, searchNeeded) => {
    let url = ""
    try {
        if (searchNeeded) {
            url = `${API_URL}recipes/?search=${search}`
        } else {

            url = `${API_URL}recipes/?search=${busqueda}`
        }
        const response = await fetch(`${API_URL}recipes/?search=${search}`, {
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

    //this_attr = my_json_list[n].cat_recipe.pic_url
    //my_container.lastElementChild.querySelectorAll(".json_node .pic_url")[0].setAttribute("src", this_attr)

    this_attr = my_json_list[n].title
    my_container.lastElementChild.querySelectorAll(".title")[0].innerText = this_attr

    this_attr = my_json_list[n].meal_type
    my_container.lastElementChild.querySelectorAll(".meal_type")[0].innerText = this_attr

    //this_attr = my_json_list[n].cat_recipe.level
    //my_container.lastElementChild.querySelectorAll(".level")[0].innerText = this_attr

}

function clone_html_item() {

    my_item = document.createElement("div")
    my_container.appendChild(my_item)

    my_container.lastElementChild.outerHTML = my_container.firstElementChild.outerHTML

}

const transfer_retrieve = async(search) => {
    my_container = document.querySelector(".json_container")

    my_json_list = await getSearch(search, true);
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

let search = document.querySelector("#search-desk")
search.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("click")
    let searchDesk = document.querySelector("#input-search-desk").value
    busqueda = searchDesk
    getSearch(searchDesk)

    my_container = document.querySelector(".json_container")
        //my_container.innerHTML = ""
    let childs = document.querySelectorAll(".json_item")
    for (let i = 0; i < childs.length; i++) {
        childs[i].remove()
    }
    my_template_item = my_container.children[0]

    user_profile_id =
        transfer_retrieve(searchDesk);

})

$(document).ready(() => {

    //my_container = document.querySelector(".json_container")
    //my_template_item = my_container.children[0]

    //user_profile_id =
    //    transfer_retrieve();


});