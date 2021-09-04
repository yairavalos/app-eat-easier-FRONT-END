const API_URL = "http://localhost:8000/api/";

let user_profile_id = 1
let my_json_list = []


const getFavorites = async() => {

    try {
        const response = await fetch(`${API_URL}users/${user_profile_id}/favorites/`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json()
        console.log(data)

        return data

    } catch (error) {
        console.log(error)
    }

}

function setUserStorage(my_user){

    localStorage.setItem('user_id', my_user)

}

function getUserStorage(){

    console.log(localStorage.getItem('user_id'))

}

const transfer_retrieve = async() => {

    my_json_list = await getFavorites();
    json_items_num = my_json_list.length

    console.log("transfer retrieve")

    setUserStorage('my_user_testings')
    getUserStorage()

}


// On-hold -> data-bs-target="#login" -> to avoid fire modal 
// On-hold -> data-bs-toggle="modal" -> to avoid fire modal

$(document).ready(() => {

    my_form = document.querySelector('#register_form') 

    my_form.addEventListener('submit', (e)=>{
        
        console.log("You are about to send the form:" + e.target.id)
        console.log("my email validation its: " + my_eMail.checkValidity())
        
        e.preventDefault()
        console.log('Event prevented')

        if (e.target.id == 'register_form' && my_eMail.checkValidity()){
            
            transfer_retrieve()
        }

    })

});

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

*/