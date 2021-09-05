const API_URL = "http://localhost:8000/api/";

let user_profile_id = 1
let my_json_list = []
let my_user = {}


// This method it´s very unstable
async function postNewUser(){
    
    console.log("posting with Ajax postNewUser: ")
    
    let my_user_data = getLocalUserData()
    console.log("my_user_data: ", my_user_data)

    // Very important configuration !!
    let my_headers = new Headers()
    my_headers.set("Content-Type", "application/json")
    console.log("My Headers Config:", my_headers)
    
    try {

        const my_response = await fetch(`${API_URL}users/signup/`,{
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            method:'POST',
            body: JSON.stringify(my_user_data)
        })
        console.log("Response Status: ", my_response.status)
    
        const my_data = await my_response.json()
        console.log("Response Data: ", my_data)
        saveUserProfile(my_data)

        return my_data

    } catch (error) {
        console.log("Error from Try/Catch de Fetch: ", error)
    }

}

// This method is unstable
// but a least in debug mode always you have a response

//const generateNewUser = () => {

function generateNewUser(){

    console.log("posting with ajax: ")
    
    let my_user_data = getLocalUserData()
    console.log("my_user_data: ", my_user_data)

    // Very important configuration !!
    let headers = new Headers()
    headers.set("Content-Type", "application/json")

    fetch(`${API_URL}users/signup/`, {
        headers: headers,
        method:"POST",
        body: JSON.stringify(my_user_data),
    })
    .then(response => {
            console.log('response:', response)
            return response.json()
    })
    .catch(err=>console.error('response_error:', err.message))
    .then(data => {
        console.log('data:', data)
        saveUserProfile(data)
        return data
    })
    .catch(err=>console.error('json_data:',err.message))

}


function saveUserProfile(myJSON){

    localStorage.clear()

    for([key, value] of Object.entries(myJSON)){
        localStorage.setItem(key, value)
        console.log("mi item key is: " + key)
        console.log("my value is: " + value)
    }

}


function getLocalUserData(){

    let user_data = {
        "username":my_form.querySelector('#my_username').value,
        "password":my_form.querySelector('#my_pw1').value,
        "email":my_form.querySelector('#my_email').value,
        "first_name": my_form.querySelector('#my_first_name').value,
        "last_name":my_form.querySelector('#my_last_name').value
    }

    return user_data

}


my_form = document.querySelector('#register_form')
my_btn = document.querySelector('#btn_submit')

my_form.addEventListener('click', (event) => {

    event.preventDefault()
    event.stopPropagation()

    console.log('Form Trigger Button its fired. ', event)
    console.log('Fired from: ', event.target.id)

    if(event.target.id == 'btn_submit' ){

        generateNewUser()

    }

})




/*
$(document).ajaxComplete((event)=>{
    console.log("Ajax has been completed: ", event)
})

$(document).ajaxError((event)=>{
    console.log("Ajax Error Details: ", event)
})

*/

/*
$(document).ready(() => {

    my_form = $('#register_form')

    $('#btn_submit').on('click', (event)=>{
        event.preventDefault()
        event.stopPropagation()
        console.log('Form Event Handler: ', event)

        localStorage.clear()
        console.log("LocalStorage has been cleared")

        newUserRequest = getLocalUserData()
        console.log("newUserRequest: ", newUserRequest)

        let postResult = $.post(`${API_URL}users/signup/`, newUserRequest)
        console.log("Ajax POST Ejecuted")

        //setTimeout(()=>{console.log("TIMER !!")},700)
        
        postResult.done((data)=>{
            console.log("JQuery Ajax Post Result: ", data)
            saveUserProfile(data)
        })

        postResult.fail((error)=>{
            console.log("Error from Post: ", error)
        })

        postResult.always((data)=>{
            console.log("JQuery Ajax Post Result from Always: ", data)
        })

    })

})

*/

/* 

function getLocalUserData(){

    let user_data = {
        "username":my_form.querySelector('#my_username').value,
        "password":my_form.querySelector('#my_pw1').value,
        "email":my_form.querySelector('#my_email').value,
        "first_name": my_form.querySelector('#my_first_name').value,
        "last_name":my_form.querySelector('#my_last_name').value
    }

    return user_data

}

*/


/*
$(document).ready(() => {

    const my_form = document.querySelector('#register_form')
    const my_submit = document.querySelector('#btn_submit') 

    my_form.addEventListener('register_form', (e)=>{
    
        console.log("You are about to send the form:" + e.target.id)
        
        e.preventDefault()
        e.stopPropagation()
        console.log('Event prevented')
        if (e.target.id == 'btn_submit'){
            generateNewUser()
        }
    })

}); 
*/

/* Algorithm

    Pre-requirements:
    - Json variable with User Profile Structure
    - Back-End validation for POST Transactions
    - Password encription from Django how it works

    First before to send anything
    validate form fields
    prevent default behaviors from Form and modal
    if its not filled correctly needs to stay into the same page
    once its filled correctly its try to post it into db
    if its repeated Auth its gonna complain
        we need to handle it
    once its done confirm from end-point its done
    then
        we need to do the next actions
    save into datastorage the user identity
    show modal confirming the success or not
    redirect to go to favorites or to another page
    if its the first time
        redirect to people amount
    it its a user
        redirect them to favorites or home

    por default javascript son sincronos
    async / await -> solamente cuando se requiera que se ejecute código sin esperar la respuesta previa

*/