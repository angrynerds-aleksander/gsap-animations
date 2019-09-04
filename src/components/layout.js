import React, { Component } from 'react'
import PropTypes from "prop-types"
import { navigate, Link } from 'gatsby'
import { TimelineMax, Power1 } from 'gsap'
import Header from "./header"
import Footer from "./footer"
import { globalHistory } from "@reach/router"
import "./normalize.css"
import "./layout.scss"

class Layout extends Component {
  constructor(props) {
    super(props);

    this.location = parseInt(globalHistory.location.pathname.replace( /^\D+/g, ''), 10) || 0;
    this.minPage = 1;
    this.maxPage = 4;
    this.timeline = new TimelineMax({ paused: true });
    this.nerdTimeline = new TimelineMax({ paused: true, repeat: -1 });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.navigate);
    const nerdAnimation = document.querySelector('.nerdAnimation');
    const nerdAnimationOverlay = document.querySelector('.nerdAnimationOverlay');
    if (!!nerdAnimation) {
      this.nerdTimeline
          .to(nerdAnimationOverlay, 0, { y: 500, rotation: 100 })
          .to(nerdAnimationOverlay, 5, { y: 0, rotation: 0, ease: Power1.easeInOut }, "+=2")
          .to(nerdAnimationOverlay, 5, { y: 500, rotation: -100, ease: Power1.easeInOut }, "+=2")
          .to(nerdAnimationOverlay, 0, { y: -500, rotation: -100 })
          .to(nerdAnimationOverlay, 5, { y: 0, rotation: 0, ease: Power1.easeInOut }, "+=2")
          .to(nerdAnimationOverlay, 5, { y: -500, rotation: 100, ease: Power1.easeInOut }, "+=2")

      this.nerdTimeline.play();
    }

    const gallery = document.querySelector('.gallery');
    const galleryImage = document.querySelectorAll('.gallery > .gallery__item');
    if (!!gallery && !!galleryImage) {
      this.timeline
          .from(gallery, 0, { opacity: 0, autoAlpha: 0 }, 0.125)
          .staggerFrom(galleryImage, 0.375, { autoAlpha: 0, y: -25, ease: Power1.easeOut }, 0.0625);
      this.timeline.play();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.navigate);
  }

  navigate = ({ keyCode }) => {
    if (keyCode === 37 && this.location <= this.minPage) {
      return false;
    } else if (keyCode === 39 && this.location >= this.maxPage) {
      return false;
    } else if (keyCode === 39) {
      navigate(`/${this.location + 1}/`);
    } else if (keyCode === 37) {
      navigate(`/${this.location - 1}/`);
    }
  };

  render() {
    const { children, title } = this.props

    return (
      <section>
        <Header siteTitle={title} />
        <main>{children}</main>
        <nav>
          { this.location > this.minPage ?
            <Link to={`/${this.location - 1}/`}><span role="img" aria-label="left arrow">⬅️</span> Poprzedni slajd</Link>
          : null }
          { this.location > this.minPage && this.location < this.maxPage ?
            <span role="img" aria-label="dot"> ⚫ </span>
          : null }
          { this.location < this.maxPage ?
            <Link to={`/${this.location + 1}/`}>Następny slajd <span role="img" aria-label="right arrow">➡️</span></Link>
          : null }
        </nav>
        <Footer />
      </section>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
