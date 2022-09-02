import React from 'react'
import astronaut from '../../images/astronaut.svg';
import { Header, NavContainer, NavMain, NavLogo, Logo, NavTitle, NavLink, NavPages } from './Navigation.styles';

function Navigation() {

  return (
    <Header>
      <NavContainer>
        <NavMain>
          <NavLogo to='/about'>
            <Logo
              alt={'R.I.P Marc McCarthy'}
              src={astronaut}
            />
          </NavLogo>
          <NavTitle to='/home'>
            Marc McCarthy's Portfolio
          </NavTitle>
        </NavMain>
        <NavPages>
          <NavLink to='/home'>
            Home
          </NavLink>
          <NavLink to='/projects'>
            Projects
          </NavLink>
          <NavLink to='/resume'>
            Resume
          </NavLink>
          <NavLink to='/videos'>
            Videos
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/contact'>
            Contact
          </NavLink>
        </NavPages>
      </NavContainer>
    </Header>
  );
}

export default Navigation;
