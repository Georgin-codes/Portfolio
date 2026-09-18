
import { data } from "../data/data.js"
const container = document.getElementById("container")



function render(){

    const response = fetch("/api/projects")
    data.forEach((project)=>{
    
    const {title, subtitle, description}= project

    container.innerHTML += `<div class="projects">

                            <div class="heading">
                                <h2 class="title">${title}</h2>
                                <p class="subtitle">${subtitle}</p>
                            </div>

                            <div class="details">
                                <p class="description">${description}</p>
                                <div class="buttons">
                                    <button class="btn" id="demo-btn" data-demo="1">Demo</button>
                                    <button class="btn" id="github-btn" data-demo="2">GitHub</button>
                                </div>
                            </div>  

                        </div>`

    })

}

render()

const demoBtn = document.getElementById("demo-btn")
const GitHubBtn = document.getElementById("github-btn")

demoBtn.addEventListener("click", ()=>{

})

