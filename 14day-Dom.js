document.write("<h1> Hello <br> World...!!! </h1>")

let hd = document.getElementById("head")
console.log(hd);
let h = hd.textContent
console.log(h)

hd.textContent = "Mr.Krish Gupta"

hd.innerHTML = "<u> Change </u>"

let head2 = document.getElementById("head2")

head2.setAttribute('align','center')

document.body.removeAttribute('bgcolor')

