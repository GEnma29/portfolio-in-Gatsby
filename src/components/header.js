import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { GoFilePdf } from "@react-icons/all-files/go/GoFilePdf";
import { GoMarkGithub } from "@react-icons/all-files/go/GoMarkGithub";
import * as HeaderStyles from './Header.module.css'
const Header = ({ siteTitle }) => (
  <header className ={HeaderStyles.Header}>
  <div className ={HeaderStyles.Item}>
  <nav className={HeaderStyles.Containernav}>
    <div className={HeaderStyles.Links}>
    <Link className={HeaderStyles.Link} to ="">Blog</Link>
    <Link className={HeaderStyles.Link} to ="">Es</Link>
    <Link className={HeaderStyles.Link} to ="">En</Link>
    </div>
  </nav>
  </div>
    <div className ={HeaderStyles.Item}>
    <div className={HeaderStyles.animationcircle}>
    <StaticImage
      src="../images/Enmanuel.jpg"
      width={150}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Enmanuel Web developer"
      className ={HeaderStyles.Img}
    />
    </div>
    </div>
    <div className ={HeaderStyles.Item}>
    <nav>
    <ul className ={HeaderStyles.Navbar} >
      <li>
      <Link 
          to="https://www.linkedin.com/in/enmanuel-alfonzo-angulo-612b18188/">
          <a className ={HeaderStyles.NavbarItem}><FaLinkedin /></a>
        </Link>
      </li>
      <li>
      <Link
          to="https://github.com/GEnma29">
          <a className ={HeaderStyles.NavbarItem}><GoMarkGithub /></a>
        </Link>
      </li>
      <li>
      <Link 
          to="">

          <a className ={HeaderStyles.NavbarItem}><GoFilePdf /></a>
        </Link>
      </li>
    </ul>
   </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
