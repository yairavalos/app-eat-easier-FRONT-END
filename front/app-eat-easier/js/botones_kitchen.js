console.log("hola")

let pot = document.querySelector('#pot')
let blender = document.querySelector('#blender')
let microwave = document.querySelector('#microwave')
let oven = document.querySelector('#oven')
let proces = document.querySelector('#process')
let stove = document.querySelector('#stove')

pot.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('pressed')) {

        e.target.classList.remove('pressed')

    } else {
        e.target.classList.add('pressed')
    }
    // e.target.classList
})

blender.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }
    // e.target.classList
})

microwave.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }
    // e.target.classList
})

oven.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('pressed')) {

        e.target.classList.remove('pressed')

    } else {
        e.target.classList.add('pressed')
    }
    // e.target.classList
})

proces.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('pressed')) {

        e.target.classList.remove('pressed')

    } else {
        e.target.classList.add('pressed')
    }
    // e.target.classList
})

oven.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }
    // e.target.classList
})

stove.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }
    // e.target.classList
})