import React from 'react';
import PropTypes from 'prop-types';

import Contact from 'src/containers/Header/Contact';
import Img from './Img';

const Header = ({ title }) => (
  <header>
    <Contact />
    <Img title={title} />
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
