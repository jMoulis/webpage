import React from 'react';

import Realisations from 'src/containers/Main/Realisations';
import Bridge from 'src/containers/Main/Bridge';
import Technos from './Technos';
import Competences from './Competences';
import Reconversion from './Reconversion';

const Main = () => (
  <div id="main">
    <Technos />
    <Competences />
    <Realisations />
    <Bridge />
    <Reconversion />
  </div>
);

export default Main;
