import React from "react"
import Link from "gatsby-link"

import Layout from '../components/layout'

// export default function Home() {
//   return <div>
//     <h1>Hello worlds!</h1>
//     <p>here is some text</p>
//     <Link to="/page-2/">Page 2</Link>
//     </div>

// }

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>Hello Worlds - another new version</h1>
        <p>here is some text</p>
        <Link to="/page-2/">Page 2</Link>
      </Layout>
    </div>
  )
}

export default IndexPage