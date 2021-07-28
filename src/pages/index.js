import React from "react"
import Layout from "../components/layout"
import ProjectBlock from "../components/project-block"

export default () => (
    <Layout>
        <h1>Welcome!</h1>
        <p>My name is Kegan, and this is my website. I am a Software Engineer who enjoys working on fun, and silly interactive projects. Feel free to check out my projects on Github, or my profile on LinkedIn.</p>
        <h1>Projects: </h1>
        <ul>
            <li>
                <ProjectBlock
                    projectName="Untitled Marble Game"
                    projectDescription="- A project I am currently working on to teach myself Unity, and video game development concepts. 
                                        The general idea I have for this game is a multiplayer battle royale where the players are all marbles. 
                                        You will be able to eliminate other players by knocking them out of the arena."
                />
            </li>
            <li>
                <ProjectBlock
                    projectName="Cilantro Audit"
                    projectDescription="- A desktop application used to create, fill out, and view the results of forms. This project was written in Python, and uses MongoDB."
                />
            </li>
            <li>
                <ProjectBlock
                    projectName="Mountain Report Live"
                    projectDescription="- A web application written using Gatsby and the OpenWeatherMap API. A central location for mountain conditions on Mt. Hood."
                />
            </li>
            <li>
                <ProjectBlock
                    projectName="Is It Coffee"
                    projectDescription="- A Python web application written in Flask. It uses the Google Cloud Vision API to detect coffee in uploaded images."
                />
            </li>
        </ul>
    </Layout>
)
