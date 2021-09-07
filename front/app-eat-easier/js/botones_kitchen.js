console.log("hola")

let olla_de_presion = document.querySelector('#olla_de_presion')
let licuadora = document.querySelector('#licuadora')
let microondas = document.querySelector('#microondas')
let horno = document.querySelector('#horno')
let procesador = document.querySelector('#procesador')
let estufa = document.querySelector('#estufa')

let apps_dict = {}

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