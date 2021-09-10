console.log("hola")
const API_URL = "http://localhost:8000/api/"

//pereferred_food

let res = document.querySelector('#res')
let pollo = document.querySelector('#pollo')
let cerdo = document.querySelector('#cerdo')
let pescado = document.querySelector('#pescado')
let huevo = document.querySelector('#huevo')
let cheese = document.querySelector('#cheese')
let frutas = document.querySelector('#frutas')
let verduras = document.querySelector('#verduras')
let gluten = document.querySelector('#gluten')

let foodDict = []
let lockFunctions = false

// FOOD ICONS EVENT HANDLERS


res.addEventListener('click', (e) => {

    console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        } // e.target.classList
    }
})


pollo.addEventListener('click', (e) => {
    console.log(e.target.classList)

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
    console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    } // e.target.classList
})

pescado.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    } // e.target.classList
})

huevo.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    } // e.target.classList
})

lacteos.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    } // e.target.classList
})

frutas.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    } // e.target.classList
})

verduras.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (lockFunctions === false) {
        if (e.target.classList.contains('check')) {

            e.target.classList.remove('check')

        } else {
            e.target.classList.add('check')
        }
    } // e.target.classList
})

gluten.addEventListener('click', (e) => {
    console.log(e.target.classList)

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


function jsongenerator() {
    foodDict = []
    let datos = []
    let foodCheck = document.querySelectorAll(".btn-food i.check")

    for (let i = 0; i < foodCheck.length; i++) {
        console.log(i.parentNode)
        let result = foodCheck[i].closest(".btn-food").id
        datos.push({
            user_profile: 0,
            food_type: result
        })
    }
}






// RETRIEVE USER PROFILE FOOD
const retrieveProfile = async() => {

    const data = await fetch(`${API_URL}users/profiles/food/?search=${localStorage.id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })

    const dataResult = await data.json()
    update(dataResult)
    console.log("AJAX Fetch Result:", dataResult)

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

    try {
        let response = postFetch("users/profiles/food/", datos)
        setTimeout(function() { window.location.href = "kitchen.html" }, 3000);

    } catch (error) {
        console.log(error)

    }

})


// ---------------------------------------------------------------------------------------------------------------

function handleEmptyProfile(errorMsg) {

    lockFunctions = false
    console.log("My Response Catch Error: ", errorMsg)

    blockConfirm.querySelector('.btn-nar').style.display = "none"
    blockConfirm.style.display = "none"

    btnSave.style.display = "block"

}

window.addEventListener('load', (e) => {

    let myResponse = retrieveProfile()

    myResponse.then(console.log("AJAX Retrieve in Main", myResponse.dataResult))
    myResponse.then(() => { fillAdultRow(food_type) })
        //myResponse.then(() => { fillChildRow(people_qty.child_qty) })
        //myResponse.then(() => { lockFunctions = true })
        //myResponse.catch((error) => { handleEmptyProfile(error) })

})