import React from "react"
import projectBlockStyle from "./project-block.module.css"

export default function ProjectBlock(props) {
    return (
        <div>
            <h2>{props.projectName}</h2>
            <p>{props.projectDescription}</p>
        </div>
    )
}