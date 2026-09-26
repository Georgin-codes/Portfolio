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

form.addEventListener("submit", async (e)=>{

    e.preventDefault()

    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const subjectInput = document.getElementById("subject")
    const messageInput = document.getElementById("message")

    const name  = nameInput.value.trim()
    const email  = emailInput.value.trim().toLowerCase()
    let subject  = subjectInput.value.trim()
    const message  = messageInput.value.trim()

    if(!name || !email || !message){
        console.error("All fields are required")
        apiResponse.textContent = "All fields are required"
        responseBody.style.display = "block"
        body.style.backgroundColor = "#3A3A3A"
        Btn.disabled = true
        return 
    }

    if(!subject){
        subject = "Portfolio Contact Form Submission"
    }

    body.style.backgroundColor = "#3A3A3A"
    Btn.disabled = true

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

        const data = await res.json()
        apiResponse.textContent = data.message
        responseBody.style.display = "block"
        Btn.disabled = true
        body.style.backgroundColor = "#3A3A3A"

        if(res.ok){
            nameInput.value = ""
            emailInput.value = ""
            subjectInput.value = ""
            messageInput.value = ""
        }
    }
    catch(error){
        console.error(`Unable to connect to the server. Please try again later. Error: ${error.message}`)
        apiResponse.textContent = "Unable to connect to the server. Please try again later."
        responseBody.style.display = "block"
        Btn.disabled = true
        body.style.backgroundColor = "#3A3A3A"
        return
    }

})
    

responseClose.addEventListener("click", ()=>{
    responseBody.style.display = "none"
    apiResponse.textContent = ""
    body.style.backgroundColor = "#252525"
    Btn.disabled = false
})


