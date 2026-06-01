// Use the CSS selector to target 
// id => denoted in css with "#"

const a = document.querySelector("#me")

a.textContent = "Just me"



// class => denoted in css with ".""

let b = document.querySelector(".left")

b.textContent = "Details"



// tag => denoted in ""

let c = document.querySelectorAll(".right")

for (let x = 0; x<c.length; x++) {

    c[x].textContent = "About me"
}