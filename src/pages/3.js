import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Page = () => (
  <Layout title="3">
    <SEO title="Wprowadzenie" />
      <h1>Border radius</h1>
      <p>W CSSie istnieje możliwość ostylowania aż 8 wartości border-radius</p>
      <div style={{ width: 569, margin: '0 auto' }}>
        <Image src="border.png" />
      </div>
      <a href="https://medium.com/9elements/css-border-radius-can-do-that-d46df1d013ae" target="_blank" rel="noopener noreferrer">CSS border-radius can do that?</a>
  </Layout>
)

export default Page
