import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page four" />
    <h1>Hi from the fourth page</h1>
    <p>Welcome to page 4</p>
    <ul>
      <li><Link to="/">Go to homepage</Link></li>
      <li><Link to="/page-2/">Go to page 2</Link></li>
      <li><Link to="/page-3/">Go to page 3</Link></li>
      <li><Link to="/page-5/">Go to page 5</Link></li>
    </ul>
  </Layout>
)

export default SecondPage
