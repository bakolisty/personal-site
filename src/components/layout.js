import React from "react"
import layoutStyle from "./layout.module.css"
import ImageLink from "./image-link"
import githubIcon from "../../static/github-icon.png"
import githubIconRed from "../../static/github-icon-red.png"
import linkedinIcon from "../../static/linkedin-icon.png"
import linkedinIconRed from "../../static/linkedin-icon-red.png"

export default function Layout({ children }) {
    return <div className={ layoutStyle.layout }>
        {children}
            <ul className={ layoutStyle.links }>
                <li>
                    <ImageLink
                        url="https://github.com/bakolisty" 
                        logo={githubIcon}
                        logoAlt={githubIconRed}
                        altText="GitHub Logo"
                    />
                </li>
                <li>
                    <ImageLink
                        url="https://www.linkedin.com/in/bakolisty/"
                        logo={linkedinIcon}
                        logoAlt={linkedinIconRed}
                        altText="LinkedIn Logo"
                    />
                </li>
            </ul>
    </div>
}
