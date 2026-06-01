// innerHTML

const a = document.getElementsByTagName("h3")[4]

a.innerHTML = "<h3> something new </h3>"



// textContent

const tagTest = document.getElementsByTagName("p")

for(let i=0; i<tagTest.length ; i++) {
    
    tagTest[i].textContent = "Changed to new values"

}