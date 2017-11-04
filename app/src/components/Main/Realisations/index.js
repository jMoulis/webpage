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

const Realisations = () => (
  <div id="realisations-wrapper">
    <h3 id="techno-title">&lt; dernières réalisations &gt;</h3>
    <div id="realisations">
      <RealisationCard />
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
