import React from "react"
import Images from "./images/Rectangle 90.png"
import logo from "./images/Icon.png"
import logos from "./images/linkedin.png"

function Card(props) {
    return(
        <div className="container">
            <div className="content">
                <img src={Images} alt="" />
                <h2>Laura Smith</h2>
                <h4>Frontend Developer</h4>
                <p><a href="https:google.com">laurasmith.website</a></p>
            </div>
            <div>
                <button className="first-button"><img src={logo} alt="" /> Email</button>
                <button className="second-button"><img className="linkedin" src={logos} alt="" /> LinkedIn</button>
            </div>
            <div>
                <h2>About</h2>
                <p>I am a frontend developer with a particular
                     interest in making things simple and automating daily tasks.
                      I try to keep up with security and best practices, 
                    and am always looking for new things to learn.</p>
            </div>
            <div>
                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic.
                     Bacon buff. Entrepreneur. Travel geek.
                      Pop culture ninja. Coffee fanatic.</p>
            </div>
            <footer>
                <img src="" alt="" />
            </footer>
        </div>
    )
}

export default Card