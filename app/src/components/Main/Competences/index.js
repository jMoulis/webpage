/*
 * Npm import
 */
import React from 'react';

/*
 * Local import
 */


/*
 * Code
 */

const Competences = () => (
  <div id="competences">
    <h5 id="competences-summary">
      Une approche API REST et Micro Service
    </h5>
    <div id="competences-decoration" className="shake" />
    <p id="competences-description">
      <span>
        A travers les différents projets et travaux,
        je me suis concentré sur une architecture tournée API REST.
      </span>
      <br />
      <span>
        L'objectif étant de découper le back du front et rendre par
        conséquent le code plus durable et facile à maintenir.
      </span>
      <br />
      <span>J'ai opté pour la technologie </span>
      <a className="competences-backlink" target="_blank" rel="noopener noreferrer" href="https://reactjs.org/" title="React website - new page" hrefLang="en">React</a>
      <span> en front et Php - </span>
      <a className="competences-backlink" target="_blank" rel="noopener noreferrer" href="http://symfony.com/" title="Symfony website - new page" hrefLang="en">Symfony</a>
      <span> ou </span>
      <a className="competences-backlink" target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/about/" title="Node website - new page" hrefLang="en">Node</a>
      <span> en back.</span>
    </p>
  </div>
);


/*
 * Export Default
 */
export default Competences;
