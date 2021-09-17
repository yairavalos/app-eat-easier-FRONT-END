console.log("hola")
const API_URL = "http://localhost:8000/api/"

//pereferred_food

let res = document.querySelector('#res')
let pollo = document.querySelector('#pollo')
let cerdo = document.querySelector('#cerdo')
let pescado = document.querySelector('#pescado')
let huevo = document.querySelector('#huevo')
let lacteos = document.querySelector('#lacteos')
let frutas = document.querySelector('#frutas')
let verduras = document.querySelector('#verduras')
let gluten = document.querySelector('#gluten')

let lockFunctions = false
let foodDict = []



let foodIcon = {
    "res": "check",
    "pollo": "check",
    "cerdo": "check",
    "pescado": "check",
    "huevo": "check",
    "lacteos": "check",
    "frutas": "check",
    "verduras": "check",
    "gluten": "check"
}




// FOOD ICONS EVENT HANDLERS


res.addEventListener('click', (e) => {

    //console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        } // e.target.classList
    }
})


pollo.addEventListener('click', (e) => {
    //console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
        // e.target.classList
    }
})

cerdo.addEventListener('click', (e) => {
    //console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    } // e.target.classList
})

pescado.addEventListener('click', (e) => {
    //console.log(e.target.classList)
    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    } // e.target.classList
})

huevo.addEventListener('click', (e) => {
    //console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    } // e.target.classList
})

lacteos.addEventListener('click', (e) => {
    //console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    } // e.target.classList
})

frutas.addEventListener('click', (e) => {
    //console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    } // e.target.classList
})

verduras.addEventListener('click', (e) => {
    //console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    } // e.target.classList
})

gluten.addEventListener('click', (e) => {
    //console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    } // e.target.classList
})


// --------------------------------------------------------------------------------------------------------------------

// USER ID INITIAL CONFIGURATION

let welcome = document.getElementById('user_welcome')

if (localStorage.length > 1) {
    welcome.innerText = "Hola " + localStorage.user
    foodDict.user_profile = localStorage.id
}


let blockConfirm = document.querySelector('#block_next')
let btnNext = document.querySelector('#food_next')

let blockSave = document.querySelector('#block_save')
let btnSave = blockSave.querySelector('.btn-green')
btnSave.style.display = "none"


// -------------------------------------------------------------------------------------------------------------------------------


function generateJSON() {
    foodDict = []
    let datos = []
    let foodCheck = document.querySelectorAll(".btn-food i.check")

    for (let i = 0; i < foodCheck.length; i++) {

        let result = foodCheck[i].closest(".btn-food").id
        datos.push({
            user_profile: localStorage.id,
            food_type: result
        })
    }
    //console.log("Data from generateJSON(): ", datos)
    return datos
}


function dumpJSON(datos) {

    for (let i = 0; i < datos.length; i++) {

        document.getElementById(datos[i].food_type).firstElementChild.classList.add(foodIcon[datos[i].food_type]);
    }
}


// -------------------------------------------------------------------------------------------------------------------------------

// RETRIEVE USER PROFILE FOOD
const retrieveProfile = async() => {

    const data = await fetch(`${API_URL}users/profiles/food/?search=${localStorage.id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })

    const dataResult = await data.json()

    //console.log("AJAX Fetch Result:", dataResult)

    return dataResult
}

// POST USER PROFILE FOOD
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
    window.location.href = "kitchen.html"
})


btnSave.addEventListener('click', (e) => {
    e.preventDefault()
    lockFunctions = true

    dataToSend = generateJSON()
        //console.log("Saving this AJAX POST before to go", dataToSend)

    try {
        let response = postFetch("users/profiles/food/", dataToSend)
        setTimeout(function() { window.location.href = "kitchen.html" }, 3000);

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