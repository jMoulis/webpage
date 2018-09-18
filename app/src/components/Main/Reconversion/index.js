import React from 'react';

import Img from './image';

const Reconversion = () => (
  <div id="reconversion-wrapper">
    <Img />
    <section id="reconversion">
      <h2 id="reconversion-title">&lt; une reconversion totale &gt;</h2>
      <div id="reconversion-description">
        <p id="reconversion-intro" className="text">
          Après de nombreuses années en tant qu&apos;entrepeneur, responsable
          national réseau, ou encore animateur des ventes, un changement sérieux
          de vie m&apos;est apparu évident !
        </p>
        <div id="reconversion-reason-wrapper">
          <div className="reconversion-reason">
            <h3>marre</h3>
            <span>...</span>
            <ul>
              <li>Des costumes-cravates</li>
              <li>De parcourir les routes</li>
              <li>De jouer un rôle</li>
              <li>De ne pas voir le fruit de mon travail</li>
            </ul>
          </div>
          <div id="reconversion-reason-decoration" className="shake" />
          <div className="reconversion-reason">
            <h3>je suis</h3>
            <span>...</span>
            <ul>
              <li>Un solution provider</li>
              <li>Un passioné</li>
              <li>Un autodidacte (mais diplômé)</li>
              <li>Un insatiable de connaissance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Reconversion;
