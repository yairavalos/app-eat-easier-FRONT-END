console.log("hola")

const API_URL = "http://localhost:8000/api/"

// ALGORITHM FOR ADULT COLOR TOGGLE SELECTOR 

let adult_row = document.querySelector("#container_adult")
let child_row = document.querySelector("#container_child")

let adult1 = document.querySelector('#adult1')
let adult2 = document.querySelector('#adult2')
let adult3 = document.querySelector('#adult3')
let adult4 = document.querySelector('#adult4')
let adult5 = document.querySelector('#adult5')


const postFetch = async(datos) => {
    const data = await fetch(`${API_URL}users/profiles/qty/`, {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos)
    })
    return await data
}


let people_qty = {
    user_profile: 23,
    adults_qty: 0,
    child_qty: 0
}
console.log(people_qty)

// ADULT DEFINITION

let adult_dict = {
    "adult1": 1,
    "adult2": 2,
    "adult3": 3,
    "adult4": 4,
    "adult5": 5
}

let current_adult = ""
let adultQty = 0

// CHILDREN DEFINITION

let child_dict = {
    "child1": 1,
    "child2": 2,
    "child3": 3,
    "child4": 4,
    "child5": 5
}

let current_child = ""
let chilQty = 0




// ADULT ICONS EVENT HANDLERS

adult1.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

    current_adult = "adult1"
    people_qty.adults_qty = adult_dict["adult1"]
    fillAdultRow("adult1")

})

adult2.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

    current_adult = "adult2"
    people_qty.adults_qty = adult_dict["adult2"]
    fillAdultRow("adult2")

})


adult3.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

    current_adult = "adult3"
    people_qty.adults_qty = adult_dict["adult3"]
    fillAdultRow("adult3")

})


adult4.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

    current_adult = "adult4"
    people_qty.adults_qty = adult_dict["adult4"]
    fillAdultRow("adult4")
})


adult5.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

    current_adult = "adult5"
    people_qty.adults_qty = adult_dict["adult5"]
    fillAdultRow("adult5")

})




// ALGORITHM FOR CHILD COLOR TOGGLE SELECTOR 


let child1 = document.querySelector('#child1')
let child2 = document.querySelector('#child2')
let child3 = document.querySelector('#child3')
let child4 = document.querySelector('#child4')
let child5 = document.querySelector('#child5')


// ADULT ICONS EVENT HANDLERS

child1.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

    current_child = "child1"
    people_qty.child_qty = child_dict["child1"]
    fillChildRow("child1")

})

child2.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

    current_child = "child2"
    people_qty.child_qty = child_dict["child2"]
    fillChildRow("child2")

})

child3.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

    current_child = "child3"
    people_qty.child_qty = child_dict["child3"]
    fillChildRow("child3")

})

child4.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

    current_child = "child4"
    people_qty.child_qty = child_dict["child4"]
    fillChildRow("child4")

})

child5.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

    current_child = "child5"
    people_qty.child_qty = child_dict["child5"]
    fillChildRow("child5")

})


let people_next = document.querySelector('#people_next')

people_next.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('click')
    let response = postFetch(people_qty)
    if (response.status === 200 || response.status === 201) {
        location.href = "pereferred_food.html"

    }
})


// STEP 1.

function fillAdultRow(fill_num) {

    for (i = 0; i <= adult_row.children.length - 1; i++) {

        if (i <= adult_dict[fill_num] - 1) {

            adult_row.children[i].querySelector("i").classList.add("check")

        } else {

            adult_row.children[i].querySelector("i").classList.remove("check")

        }

    }

}


// STEP 2
//child_row = document.querySelector("#container_child")

function fillChildRow(fill_num) {

    for (i = 0; i <= child_row.children.length - 1; i++) {

        if (i <= child_dict[fill_num] - 1) {

            child_row.children[i].querySelector("i").classList.add("check")

        } else {

            child_row.children[i].querySelector("i").classList.remove("check")

        }

    }

}


/*

    Algoritmo para pasar de Front-End 
    a Back-End por Ajax

    1. Ir a la fila de adultos y encontrar la posición
    seleccionada
    2. Lo mismo con la de niños
    
    3. Generar la estructura JSON como lo pide el Back-End
    4. Llenar dicha estructura de acuerdo a las opciones
    seleccionadas
    5. Ir a Local Storage y obtener los datos del Perfil
    del usuario para identificarse ante el BE
    6. Generar un Ajax Post para que se guarde en BE
    7. Tener una respuesta de confirmación del BE
    8. Guardar dicha selección en el Local Storage para
    evitar hacer demasiadas requisiciones al BE
    9. Manejar la navegación para ir a la sig. Pantalla

*/



// -----------------------------------------------------------------------
// CODE BACK-UP
// Under Review
// -----------------------------------------------------------------------

/*
function getAdultNumber() {

    adult_count = 0

    for (i = 0; i <= adult_row.children.length - 1; i++) {

        item = adult_row.children[i].querySelector("i") //.classList
        console.log("Item[" + i + "]: ", item)

        for (j = 0; j <= adult_row.children[i].querySelector("i").classList.length - 1; j++) {
            console.log("class type[" + j + "]: ", adult_row.children[i].querySelector("i").classList[j])

            if (adult_row.children[i].querySelector("i").classList[j] == "check") {
                adult_count = i + 1
            }

        }
    }

    console.log("El número de adultos es: ", adult_count)
    return adult_count

}
*/