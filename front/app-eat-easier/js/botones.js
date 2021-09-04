console.log("hola")

let adult1 = document.querySelector('#adult1')
let adult2 = document.querySelector('#adult2')
let adult3 = document.querySelector('#adult3')
let adult4 = document.querySelector('#adult4')
let adult5 = document.querySelector('#adult5')

adult1.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }
    // e.target.classList
})

adult2.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

})


adult3.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

})


adult4.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

})

adult5.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

})











let child1 = document.querySelector('#child1')
let child2 = document.querySelector('#child2')
let child3 = document.querySelector('#child3')
let child4 = document.querySelector('#child4')
let child5 = document.querySelector('#child5')





child1.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

})

child2.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

})

child3.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

})

child4.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

})

child5.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

})