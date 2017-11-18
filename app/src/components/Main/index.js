/*
 * Npm import
 */
import React from 'react';

/*
 * Local import
 */
import Technos from './Technos';
import Competences from './Competences';
import Realisations from 'src/containers/Main/Realisations';
import Bridge from 'src/containers/Main/Bridge';
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


/*
 * Export Default
 */
export default Main;
