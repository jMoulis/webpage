/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import Technos from './Technos';
import Competences from './Competences';
import Realisations from 'src/containers/Main/Realisations';
import Bridge from './Bridge';
import Reconversion from './Reconversion';

/*
 * Code
 */

const Main = () => (
  <div id="main">
    <Technos />
    <Competences />
    <Realisations />
    <Bridge />
    <Reconversion />
  </div>
);

/* Standard propTypes declaration structure
 *
 * Main.propTypes = {
 * item: PropTypes.string.isRequired,
 * };
 */


/*
 * Export Default
 */
export default Main;
