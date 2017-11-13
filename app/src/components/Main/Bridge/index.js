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

const Bridge = () => (
  <div id="bridge">
    <i className="bridge-fa fa fa-star-o fa-3x" aria-hidden="true" />
    <p>Vous voulez me parler de votre projet?</p>
    <p>Vous avez une mission à me confier?</p>
    <div id="bridge-decoration" />
    <p>N&apos;hésitez pas à me contacter !</p>
    <button className="contact-mail-link"><span className="contact-nav-contact-icon"><i className="fa fa-envelope" aria-hidden="true"></i></span> contact</button>
  </div>
);

/* Standard propTypes declaration structure
 *
 * Bridge.propTypes = {
 * item: PropTypes.string.isRequired,
 * };
 */


/*
 * Export Default
 */
export default Bridge;
