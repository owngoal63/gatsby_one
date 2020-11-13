import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'

export default function Home() {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
     edges {
       node {
         frontmatter {
           title
           date
           description
           
         }
       }
     }
   }
   }
  `)

  return <div>
      <Layout>
        <h1>This is the Blog Page</h1>
        <ol>
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </li>

            )
          })}
        </ol>
    </Layout>
    </div>

}