const API_URL = "http://localhost:8000/api/";

let user_profile_id = 0
let my_json_list = []
let busqueda = " "
let busquedaMv = " "
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

    let titleSearch = document.querySelector(".title-search")
    titleSearch.innerText = my_json_list[i].meal_type
    let childs = document.querySelectorAll(".json_item")
    for (let i = 0; i < childs.length; i++) {
        //  childs[i].

        this_attr = my_json_list[i].id
        childs[i].setAttribute("id", this_attr)

        this_attr = my_json_list[i].pic_url
        childs[i].querySelectorAll(".json_node .pic_url")[0].setAttribute("src", this_attr)

        this_attr = my_json_list[i].title
        childs[i].querySelectorAll(".title")[0].innerText = this_attr

        this_attr = my_json_list[i].meal_type
        childs[i].querySelectorAll(".meal_type")[0].innerText = this_attr
    }



    //this_attr = my_json_list[n].cat_recipe.level
    //my_container.lastElementChild.querySelectorAll(".level")[0].innerText = this_attr

}

function clone_html_item() {
    let my_item = `<div class="card card-2 mb-3 p-0 col-12 col-md-5 flex-wrap json_item" id="">
    <div class="row g-0">
        <div class="col-4 col-md-6 ps-0">
            <a href="detalle_receta.html" class="json_node">
                <img src="./assets/fotos/pollo-papas.jpg" class="img-small img-fluid g-0 json_node pic_url" alt="pollo" />
            </a>
        </div>

        <div class="col-8 col-md-6">
            <div class="card-body  d-flex flex-column  justify-content-between">
                <div class="d-flex  ">
                    <h5 class="card-title  json_node title">
                        Pollo con papas
                    </h5>
                
                </div>

                <div class="row">
                    <p class="card-text d-fex json_node_value json_node meal_type">
                        Meal Type
                    </p>
                    <div class="d-flex  justify-content-between">
                        <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25.0687 1.75686C21.9078 -0.884795 17.0242 -0.488004 14 2.57218C10.9758 -0.488004 6.09219 -0.890231 2.93125 1.75686C-1.18124 5.19753 -0.579681 10.807 2.35157 13.7802L11.9437 23.4934C12.4906 24.0478 13.2234 24.3577 14 24.3577C14.782 24.3577 15.5094 24.0533 16.0562 23.4989L25.6484 13.7856C28.5742 10.8124 29.1867 5.20296 25.0687 1.75686ZM23.7781 11.9484L14.1859 21.6617C14.0547 21.7921 13.9453 21.7921 13.8141 21.6617L4.22188 11.9484C2.22579 9.92641 1.8211 6.09982 4.6211 3.75712C6.74844 1.97971 10.0297 2.24605 12.0859 4.32785L14 6.26832L15.9141 4.32785C17.9812 2.23518 21.2625 1.97971 23.3789 3.75169C26.1734 6.09439 25.7578 9.94272 23.7781 11.9484Z"
                                fill="#E30C0C" />
                        </svg>
                        <section class="d-flex">
                            <p class="card-level me-2 json_node level">Bajo</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF8908" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                                <path
                                    d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                            </svg>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
    let newItem = document.createElement('div');
    my_container.appendChild(newItem);

    my_container.lastElementChild.outerHTML = my_item

}

const transfer_retrieve = async(search) => {
    let childs = document.querySelectorAll(".json_item")
    my_container = document.querySelector(".json_container")

    my_json_list = await getSearch(search, true);
    json_items_num = my_json_list.length

    if (json_items_num > 1) {

        for (i = 0; i < json_items_num; i++) {

            if (i > childs.length) {
                clone_html_item()
            }

            if (i === json_items_num - 1) {
                for (let j = 0; j < json_items_num; j++) {
                    populate_nodes(j)
                }
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

    my_template_item = my_container.children[0]

    user_profile_id =
        transfer_retrieve(searchDesk);

})


let searchMov = document.querySelector("#search-mov")
searchMov.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("click")
    let inputSearchMov = document.querySelector("#input-search-mov").value
    busquedaMv = inputSearchMov
    getSearch(inputSearchMov)

    my_container = document.querySelector(".json_container")
        //my_container.innerHTML = ""

    my_template_item = my_container.children[0]

    user_profile_id =
        transfer_retrieve(inputSearchMov);

})
$(document).ready(() => {

    //my_container = document.querySelector(".json_container")
    //my_template_item = my_container.children[0]

    //user_profile_id =
    //    transfer_retrieve();


});