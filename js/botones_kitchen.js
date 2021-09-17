const API_URL = "http://localhost:8000/api/"

let olla_de_presion = document.querySelector('#olla_de_presion')
let licuadora = document.querySelector('#licuadora')
let microondas = document.querySelector('#microondas')
let horno = document.querySelector('#horno')
let procesador = document.querySelector('#procesador')
let estufa = document.querySelector('#estufa')

let lockFunctions = false
let kitchenDict = []
let kitchenSelected = [""]

let kitchenIcon = {
    "olla_de_presion": "pressed",
    "licuadora": "check",
    "microondas": "check",
    "horno": "pressed",
    "procesador": "pressed",
    "estufa": "check"
}


// -------------------------------------------------------------------------------------------------------------------

olla_de_presion.addEventListener('click', (e) => {
    //console.log(e.target.classList)

    if (lockFunctions === false) {

        if (e.target.classList.contains('pressed')) {

            e.target.classList.remove('pressed')

        } else {
            e.target.classList.add('pressed')
        }
    }
})

licuadora.addEventListener('click', (e) => {
    //console.log(e.target.classList)

    if (lockFunctions === false) {

        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    }
})

microondas.addEventListener('click', (e) => {
    //console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    }
})

horno.addEventListener('click', (e) => {
    //console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('pressed')) {

            e.target.classList.remove('pressed')

        } else {
            e.target.classList.add('pressed')
        }
    }
})

procesador.addEventListener('click', (e) => {
    //console.log(e.target.classList)

    if (lockFunctions === false) {

        if (e.target.classList.contains('pressed')) {

            e.target.classList.remove('pressed')

        } else {
            e.target.classList.add('pressed')
        }
    }
})


estufa.addEventListener('click', (e) => {
    //console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    }
})


// --------------------------------------------------------------------------------------------------------------------

// USER ID INITIAL CONFIGURATION

let welcome = document.getElementById('user_welcome')

if (localStorage.length > 1) {
    welcome.innerText = "Hola " + localStorage.user
}


let blockConfirm = document.querySelector('#block_next')
let btnNext = document.querySelector('#people_next')

let blockSave = document.querySelector('#block_save')
let btnSave = blockSave.querySelector('.btn-green')
btnSave.style.display = "none"


// --------------------------------------------------------------------------------------------------------------------

function generateJSON() {

    kitchenDict = []
    let datos = []

    let kitchenCheck = document.querySelectorAll(".btn-kit i.check")
    let kitchenPressed = document.querySelectorAll(".btn-kit img.pressed")

    for (let i = 0; i < kitchenPressed.length; i++) {

        let result = kitchenPressed[i].closest(".btn-kit").id
        datos.push({
            user_profile: localStorage.id,
            app_name: result
        })
    }

    for (let i = 0; i < kitchenCheck.length; i++) {

        let result = kitchenCheck[i].closest(".btn-kit").id
        datos.push({
            user_profile: localStorage.id,
            app_name: result
        })
    }

    return datos
}


function dumpJSON(datos) {

    for (let i = 0; i < datos.length; i++) {

        if (datos[i].app_name == "olla de presion") {
            document.getElementById("olla_de_presion").firstElementChild.classList.add(kitchenIcon["olla_de_presion"])
        } else {
            document.getElementById(datos[i].app_name).firstElementChild.classList.add(kitchenIcon[datos[i].app_name])
        }
    }
}


// -------------------------------------------------------------------------------------------------------------------------------

// RETRIEVE USER PROFILE
const retrieveProfile = async() => {

    const data = await fetch(`${API_URL}users/profiles/apps/?search=${localStorage.id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })

    const dataResult = await data.json() //dumpJSON(dataResult) -> could be optional do it here or into a "then"
    console.log("AJAX Fetch Result:", dataResult)

    return dataResult
}


// POST USER PROFILE
const postFetch = async(url, datos) => {
    const data = await fetch(`${API_URL + url}`, {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos)
    })
    return await data.json()
}


// -------------------------------------------------------------------------------------------------------------------------------

btnNext.addEventListener('click', (e) => {
    window.location.href = "sugerencias.html"
})


btnSave.addEventListener('click', (e) => {
    e.preventDefault()
    lockFunctions = true

    dataToSend = generateJSON()
        //console.log("Saving this AJAX POST before to go", dataToSend)

    try {
        let response = postFetch("users/profiles/apps/", dataToSend)
        setTimeout(function() { window.location.href = "#" }, 2000);

    } catch (error) {
        console.log(error)

    }

})


// ---------------------------------------------------------------------------------------------------------------

function handleEmptyProfile(dataResult) {

    if (dataResult.length == 0) {

        lockFunctions = false

        blockConfirm.querySelector('.btn-nar').style.display = "none"
        blockConfirm.style.display = "none"

        btnSave.style.display = "block"

    } else {

        lockFunctions = true
        dumpJSON(dataResult)
    }
}

window.addEventListener('load', (e) => {

    let myResponse = retrieveProfile()

    myResponse.then(console.log("AJAX Retrieve in Main", myResponse.dataResult))
    myResponse.then((dataResult) => { handleEmptyProfile(dataResult) })
    myResponse.catch((error) => { console.log(error) })

})




/*  TO BE VALIDATED
    let kitchenPressed = document.querySelectorAll(".btn-kit i.pressed")

    for (let i = 0; i < kitchenPressed.length; i++) {
        console.log(i.parentNode)
    }
    */