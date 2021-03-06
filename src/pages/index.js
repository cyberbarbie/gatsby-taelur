import React from "react"
import {css} from "@emotion/core"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `taeluralexis`, `react`]} />
    <LandingBio />
  </Layout>
)

export default IndexPage
