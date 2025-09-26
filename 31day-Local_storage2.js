function getdata(){
    let frmdata = {
        name : document.querySelector('#name').value,
        email : document.querySelector('#email').value,
        contact : document.querySelector('#contact').value,
        password : document.querySelector('#password').value
    }

    localStorage.setItem("userdata",JSON.stringify(frmdata))
}

let localobject = JSON.parse(localStorage.getItem('userdata'))

function logindata(){
    let loginfrm = {
        loginemail : document.querySelector('#loginemail').value,
        loginpassword : document.querySelector('#loginpassword').value,
    }
    if(localobject.email != loginfrm.loginemail || localobject.password != loginfrm.loginpassword){
        alert("User not found")
        return false
    }
}