/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import TechnoCard from './TechnoCard';
import technos from 'data/data';

/*
 * Code
 */

const Technos = () => (
  <section id="techno-card-wrapper">
    <h3 id="techno-title">&lt; deux environnements technologiques majeurs &gt;</h3>
    <div id="techno">
      {
        technos.map((techno, index) => <TechnoCard key={index} techno={techno} />)
      }
      <div id="techno-decoration" className="shake" />
    </div>
  </section>
);

/* Standard propTypes declaration structure
 *
 * Technos.propTypes = {
 * item: PropTypes.string.isRequired,
 * };
 */


/*
 * Export Default
 */
export default Technos;
