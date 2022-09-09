import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Anchor, BadgeLink, Bottom } from './Footer.styled';

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
          <Anchor href={contactLink.link} key={index} target="_blank" rel="noopener noreferrer">
            <BadgeLink src={contactLink.logo} alt={contactLink.contact_name}>
            </BadgeLink>
          </Anchor>
        )
      })}
    </Bottom>
  );
}

export default Footer;
