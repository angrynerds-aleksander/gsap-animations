import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout title="Animacje w GSAP i CSS">
    <SEO title="Wprowadzenie" />
    <h1>Czym jest GSAP?</h1>
    <p>Jest to zbiór narzędzi do tworzenia animacji w JSie</p>
    <p>Poza obsługą podstawowych animacji, takich jak zmiana położenia czy koloru</p>
    <p>umożliwia łączenie animacji na osi czasu, łatwe sterowanie nimi oraz</p>
    <p>tworzenie skomplikowanych sekwencji niedostępnych z poziomu samego CSSa</p>

    <div className="nerdAnimation">
      <svg xmlns="http://www.w3.org/2000/svg" width="108" height="208" viewBox="0 0 54 104">
        <g id="nerd" fill="#FFF" fillRule="evenodd">
            <path d="M3.766 68.8l-.987.98V84.66h2.426v-3.984h3.102v3.984h2.426V69.779l-.987-.98h-5.98zm1.439 9.47h3.102v-7.063H5.205v7.063zM16.022 75.804l3.07 8.858h2.436V68.799H19.1v8.555l-3.068-8.555h-2.437v15.863h2.426zM31.113 84.661l.265-.26.722-.733v-7.88h-3.939v2.431h.986v4.035h-2.575V71.207h3.102v1.503H32.1v-2.914l-.987-.996h-5.957l-1.01 1.002v13.857l1.01 1.002zM42.71 77.216v-7.414l-.987-1.002h-6.944V84.66h2.426v-6.605l2.905 6.605h2.584l-2.5-6.465h1.529l.988-.98zm-5.505-1.473h3.08v-4.536h-3.08v4.536zM50.592 68.8l-1.817 5.154-.035-.103-1.688-5.051h-2.445l2.99 8.636v7.226h2.427l.001-7.238 2.988-8.624zM8.285 95.914L5.216 87.36H2.779v15.862h2.426v-8.858l3.07 8.858h2.436V87.36H8.285zM16.157 96.756h3.029V94.35h-3.029v-4.581h5.468V87.36H13.73v15.862h7.916v-2.408h-5.49zM24.456 87.36v15.862h2.426v-6.606l2.905 6.606h2.584l-2.501-6.466h1.53l.988-.98v-7.414L31.4 87.36h-6.944zm2.426 6.943h3.08v-4.535h-3.08v4.535zM35.257 87.36v15.862h7.013l.943-.98v-10.96l-5.514-3.922h-2.442zm5.529 13.454h-3.103v-9.97l3.103 2.08v7.89zM46 87.36l-.987.98v4.433l5.506 6.511v1.53h-3.08V99.31h-2.426v2.925l.988.985h5.98l.964-.98V97.81L47.44 91.32v-1.554h3.08v1.503h2.426v-2.93l-.965-.98zM42.16 36.752l-11.957 10.18.018 11.35h22.845V42.168L37.65 45.405l9.874-8.704-5.364.051zm-9.773 13.555l18.598-3.906v9.818H32.387v-5.912zM25.628 46.933l-10.13-8.627-4.526.743 7.21 6.357-15.416-3.239v16.116H25.61l.018-11.35zm-2.183 9.284h-18.6v-9.815l18.6 3.906v5.91z"/>
            <path d="M21.031 9.102v-6.29L.052 10.506l2.6 24.268 13.121-9.893 29.559-4.659 7.86 16.926L53.123.616z"/>
        </g>
      </svg>
      <div className="nerdAnimationOverlay"></div>
    </div>

  </Layout>
)

export default IndexPage
