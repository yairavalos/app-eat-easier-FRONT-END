console.log("hola kitchen")
const API_URL = "http://localhost:8000/api/"

let olla_de_presion = document.querySelector('#olla_de_presion')
let licuadora = document.querySelector('#licuadora')
let microondas = document.querySelector('#microondas')
let horno = document.querySelector('#horno')
let procesador = document.querySelector('#procesador')
let estufa = document.querySelector('#estufa')


let lockFunctions = false
let kitchenDict = []
let currentKitchen = ""
let kitchenSelected = [""]


olla_de_presion.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('pressed')) {

        e.target.classList.remove('pressed')

    } else {
        e.target.classList.add('pressed')
    }
    currentKitchen = "olla_de_presion"
    kitchenSelected = ["olla_de_presion"]

})

licuadora.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }
    currentKitchen = "licuadora"
    kitchenSelected = ["licuadora"]
})

microondas.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

})

horno.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('pressed')) {

        e.target.classList.remove('pressed')

    } else {
        e.target.classList.add('pressed')
    }
    // e.target.classList
})

procesador.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('pressed')) {

        e.target.classList.remove('pressed')

    } else {
        e.target.classList.add('pressed')
    }
    // e.target.classList
})


estufa.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }
    // e.target.classList
})


// --------------------------------------------------------------------------------------------------------------------

// USER ID INITIAL CONFIGURATION

let welcome = document.getElementById('user_welcome')

if (localStorage.length > 1) {
    welcome.innerText = "Hola " + localStorage.user
    people_qty.user_profile = localStorage.id
}


let blockConfirm = document.querySelector('#block_next')
let btnNext = document.querySelector('#people_next')

let blockSave = document.querySelector('#block_save')
let btnSave = blockSave.querySelector('.btn-green')
btnSave.style.display = "none"


// --------------------------------------------------------------------------------------------------------------------

function generateJSON(){

    /*  TO BE VALIDATED
    let kitchenPressed = document.querySelectorAll(".btn-kit i.pressed")

    for (let i = 0; i < kitchenPressed.length; i++) {
        console.log(i.parentNode)
    }
    */


    kitchenDict = []
    let kitchenCheck = document.querySelectorAll(".btn-kit i.check")

    let kitchenPressed = document.querySelectorAll(".btn-kit img.pressed")
    let datos = []
    for (let i = 0; i < kitchenPressed.length; i++) {
        console.log(i.parentNode)
        let result = kitchenPressed[i].closest(".btn-kit").id
        datos.push({
            user_profile: 12,
            app_name: result
        })
    }


    for (let i = 0; i < kitchenCheck.length; i++) {
        console.log(i.parentNode)
        let result = kitchenCheck[i].closest(".btn-kit").id
        datos.push({
            user_profile: 12,
            app_name: result
        })
    }

}


// -------------------------------------------------------------------------------------------------------------------------------

btnNext.addEventListener('click', (e) => {
    window.location.href = "preferred_food.html"  
})


btnSave.addEventListener('click', (e) => {
    e.preventDefault()
    lockFunctions = true

    try {
        let response = postFetch("users/profiles/qty/", people_qty)
        setTimeout(function() { window.location.href = "preferred_food.html" }, 3000);

    } catch (error) {
        console.log(error)

    }

})


// ---------------------------------------------------------------------------------------------------------------

function handleEmptyProfile(errorMsg){

    lockFunctions = false
    console.log("My Response Catch Error: ", errorMsg)

    blockConfirm.querySelector('.btn-nar').style.display = "none"
    blockConfirm.style.display = "none"

    btnSave.style.display = "block"

}

window.addEventListener('load', (e)=>{

    let myResponse = retrieveProfile()

    myResponse.then(console.log("AJAX Retrieve in Main", myResponse.dataResult))
    myResponse.then(()=>{fillAdultRow(people_qty.adults_qty)})
    myResponse.then(()=>{fillChildRow(people_qty.child_qty)})
    myResponse.then(()=>{lockFunctions = true})
    myResponse.catch((error)=>{handleEmptyProfile(error)})

})
