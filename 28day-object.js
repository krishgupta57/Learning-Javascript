// use to store different type of data
// denoted by curly bracket {}
// unordered
// code formation -> key : value;

let person = {
    name : "Krish",
    age : 22,
    contact : 654665,
    city : "Bhopal"
}
console.log(person);

console.log(person.name) // to print name we use .notation
console.log(person.age)  //to print age we use .notation
console.log(person.contact) // to print contact we use .notation
console.log(person.city)  // to print city we use .notation

person.email = "xyz@gmail.com" // adding elements
console.log(person)

person.contact = 4567890  // to change the value of any key
console.log(person);

// to print all key we use for in loop

for(let k in person){
    console.log(k) // for key 
    console.log(person[k]) // for value
}

// to print keys we will use function

let k = Object.keys(person)
console.log(k);  // it will print whole array stored by keys
console.log(k[0]);  // it will print single keys through indexing

// to print values we will use function

let v = Object.values   (person)
console.log(v);  // it will print whole array stored by values
console.log(v[0]);  // it will print single value through indexing

// nested object

let person1 = {
    name : "Krish",
    age : 22,
    contact : 654665,
    city : "Bhopal",
    nested : {
        area : "Indp",
        sector : "C"
    },
    add : function(){
        return 2+8
    },
    ar : [654,654,6654]
    
}
console.log(person1.nested.area)  // to print area stored in nested stored in person1
console.log(person1.add())        // to print add function stored in person1
console.log(person1.ar)           // to print array stored in person1


// to take input from user input

let emp = {
    emp_name : prompt("Enter emp name"),
    emp_age : prompt("Enter emp age"),
    emp_position : prompt("Enter emp position")
}

console.log(emp)

