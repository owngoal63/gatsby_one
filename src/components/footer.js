import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {

  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)

    return (
      <footer>
          <p>FOOTER - Created by {data.site.siteMetadata.author} - FOOTER</p>
      </footer>
    )
  }
  
  export default Footer