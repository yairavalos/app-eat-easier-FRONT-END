console.log("hola")


// ALGORITHM FOR ADULT COLOR TOGGLE SELECTOR 

let adult_row = document.querySelector("#container_adult")

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
    
    let fill_num = getAdultNumber()
    fillAdultRow(fill_num)

})

adult2.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

    let fill_num = getAdultNumber()
    fillAdultRow(fill_num)

})


adult3.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

    let fill_num = getAdultNumber()
    fillAdultRow(fill_num)

})


adult4.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

    let fill_num = getAdultNumber()
    fillAdultRow(fill_num)

})


adult5.addEventListener('click', (e) => {
    console.log(e.target.classList)

    if (e.target.classList.contains('check')) {

        e.target.classList.remove('check')

    } else {
        e.target.classList.add('check')
    }

    let fill_num = getAdultNumber()
    fillAdultRow(fill_num)

})




// ALGORITHM FOR CHILD COLOR TOGGLE SELECTOR 

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


// STEP 1.

function getAdultNumber(){

    adult_count = 0

    for (i=0; i <= adult_row.children.length - 1; i++) {

        item = adult_row.children[i].querySelector("i")//.classList
        console.log("Item[" + i +"]: ", item)

        for (j=0; j <= adult_row.children[i].querySelector("i").classList.length - 1; j++) {
            console.log("class type[" + j +"]: ", adult_row.children[i].querySelector("i").classList[j])
         
            if (adult_row.children[i].querySelector("i").classList[j] == "check") {
                adult_count = i + 1
            }
            
        }
    }

    console.log("El número de adultos es: ", adult_count)
    return adult_count

}

function fillAdultRow(fill_num){

    for (i=0; i <= fill_num - 1; i++) {

        adult_row.children[i].querySelector("i").classList.add("check")
        
    }

    for (i=adult_row.children.length - 1; i >= fill_num; i--) {

        adult_row.children[i].querySelector("i").classList.remove("check")
        
    }

}


// STEP 2
child_row = document.querySelector("#container_child")




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
