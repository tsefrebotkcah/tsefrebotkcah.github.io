import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>This is the about page</h1>
    <p>We are an international organization who hacks at hackathons.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
