/*
 * Npm import
 */
import React from 'react';

/*
 * Local import
 */
import FootFooter from './FootFooter';
import LogoFooter from './LogoFooter';
import HeaderFooter from './HeaderFooter';

/*
 * Code
 */

const Footer = () => (
  <footer id="footer">
    <HeaderFooter />
    <LogoFooter />
    <FootFooter />
  </footer>
);

/*
 * Export Default
 */
export default Footer;
