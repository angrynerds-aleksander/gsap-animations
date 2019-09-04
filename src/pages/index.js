import React, { Component } from 'react';
import { navigate, Link } from 'gatsby';

class Index extends Component {
  componentDidMount() {
    navigate(`/1/`, { replace: true });
  }
  render() {
    return (
      <div>
        <Link to='/1/'>Następny slajd <span role="img" aria-label="right arrow">➡️</span></Link>
      </div>
    );
  }
}

export default Index;
