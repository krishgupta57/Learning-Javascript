// Array of object 

let students = [
    {
        st_name : "Suneel",
        st_age : 16,
        st_contact : 1345678
    },
    {
        st_name : "Krish",
        st_age : 15,
        st_contact : 789
    },
    {
        st_name : "Vaibhav",
        st_age : 14,
        st_contact : 2345
    }
]

console.log(students)

let on = {
        st_name : "Muskan",
        st_age : 21,
        st_contact : 987654
    }

students.push(on)

console.log(students)

// map is callback function which fetch array's elements and store in new array 
// it will work in array

let res = students.map((e)=>{return e.st_name})
console.log(res);

// data ko filter out karne ke liye filter function ka use karte hai 
// works on specific condition 

let data = students.filter((i)=>{return i.st_age==14})
console.log(data)



let student1 = [
    {
        st_name : "Suneel",
        st_age : 16,
        st_contact : 1345678
    },
    {
        st_name : "Krish",
        st_age : 15,
        st_contact : 789
    },
    {
        st_name : "Vaibhav",
        st_age : 14,
        st_contact : 2345
    },
    {
        st_name : "Rishav",
        st_age : 25,
        st_contact : 2345
    },
    {
        st_name : "Vivek",
        st_age :    18,
        st_contact : 2345
    },
    {
        st_name : "Abhishek",
        st_age : 27,
        st_contact : 2345
    },
    {
        st_name : "Harsh",
        st_age : 24,
        st_contact : 2345
    }
]

let data1 = student1.filter((x)=>{return x.st_age>14 && x.st_age<19})
console.log(data1)