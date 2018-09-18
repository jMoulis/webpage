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
  <section id="competences">
    <h5 id="competences-summary">Une approche API REST et Micro Service</h5>
    <div id="competences-decoration" className="shake" />
    <p id="competences-description" className="text">
      A travers les différents projets et travaux, je me suis concentré sur une
      architecture tournée <em>API REST</em>. L'objectif étant de découper le
      back du front et rendre par conséquent le code plus durable et facile à
      maintenir. J'ai opté pour la technologie
      <a
        className="competences-backlink"
        target="_blank"
        rel="noopener noreferrer"
        href="https://reactjs.org/"
        title="React website - new page"
        hrefLang="en"
      >
        {' '}
        React
      </a>
      &nbsp;en front&nbsp;
      <a
        className="competences-backlink"
        target="_blank"
        rel="noopener noreferrer"
        href="http://symfony.com/"
        title="Symfony website - new page"
        hrefLang="en"
      >
        Symfony
      </a>
      &nbsp;ou
      <a
        className="competences-backlink"
        target="_blank"
        rel="noopener noreferrer"
        href="https://nodejs.org/en/about/"
        title="Node website - new page"
        hrefLang="en"
      >
        {' '}
        Node
      </a>
      &nbsp;en back.
    </p>
  </section>
);

/*
 * Export Default
 */
export default Competences;
