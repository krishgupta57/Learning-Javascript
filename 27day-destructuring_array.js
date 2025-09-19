let [name,age,place] = ["krish",22,"bhopal"]

console.log(name)

//spread operator/rest operator  use to merge the array
//denoted by three dots (...)

let emp = ["krish","student"]
let empdetail = ["Bhopal",65465897]

let fulldetail = [...emp,...empdetail]
console.log(fulldetail)

//WAP to make an empty array with name student details and take 5 student details from the user 
// make another array with name subjects marks and take 5 subjects marks from the user the merge both array into another array

let studetails = []
let stumarks = []
for(let a = 0; a<5; a++){
    studetails[a] = prompt("enter subject name")
}

for(let b = 0; b<5; b++){
    stumarks[b] = parseInt(prompt("enter the marks"))
}

let fullstudetails = [...studetails,...stumarks]
console.log(fullstudetails)