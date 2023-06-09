import React from 'react'
import {AiFillGithub,AiFillFacebook,AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>Solapur's Hamburgers</h2>
            <p>Find the best quality burgers of your choices. </p>
            <br />
            <em>We seek out to the genuine feedbacks. </em>
            <strong>All right received @solapurhamburgers</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <a href="https://github.com/snehaarasid25">
                <AiFillGithub/>
            </a>
             <a href="https://www.facebook.com/sneha.araseed">
                <AiFillFacebook/>
             </a>
            <a href="https://www.linkedin.com/in/sneha-araseed-34abb1241/">
                <AiFillLinkedin/>
            </a>
           
        </aside>
    </footer>
  )
}

export default Footer