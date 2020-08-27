import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Diversity Reacts</h1>
    <p>Check out our recent videos!</p>
    {data.creators.nodes.map(creator =>(
      <div key={`creator-${creator.slug}`}>
        <p>{creator.name}</p>
      </div>
    ))}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    creators: allContentfulCreator {
      nodes {
        name
        slug
        bio {
          bio
        }
      }
    }
  }
`
