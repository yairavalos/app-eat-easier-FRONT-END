const API_URL = "http://localhost:8000/api/";

let user_profile_id = 0
let my_json_list = []


// USER ID INITIAL CONFIGURATION

let welcome = document.getElementById('user_welcome')

if (localStorage.length > 1) {
    welcome.innerText = "Hola " + localStorage.user
}

const getPlan = async() => {
    const response = await fetch(`${API_URL}users/${user_profile_id}/favorites/`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    //console.log(data);
    return data


};


// AJAX Comms to End-Point
const postFetch = async(postData) => {

    const data = await fetch(`${API_URL}api/users/profiles/planner/menu/`, {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData)
    })

    const dataResult = await data.json()
    console.log("Data Result from Post Fetch: ", dataResult)
        //saveUserProfile(dataResult) -> according to response this function would change

    return dataResult
}



const filtrarComida = async(valor) => {
    let plan = await getPlan()
    let recipe_titulo = document.getElementById("favorit_recipe")
    let elementosOption = document.querySelectorAll(".elementosOption")
    if (elementosOption.length > 0) {
        for (let i = 0; i < elementosOption.length; i++) {
            elementosOption[i].remove()
        }
    }
    //console.log(plan)
    const comidaFiltrada = plan.filter(comida => {
        //console.log(comida)
        if (comida.cat_recipe.meal_type === valor) {

            return comida
        }
    })
    console.log(comidaFiltrada)

    return comidaFiltrada

}
$("#tipo-desayuno").change(async() => {
    filtrarComida($("#tipo-desayuno").val())
        .then(function(data) {

            let comidas = '<option id="recipe_title" value="elegir">Elegir receta</option>'
            data.forEach((desayuno) => {
                comidas += `
            <option  
                value="${desayuno.cat_recipe.id }"
                data-recipeid="${desayuno.cat_recipe.id }"
                data-id="${desayuno.id}"
            >${desayuno.cat_recipe.title}</option>
            `
            })
            document.getElementById("desayuno-favorito").innerHTML = comidas
        })
})


$("#tipo-comida").change(async() => {
    filtrarComida($("#tipo-comida").val())
        .then(function(data) {

            let comidas = '<option id="recipe_title" value="elegir">Elegir receta</option>'
            data.forEach((comida) => {
                comidas += `
                <option  
                    value="${comida.cat_recipe.id }"
                    data-recipeid="${comida.cat_recipe.id }"
                    data-id="${comida.id}"
                >${comida.cat_recipe.title}</option>
                `
            })
            document.getElementById("comida-favorita").innerHTML = comidas
        })

})

$("#tipo-cena").change(async() => {
    filtrarComida($("#tipo-cena").val())
        .then(function(data) {

            let comidas = '<option id="recipe_title" value="elegir">Elegir receta</option>'
            data.forEach((cena) => {
                comidas += `
                <option  
                    value="${cena.cat_recipe.id }"
                    data-recipeid="${cena.cat_recipe.id }"
                    data-id="${cena.id}"
                >${cena.cat_recipe.title}</option>
                `
            })
            document.getElementById("cena-favorita").innerHTML = comidas
        })

})





function generateWeekNum(start_date) {

    let now = new Date(start_date);
    let onejan = new Date(now.getFullYear(), 0, 1);
    let week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7) - 1;

    console.log(week);
    return week
}

//function generateEndDate(period, start_date) {//

//    let myDate = new Date(start_date)//

//    if (period == "semanal") {
//        myDate.setDate(myDate.getDate() + 7)
//    } else if (period == "quincenal") {
//        myDate.setDate(myDate.getDate() + 14)
//    }
//    return myDate.toISOString().substr(0, 10)
//}

//function generateJSON() {
//
//    let myMenuDict = {
//    "id": 31,
//    "user_planner": 13,
//    "meal_date": "2021-09-13",
//    "meal_type": "desayuno",
//    "user_recipe": 15,
//    "done": false
//}
//    myMenuDict.end_date = generateEndDate(myMenuDict.period, myMenuDict.start_date)
//
//    console.log("Generated JSON: ", myMenuDict)
//    return myMenuDict
//}

