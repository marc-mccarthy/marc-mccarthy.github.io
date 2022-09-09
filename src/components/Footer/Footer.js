import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import rocket from '../../images/rocket.ico';
import { Anchor, Bottom, Rocket } from './Footer.styled';

function Footer() {
  const dispatch = useDispatch();
  const contactLinks = useSelector(store => store.contactLinksReducer);

  useEffect(() => {
    dispatch({ type: 'GET_CONTACT_LINKS_SAGA' });
  }, []);

  return (
    <Bottom>
      <Rocket src={rocket} alt='footprint' />
      {contactLinks.map((contactLink, index) => {
        return (
          <Anchor href={contactLink.link} key={index} target="_blank" rel="noopener noreferrer">{contactLink.contact_name}</Anchor>
        )
      })}
      <Rocket src={rocket} alt='footprint' />
    </Bottom>
  );
}

export default Footer;
