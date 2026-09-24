const icon = document.getElementById('icon')
const sideMenu = document.getElementById("side-menu")
const closeBtn = document.getElementById("close-btn")
const Btn = document.getElementById('btn')
const form = document.getElementById("form")

icon.addEventListener("click",()=>{
    sideMenu.classList.add("slide")
})

closeBtn.addEventListener("click", ()=>{
    sideMenu.classList.remove("slide")
})

Btn.addEventListener("click", async (e)=>{

    e.preventDefault()

    const name  = document.getElementById("name").value.trim().toLowerCase()
    const email  = document.getElementById("email").value.trim().toLowerCase()
    const subject  = document.getElementById("subject").value.trim().toLowerCase()
    const message  = document.getElementById("message").value.trim().toLowerCase()

    if(!name || !email || !subject || !message){
        return console.log("All fields are required")
    }

    try{
        const response = await fetch("api/contact/submit", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:name,
            email:email,
            subject:subject,
            message:message
            })
        })
    }
    catch(error){
        return console.log(`Unable to connect to the server. Please try again later. Error: ${error.message}`)
    }

})
    




