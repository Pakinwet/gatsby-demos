import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const SecondPage = () => (
  <Layout>
    <SEO title="Page five" />
    <h1>Hi from the fifth page</h1>
    <p>Welcome to page 5</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ul>
      <li><Link to="/">Go to homepage</Link></li>
      <li><Link to="/page-2/">Go to page 2</Link></li>
      <li><Link to="/page-3/">Go to page 3</Link></li>
      <li><Link to="/page-4/">Go to page 4</Link></li>
    </ul>
  </Layout>
)

export default SecondPage
