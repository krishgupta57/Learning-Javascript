// API -> Appilication programming interface
// API fetching is used to fetch the already made services to use to our website 
// we use fetch() function to fetch API
// syntax -> fetch(URL,{method})
// URL -> uniform resource locator

// HTTP Meathod(request) -> get, post, put, delete, patch
// get -> to access the data from any server
// post -> use to insert the data
// put & patch -> use to update the data 

// fetch() we use fetch function to do all the operation of HTTP method

//     syncronous                                           asyncronous
//  the code will execute line by line          the code will execute according to the time 


// JS is syncronous but when the API will hit the js it will work in asyncronous because might be API server will slow

// promise -> it has 3 state 1. Reject,  2. Pending,  3. Fulfill

// we use .then(function) or .catch(function) to handle the promise function 

// fetch will return promise 
// to return a promise we will use asyn & await

async function access(){
    let data  = await fetch('https://jsonplaceholder.typicode.com/comments')
    let res = await data.json()
    console.log(res)
    let finaldata = res.map((e)=>`
    <tr>
    <td> ${e.id} </td>
    <td> ${e.name} </td>
    <td> ${e.email} </td>
    </tr>
    `).join("")

    document.querySelector('#showdata').innerHTML = finaldata
}

access()


// to write html code with the help of JS we use template literlel (``)

let str = "Welcome"
let str1 = "Cybrom"

let str2 = str + str1

let str3 = "Hi" + str

let str4 = "Hi Welcome \n to the js class"

console.log(str4);

let str5 = `Hi welcome 
to the js class ${str1}`
console.log(str5)

