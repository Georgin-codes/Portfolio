const icon = document.getElementById('icon')
const sideMenu = document.getElementById("side-menu")
const closeBtn = document.getElementById("close-btn")
const Btn = document.getElementById('btn')
const form = document.getElementById("form")
const apiResponse = document.getElementById('api-response')
const body =document.querySelector("body")
const responseBody = document.getElementById("response")
const responseClose = document.getElementById('response-close-btn')

icon.addEventListener("click",()=>{
    sideMenu.classList.add("slide")
})

closeBtn.addEventListener("click", ()=>{
    sideMenu.classList.remove("slide")
})

Btn.addEventListener("click", async (e)=>{

    e.preventDefault()
    body.style.backgroundColor = "#3A3A3A"
    Btn.disabled = true

    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const subjectInput = document.getElementById("subject")
    const messageInput = document.getElementById("message")

    const name  = nameInput.value.trim().toLowerCase()
    const email  = emailInput.value.trim().toLowerCase()
    let subject  = subjectInput.value.trim().toLowerCase()
    const message  = messageInput.value.trim().toLowerCase()

    if(!name || !email || !message){
        return console.log("All fields are required")
    }

    if(!subject){
        subject = "Portfolio Contact Form Submission"
    }

    try{
        const res = await fetch("/api/contact/submit", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:name,
            email:email,
            subject:subject,
            message:message
            })
        })

        if(res.ok){
            nameInput.value = ""
            emailInput.value = ""
            subjectInput.value = ""
            messageInput.value = ""
        }

        const data = await res.json()
        console.log(data)
        apiResponse.textContent = data.message
        responseBody.style.display = "block"

    }
    catch(error){
        return console.log(`Unable to connect to the server. Please try again later. Error: ${error.message}`)
    }

})
    

responseClose.addEventListener("click", ()=>{
    responseBody.style.display = "none"
    body.style.backgroundColor = "#252525"
    Btn.disabled = false
})


