import styled from 'styled-components';

export const Bottom = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #d2430f;
  position: fixed;
  width: 100%;
  bottom: 0;
	text-align: center;
`

export const BadgeLink = styled.img`
  margin: 10px 5px;
  border-radius: 8px;
  box-shadow: 0 6px #bdbdbdf7;
  cursor: pointer;
  width: 100px;
  height: 30px;
  border: 1px solid #000000;
  &:active {
    transform: scale(0.96);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.25);
`

export const Anchor = styled.a`
  text-decoration: none;
  margin: 0.25rem;
`
