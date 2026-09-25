
const icon = document.getElementById('icon')
const sideMenu = document.getElementById("side-menu")
const closeBtn = document.getElementById("close-btn")
const container = document.getElementById("container")



async function render(){

    try{
        const response = await fetch("/api/projects")
        const data = await response.json()

        data.forEach((project)=>{
        
            const {title, subtitle, description, demo_link, github_link, demo_id, github_id}= project

            container.innerHTML += `<div class="projects">

                                        <div class="heading">
                                            <h2 class="title">${title}</h2>
                                            <p class="subtitle">${subtitle}</p>
                                        </div>

                                        <div class="details">
                                            <p class="description">${description}</p>
                                            <div class="buttons">
                                                <a class="btn" id="${demo_id}" href="${demo_link}" target="_blank">Demo</a>
                                                <a class="btn" id="${github_id}" href="${github_link}" target="_blank">GitHub</a>
                                            </div>
                                        </div>  

                                    </div>`

            if(!project.demo_link){
                document.getElementById(demo_id).removeAttribute("href")
                document.getElementById(demo_id).classList.add("disabled")
            }

        })

    }
    catch(error){
        return console.error(`Error fetching data from api, ${error.mesage}`)
    }

    

}

render()


icon.addEventListener("click",()=>{
    sideMenu.classList.add("slide")
})

closeBtn.addEventListener("click", ()=>{
    sideMenu.classList.remove("slide")
})