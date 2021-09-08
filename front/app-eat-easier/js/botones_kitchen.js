console.log("hola kitchen")
const API_URL = "http://localhost:8000/api/"

let olla_de_presion = document.querySelector('#olla_de_presion')
let licuadora = document.querySelector('#licuadora')
let microondas = document.querySelector('#microondas')
let horno = document.querySelector('#horno')
let procesador = document.querySelector('#procesador')
let estufa = document.querySelector('#estufa')



let kitchenDict = []

//FETCH
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

let kitchenPressed = document.querySelectorAll(".btn-kit i.pressed")

for (let i = 0; i < kitchenPressed.length; i++) {
    console.log(i.parentNode)
}












//boton siguiente
let kitchen_next = document.querySelector('#kitchen_next')
    //document.querySelector('#kitchen_next').onClick = function(e) {
    //    e.preventDefault();
    //    console.log("kitchen_next")
    //}

kitchen_next.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('click')
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

    try {
        let response = postFetch("users/profiles/apps/", datos)
        setTimeout(function() { window.location.href = "home.html" }, 3000);

    } catch (error) {
        console.log(error)

    }

    //if (response.status === 200 || response.status === 201) {
    //    window.location.href = home.html


})