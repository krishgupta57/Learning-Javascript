// document.getElementById('head').textContent = "Krish"

let head1 = document.getElementById('head')

head1.innerHTML = "<u> Gupta </u>"

head1.style.cssText = "color:red; background-color:yellow; padding:20px"


//new tag created from js
let head2 = document.createElement('h2')
console.log(head2);    //to check that tag is created or not

head2.textContent = "this is new tag created from js"

document.body.append(head2)

//unorderd list created from js

let ulist = document.createElement('ul')
let list = document.createElement('li')

list.textContent = "Home"
ulist.append(list)

document.body.append(ulist)

//img tag by js file
let img = document.createElement('img')
console.log(img);

img.setAttribute("src","img/finance.png")

document.body.append(img)