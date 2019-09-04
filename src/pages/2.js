import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Page = () => (
  <Layout title="2">
    <SEO title="Wprowadzenie" />
      <h1>Masonry CSS</h1>
      <div className="gallery">
        <div className="gallery__item gallery__item--span-1-2">
          <Image src="gallery1.jpg" />
        </div>
        <div className="gallery__item gallery__item--span-1-2">
          <Image src="gallery2.jpg" />
        </div>
        <div className="gallery__item gallery__item--span-1-3">
          <Image src="gallery3.jpg" />
        </div>
        <div className="gallery__item gallery__item--span-1-3">
          <Image src="gallery4.jpg" />
        </div>
        <div className="gallery__item gallery__item--span-2-1">
          <Image src="gallery5.jpg" />
        </div>
        <div className="gallery__item gallery__item--span-2-1">
          <Image src="gallery6.jpg" />
        </div>
        <div className="gallery__item gallery__item--span-2-2">
          <Image src="gallery7.jpg" />
        </div>
        <div className="gallery__item gallery__item--span-2-2">
          <Image src="gallery8.jpg" />
        </div>
        <div className="gallery__item gallery__item--span-2-3">
          <Image src="gallery9.jpg" />
        </div>
        <div className="gallery__item gallery__item--span-3-2">
          <Image src="gallery10.jpg" />
        </div>
        <div className="gallery__item gallery__item--span-3-1">
          <Image src="gallery11.jpg" />
        </div>
        <div className="gallery__item gallery__item--span-3-3">
          <Image src="gallery12.jpg" />
        </div>
        <div className="gallery__item gallery__item--span-3-3">
          <Image src="gallery13.jpg" />
        </div>
        <div className="gallery__item gallery__item--span-1-3">
          <Image src="gallery14.jpg" />
        </div>
        <div className="gallery__item">
          <Image src="gallery15.jpg" />
        </div>
        <div className="gallery__item">
          <Image src="gallery16.jpg" />
        </div>
        <div className="gallery__item">
          <Image src="gallery18.jpg" />
        </div>
        <div className="gallery__item gallery__item--span-3-1">
          <Image src="gallery17.jpg" />
        </div>
        <div className="gallery__item">
          <Image src="gallery19.jpg" />
        </div>
        <div className="gallery__item">
          <Image src="gallery20.jpg" />
        </div>
        <div className="gallery__item">
          <Image src="gallery21.jpg" />
        </div>
        <div className="gallery__item">
          <Image src="gallery22.jpg" />
        </div>
        <div className="gallery__item">
          <Image src="gallery23.jpg" />
        </div>
        <div className="gallery__item">
          <Image src="gallery24.jpg" />
        </div>
      </div>
  </Layout>
)

export default Page
