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
      {contactLinks.map((contactLink, index) => {
        return (
          <Anchor href={contactLink.link} key={index} target="_blank" rel="noopener noreferrer">{contactLink.contact_name}</Anchor>
        )
      })}
    </Bottom>
  );
}

export default Footer;
