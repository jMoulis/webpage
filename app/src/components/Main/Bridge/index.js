/*
 * Npm import
 */
import React from 'react';

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
    <h5>Vous voulez me parler de votre projet?</h5>
    <h5>Vous avez une mission à me confier?</h5>
    <div id="bridge-decoration" className="shake" />
    <p>N&apos;hésitez pas à me contacter !</p>
    <ButtonContact type="btn" />
  </div>
);


/*
 * Export Default
 */
export default Bridge;
