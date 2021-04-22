import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as AboutmeStyles from './Aboutme.module.css'
const Aboutme = () => {
    return (
        <div className ={AboutmeStyles.Container}>
            <div className ={AboutmeStyles.User}>
            <StaticImage
            src="../images/Enmanuel.jpg"
            width={100}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Enmanuel Web developer"
            className ={AboutmeStyles.Img}
            />
            <div>
              <p>Enmanuel Alfonzo</p>
            </div>
            </div>
            <div className ={AboutmeStyles.ConatinerTextAbout}>
            <div className ={AboutmeStyles.ItemAbout}>
            <p>Skills</p>
            <p>Problem-solving skills</p>
            <p>Team player</p>
            </div>
             <div className ={AboutmeStyles.ItemAbout}>
                <p>Resumen</p>
                <p>I am a self-taught person always trying to learn something new, working on web and mobile.
                if you have any idea and want to make it come true, do not hesitate to contact me</p>
             </div>
            </div>
        </div>
    )
}

export default Aboutme