function modalHandler() {

    if (localStorage.length > 1) {
        myModal1._element.querySelector('#modal_message').innerText = "LISTO !!! Por favor presiona siguiente"
        myModal1._element.querySelector("#modal_continue").style.display = "block"
    } else {
        myModal1._element.querySelector('#modal_message').innerText = "Por favor revisa tus datos de nuevo"
        myModal1._element.querySelector("#modal_back").style.display = "block"
    }

}

//myForm.addEventListener('submit', (e) => {
//
//    e.preventDefault()
//
//    let jsonPOST = generateJSON()
//    console.log("My JSON to be Posted: ", jsonPOST)
//
//    let myResponse = postFetch(jsonPOST)
//    setTimeout(() => { modalHandler() }, 2000)
//
//    myModal1.show()
//    myResponse.then((dataResult) => { console.log("AJAX POST Result from Event Listener its", dataResult) })
//    myResponse.catch((error) => { console.log("Ajax Catch Error is: ", error) })
//
//})
function guardarTiempo() {
    let meal_date = document.getElementById("myDatePicker")
    console.log(meal_date)
}




$(document).ready(async() => {

    my_container = document.querySelector(".json_container")
    my_template_item = my_container.children[0]



    $('#myDatePicker').datepicker({
        format: "yyyy-mm-dd",
        language: "es",
        calendarWeeks: true,
        autoclose: true,
        todayHighlight: true
    })

    $('#myDatePicker').datepicker().on('changeDate', function(e) {
            user_period_start = $('#myDatePicker').datepicker('getFormattedDate')
            console.log(user_period_start.toString())
        })
        //let recipe_titulo = document.getElementById("favorit_recipe")
        //let planDesayuno = await getPlan()
        //planDesayuno.filter(comida => {
        //    //console.log(comida)
        //    if (comida.cat_recipe.meal_type === "desayuno") {
        //
        //        let element = document.createElement("option")
        //        element.innerText = comida.cat_recipe.title
        //        element.setAttribute("id", comida.cat_recipe.title)
        //        element.setAttribute("value", comida.cat_recipe.title)
        //        element.setAttribute("class", "elementosOption")
        //        recipe_titulo.append(element)
        //        return comida
        //    }
        //})
    $("#tipo-desayuno").val("desayuno").trigger("change")
    $("#tipo-comida").val("comida").trigger("change")
    $("#tipo-cena").val("cena").trigger("change")

    $('#guardar_menu').click(() => {
        var done = false
        var meal_date = $('#myDatePicker').val()
        var user_planner = 13
        var idDesayuno = $('#desayuno-favorito').val()
        var user_recipeDesayuno = 15
        var idComida = $('#comida-favorita').val()
        var user_recipeComida = 15
        var idCena = $('#cena-favorita').val()
        var user_recipeCena = 15
            //console.log(id, user_planner, meal_date, meal_type, user_recipe, done)
        $.post(`${API_URL}users/profiles/planner/menu/ `, {
            id: idDesayuno,
            user_planner: user_planner,
            meal_date: meal_date,
            meal_type: "desayuno",
            user_recipe: user_recipeDesayuno,
            done: done
        }).done(function(data) {
            console.log('desayuno guardado')
            $.post(`${API_URL}users/profiles/planner/menu/ `, {
                id: idComida,
                user_planner: user_planner,
                meal_date: meal_date,
                meal_type: "comida",
                user_recipe: user_recipeComida,
                done: done
            }).done(function(data) {
                console.log('comida guardada')
                $.post(`${API_URL}users/profiles/planner/menu/ `, {
                    id: idCena,
                    user_planner: user_planner,
                    meal_date: meal_date,
                    meal_type: "cena",
                    user_recipe: user_recipeCena,
                    done: done
                }).done(function(data) {
                    console.log('Cena guardada')
                    window.location.href = 'http://127.0.0.1:5501/front/app-eat-easier/ver_menu.html?id_planner=1234'
                })
            })
        })
    })


});