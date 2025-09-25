// // we can store upto 3 to 10 mb aproxx.
// // we use this to store data at the clients browser

// // there are 4 main function
// // 1. setItem -> save
// // 2. getItem -> access
// // 3. removeItem -> delete single data
// // 4. clear  -> whole data deletion

// // store data in format key value -> key : value & // type will be string

// //setItem
// localStorage.setItem("name","Krish")
// localStorage.setItem("age",22)
// localStorage.setItem("email","Krishg@gmail.com")
// localStorage.setItem("contact",7898325702)
// localStorage.setItem("password","Krish@7898")

// //removeItem
// localStorage.removeItem('age')

// // getItem
// let name1 = localStorage.getItem('name')
// document.write(name)

// // Clear
// localStorage.clear()



function formdata(){
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let contact = document.querySelector('#contact').value
    let city = document.querySelector('#city').value
    let age = document.querySelector('#age').value
    

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("contact",contact)
    localStorage.setItem("city",city)
    localStorage.setItem("age",age)
    return false
}

function getdata(){
    let get = prompt("enter key value which you want to get")
    let pget = localStorage.getItem(get)
    document.write(pget)
}

function removedata(){
    let remove = prompt("Enter ket value which you want to remove")
    let rdata = localStorage.removeItem(remove)
    alert("The item got sucessfully removed")
}

function cleardata(){
    localStorage.clear()
    alert("all data clear")
}