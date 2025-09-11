function frmdata(){
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let contact = document.querySelector('#contact').value

    if(name == ""){
        alert("Please enter your name")
        document.querySelector('#name').focus()
        return false
    }

    // else if(age == ""){
    //     alert("Please enter the age")
    //     document.querySelector('#age').focus()
    //     return false
    // }

    else if(age == ""){
        document.querySelector('#errorage').textContent = "Please enter this Field"
        document.querySelector('#age').focus()
        return false
    }
    else if(isNaN(age)){
        alert("Please enter number in age")
        document.querySelector('#age').focus()
        return false
    }


    else if(contact == ""){
        alert("Please enter your contact number")
        document.querySelector('#contact').focus()
        return false
    }
    else if(contact.length != 10){
        alert("Please enter your 10 digit mobile number")
        document.querySelector('#contact').focus()
        return false
    }
}