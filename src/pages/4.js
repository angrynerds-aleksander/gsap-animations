import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = () => (
  <Layout title="4">
    <SEO title="Wprowadzenie" />
      <h1>Border radius - przykłady</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="border-example">
          <div className="border-example__shape1"></div>
        </div>
        <div className="container">
          <div className="box">
            <div className="spin-container">
              <div className="shape">
                <div className="bd"></div>
              </div>
             </div>
          </div>
        </div>
        <div className="border-example">
          <div className="border-example__shape2"></div>
        </div>
      </div>
  </Layout>
)

export default Page
