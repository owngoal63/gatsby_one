import React from "react"
import Link from "gatsby-link"

import Layout from '../components/layout'

export default function Home() {
  return <div>
      <Layout>
        <h1>This is page 2</h1>
        <p>blah blah blah</p>
        <Link to="/">Home Page</Link>
    </Layout>
    </div>

}