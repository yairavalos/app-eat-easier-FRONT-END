console.log("hola")

let olla_de_presion = document.querySelector('#olla_de_presion')
let licuadora = document.querySelector('#licuadora')
let microondas = document.querySelector('#microondas')
let horno = document.querySelector('#horno')
let procesador = document.querySelector('#procesador')
let estufa = document.querySelector('#estufa')



let kitchenDict = {
    "olla_de_presion": olla,
    "licuadora": licua,
    "microondas": micro,
    "horno": horno,
    "procesador": proces,
    "estufa": estuf
}

let currentKitchen = ""
let adultQty = 0


olla_de_presion.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('pressed')) {

        e.target.classList.remove('pressed')

    } else {
        e.target.classList.add('pressed')
    }
    // e.target.classList
})

licuadora.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }
    // e.target.classList
})

microondas.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }
    // e.target.classList
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

function selectedApliance() {
    var results = [];
    for (var i = classList('check'); i < arguments.length; i++) {
        results.push(arguments[i]);
    }
    return results;
}
var userSelect = selectedApliance('estufa', 'horno', 'microondas');
console.log(userSelect);

checked = ("estufa", "licuadora", "microondas", "horno")
if (classlist.contains('check')) {

}


let kitchen_next = document.querySelector('#kitchen_next')

people_next.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('click')
    let response = postFetch(people_qty)
    if (response.status === 200 || response.status === 201) {
        window.location.href = pereferred_food.html

    }
})