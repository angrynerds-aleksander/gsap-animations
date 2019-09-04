import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo.svg'

const Header = ({ siteTitle }) => (
  <div>
    <header>
      <div
        style={{
          margin: `0 auto`,
          display: 'flex',
          alignItems: 'center',
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            flexShrink: 0
          }}
        >
          <img src={logo} alt="Angry Nerds logo" height="78" width="39" />
        </Link>
        <h1 className="header">
          {siteTitle}
        </h1>
      </div>
    </header>
    <div
      style={{
        height: '9.65rem'
      }}
    >
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
