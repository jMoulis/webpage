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

const HeaderFooter = ({ title }) => (
  <section id="footer-text">
    <p className="text">
      C&apos;est ce parcours atypique qui m&apos;a enrichi de compétences,
      transversales, et qui fait de moi aujourd&apos;hui quelqu&apos;un de{' '}
      <em>rigoureux</em> ayant une <em>approche globale</em> des choses
    </p>
    <p className="text">
      Je reviens aujourd&apos;hui à mes premiers amours en consacrant mon temps
      de travail à une réelle passion.
    </p>

    <div className="shake footer-decoration" />
    <h1>Julien Moulis</h1>
    <span className="subheading">{title}</span>
    <div className="shake footer-decoration" />
  </section>
);

/*
 * Export Default
 */
export default HeaderFooter;
