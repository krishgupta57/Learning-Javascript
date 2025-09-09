// function formdata1(){
//     let num1 = parseInt(document.querySelector('#num1').value)
//     let num2 = parseInt(document.querySelector('#num2').value)
//     document.querySelector('#result').textContent = num1 + num2
//     return false
// }

//WAP to take 2 input from the user and add both of them the check addition is even or odd if additio is even then print the ans on document 
// page with color red if addition is odd then print the cube of that no. in document page in italic 

function addition(){
    let first = parseInt(document.querySelector('#first').value)
    let second = parseInt(document.querySelector('#second').value)
    let result = first+second
    
    if(result%2==0){
        let result1 = document.querySelector('#result')
        result1.textContent = result
        result1.style.color = "red"
    }
    else{
        let result2 = document.querySelector('#result')
        result2.textContent = result*result*result
        result2.style.fontStyle = "italic"
    }
    return false
}