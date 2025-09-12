function frmdata(){
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let contact = document.querySelector('#contact').value
    let email = document.querySelector('#email').value
    let pass = document.querySelector('#pass').value
    let cpass = document.querySelector('#cpass').value


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

    else if(email == ""){
        alert("Please enter your email")
        document.querySelector('#email').focus()
        return false
    }
    else if(!(email.includes('@gmail.com'))){
        alert('Enter the correct email')
        document.querySelector('#email').focus()
        return false
    }

    else if(pass == ""){
        alert("Please enter the password")
        document.querySelector('#pass').focus()
        return false
    }
    else if(!(pass.match(/[!@#$%^&*]/))){
        alert("Please enter any special Charcter")
        document.querySelector('#pass').focus()
        return false
    }

    else if(cpass == ""){
        alert("Please enter the confirm password")
        document.querySelector('#cpass').focus()
        return false
    }
    else if(pass != cpass){
        alert("Password didn't match")
        document.querySelector('#cpass').focus()
        return false
    }
}