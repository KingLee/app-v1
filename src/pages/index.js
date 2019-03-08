import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <h1>Learn to Design and Code React Apps</h1>
      <p>Complete courses about the best tools and design systems. Prototpye and build apps with React and Swift.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
