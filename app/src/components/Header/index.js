/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import Contact from 'src/containers/Header/Contact';
import Img from './Img';

/*
 * Code
 */

const Header = () => (
  <header>
    <Contact />
    <Img />
  </header>
);

/* Standard propTypes declaration structure
 *
 * Header.propTypes = {
 * item: PropTypes.string.isRequired,
 * };
 */


/*
 * Export Default
 */
export default Header;
