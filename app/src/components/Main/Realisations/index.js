/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import RealisationCard from './realisationCard';

/*
 * Code
 */

const Realisations = (props) => (
  <div id="realisations">
    <h3 id="techno-title">&lt; dernières réalisations &gt;</h3>
    <div id="realisations-card-wrapper">
      {
        props.realisations.map((realisation, index) => (
          <RealisationCard key={index} data={realisation}/>
        ))
      }
    </div>
  </div>
);

/* Standard propTypes declaration structure
 *
 * Realisations.propTypes = {
 * item: PropTypes.string.isRequired,
 * };
 */


/*
 * Export Default
 */
export default Realisations;
