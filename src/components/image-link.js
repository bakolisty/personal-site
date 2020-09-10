import React from "react"

export default function ImageLink(props) {
    return (
        <a href={props.url} target="_blank" rel="noreferrer">
            <img
                type="image"
                src={props.logo} alt={props.altText} 
                onMouseOver={e => (e.currentTarget.src = props.logoAlt)}
                onMouseLeave={e => (e.currentTarget.src = props.logo)}>
            </img>
        </a>
    )
}
