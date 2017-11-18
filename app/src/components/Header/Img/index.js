/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */


/*
 * Code
 */

const Img = () => (
  <div id="header-img-container">
    <div id="header-img" />
    <div id="header-img-titles">
      <h1>julien moulis</h1>
      <h2>Développeur Web Symfony - React</h2>
      <div id="header-img-titles-decoration" className="shake" />
    </div>
    <div id="half-circle">
      <div id="header-first-circle" className="header-circle" />
      <div id="header-second-circle" className="header-circle" />
      <div id="header-third-circle" className="header-circle" />
      <div id="header-fourth-circle" className="header-circle" />
      <div id="header-fifth-circle" className="header-circle" />
    </div>
  </div>
);

/* Standard propTypes declaration structure
 *
 * Img.propTypes = {
 * item: PropTypes.string.isRequired,
 * };
 */


/*
 * Export Default
 */
export default Img;
