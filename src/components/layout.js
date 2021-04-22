/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./layout.css"
import Aboutme from "./Aboutme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout">
    <section  className="Home">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className='main'>{children}</main>
        </section>
        <section id= "Works"className = "Proyects">
        <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p>
        </section>
        <section id= "Aboutme"className = "Aboutme">
        <Aboutme />
        <p>
        </p>
        </section>
        <section id= "Contact"className = "Contact">
        <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p>
        </section>
        <footer>
          make for <a  href="https://github.com/GEnma29">Enmanuel</a> © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
