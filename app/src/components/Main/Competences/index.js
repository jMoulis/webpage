/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */


/*
 * Code
 */

const Competences = () => (
  <div id="competences">
    <p id="competences-summary">
      Une approche API REST et Micro Service
    </p>
    <div id="competences-decoration" />
    <p id="competences-description">
      A travers les différents projets et travaux, je me suis concentré sur une architecture tournée API REST.<br />
      L'objectif étant de découper le back du front et rendre par conséquent le code plus durable et facile à maintenir.<br />
      J'ai opté pour la technologie
      <a href="https://reactjs.org/" title="React website" hrefLang="en"> React </a>
      en front et Php -
      <a href="http://symfony.com/" title="Symfony website" hrefLang="en"> Symfony </a> ou
      <a href="https://nodejs.org/en/about/" title="Node website" hrefLang="en"> Node </a> en back.
    </p>
  </div>
);

/* Standard propTypes declaration structure
 *
 * Competences.propTypes = {
 * item: PropTypes.string.isRequired,
 * };
 */


/*
 * Export Default
 */
export default Competences;
