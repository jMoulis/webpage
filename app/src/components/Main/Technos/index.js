import React from 'react';
import technos from 'data/data';
import TechnoCard from './TechnoCard';

/*
 * Code
 */

const Technos = () => (
  <section id="techno-card-wrapper">
    <h2 id="techno-title">
      &lt; deux environnements technologiques majeurs &gt;
    </h2>
    <div id="techno">
      {technos.map((techno, index) => (
        <TechnoCard key={index} techno={techno} />
      ))}
      <div id="techno-decoration" className="shake" />
    </div>
  </section>
);

export default Technos;
