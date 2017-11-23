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

const Realisations = props => (
  <section id="realisations">
    <h2 id="realisations-title">&lt; dernières réalisations &gt;</h2>
    <div id="realisations-card-wrapper">
      {
        props.realisations.map((realisation, index) => (
          <RealisationCard key={index} data={realisation} />
        ))
      }
    </div>
  </section>
);


Realisations.propTypes = {
  realisations: PropTypes.array.isRequired,
};


/*
 * Export Default
 */
export default Realisations;
