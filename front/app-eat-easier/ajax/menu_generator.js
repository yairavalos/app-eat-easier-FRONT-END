const API_URL = "http://localhost:8000/api/";

let my_json_list = []

let myForm = document.querySelector('#newMenuForm')
var myModal1 = new bootstrap.Modal(document.getElementById('menuCreateModal1'), {keyboard:false})

const getMenuGenerator = async() => {

    try {
        const response = await fetch(`${API_URL}users/${localStorage.id}/planners/`, {
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


// AJAX Comms to End-Point
const postFetch = async(postData) => {

    const data = await fetch(`${API_URL}users/${localStorage.id}/planners/`, {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData)
    })

    const dataResult = await data.json()

    console.log(dataResult)
    //saveUserProfile(dataResult) -> according to response this function would change

    return dataResult
}


function populate_nodes(n) {

    this_attr = my_json_list[n].id
    my_container.lastElementChild.setAttribute("id", this_attr) //no se toca 

    this_attr = my_json_list[n].plan_title

    console.log(this_attr)
    my_container.lastElementChild.querySelectorAll(".plan_title")[0].innerText = this_attr

}

function clone_html_item() {

    my_item = document.createElement("div")
    my_container.appendChild(my_item)

    my_container.lastElementChild.outerHTML = my_container.firstElementChild.outerHTML

}

const transfer_retrieve = async() => {

    my_json_list = await getMenuGenerator();
    json_items_num = my_json_list.length

    if (json_items_num > 1) {

        for (i = 0; i < json_items_num; i++) {

            populate_nodes(i)

            if (i < json_items_num - 1) {
                clone_html_item()
            }
        }

    } else {
        populate_nodes(0)
    }

    console.log("transfer retrieve")

}

function generateWeekNum(start_date){

    let now = new Date(start_date);
    let onejan = new Date(now.getFullYear(), 0, 1);
    let week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7) - 1;

    console.log(week);
    return week
}

function generateEndDate(period, start_date){

    let myDate = new Date(start_date)

    if (period == "semanal"){
        myDate.setDate(myDate.getDate() + 7)
    } else if (period == "quincenal"){
        myDate.setDate(myDate.getDate() + 14)
    }
    return myDate.toISOString().substr(0,10)
}

function generateJSON(){

    let myMenuDict = {
        "user_profile": localStorage.id,
        "plan_title": myForm.querySelector('#inputTitle').value,
        "week_num": generateWeekNum(user_period_start),
        "period": myForm.querySelector('#selectPeriod').value,
        "start_date": user_period_start,
        "end_date": "",
        "saved": false
    }

    myMenuDict.end_date = generateEndDate(myMenuDict.period, myMenuDict.start_date)
    
    console.log("Generated JSON: " ,myMenuDict)
    return myMenuDict
}


myForm.addEventListener('submit', (e)=>{

    e.preventDefault()
    e.stopPropagation()

    let jsonPOST = generateJSON()
    console.log("My JSON to be Posted: " ,jsonPOST)

    let myResponse = postFetch(jsonPOST)

    myResponse.then((dataResult)=>{console.log("AJAX POST Result its", dataResult)})
    myResponse.then(myModal1.show())
    myResponse.then(setTimeout(() => { console.log("TIME OUT") }, 2000)) 
    myResponse.catch((error)=>{console.log("Ajax Catch Error is: ", error)})

})


$(document).ready(() => {

    my_container = document.querySelector(".json_container")
    my_template_item = my_container.children[0]

    transfer_retrieve();

    $('#myDatePicker').datepicker({
        format: "yyyy-mm-dd",
        language: "es",
        calendarWeeks: true,
        autoclose: true,
        todayHighlight: true
    })


    $('#myDatePicker').datepicker().on('changeDate', function(e){
        user_period_start = $('#myDatePicker').datepicker('getFormattedDate')
        console.log(user_period_start.toString())
    })

    
});
