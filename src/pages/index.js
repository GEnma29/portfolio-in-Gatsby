import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaJsSquare } from "@react-icons/all-files/fa/FaJsSquare";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { GrGatsbyjs } from "@react-icons/all-files/gr/GrGatsbyjs";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className ="Container">
    <h1>Hi, I'm Enmanuel</h1>
    <h3 className="Subtitle">Web developer, based in Venezuela</h3>
    <div>
      <h4>Stack</h4>
      <div className ="Stack">
      <a className="Stack_item"><FaNodeJs /></a>
      <a className="Stack_item"><FaReact /></a>
      <a className="Stack_item"><GrGatsbyjs /></a>
      <a className="Stack_item"><SiNextDotJs /></a>
      </div>
    </div>
    <button class="btn-grad">
      <a href="#Works">See my work</a>
    </button>
    </div>
  </Layout>
)

export default IndexPage
