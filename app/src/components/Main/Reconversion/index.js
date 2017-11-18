/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import Img from './image';

/*
 * Code
 */

const Reconversion = () => (
  <div id="reconversion-wrapper">
    <Img />
    <div id="reconversion">
      <h3 id="reconversion-title">&lt; une reconversion totale &gt;</h3>
      <div id="reconversion-description">
        <p id="reconversion-intro">
          Après de nombreuses années en tant qu&apos;entrepeneur, responsable national réseau,
          ou encore animateur des ventes, un changement sérieux de vie m&apos;est apparu évident !
        </p>
        <div id="reconversion-reason-wrapper">
          <div className="reconversion-reason">
            <h4>marre</h4>
            <span>...</span>
            <ul>
              <li>Des costumes-cravates</li>
              <li>De parcourir les routes</li>
              <li>De jouer un rôle</li>
              <li>De ne pas voir le fruit de mon travail</li>
            </ul>
          </div>
          <div id="reconversion-reason-decoration" className="shake" />
          <div className="reconversion-reason">
            <h4>je suis</h4>
            <span>...</span>
            <ul>
              <li>Un solution provider</li>
              <li>Un passioné</li>
              <li>Un autodidacte (mais diplômé)</li>
              <li>Un insatiable de connaissance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* Standard propTypes declaration structure
 *
 * Reconversion.propTypes = {
 * item: PropTypes.string.isRequired,
 * };
 */


/*
 * Export Default
 */
export default Reconversion;
