import React from 'react'
import rocket from '../../images/rocket.ico';
import { Bottom, Rocket } from './Footer.styled';

function Footer() {

  return (
    <Bottom>
      <Rocket src={rocket} alt='footprint' />
      <p>
        &copy; 2022 - Marc McCarthy - Seeking Rhythm, Knowledge, and Fulfillment
      </p>
      <Rocket src={rocket} alt='footprint' />
    </Bottom>
  );
}

export default Footer;
