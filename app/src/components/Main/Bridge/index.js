/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import ButtonContact from 'src/containers/GlobalComponents/ButtonContact';

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
    <ButtonContact />
  </div>
);


/*
 * Export Default
 */
export default Bridge;
