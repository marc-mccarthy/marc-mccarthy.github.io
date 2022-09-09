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
export const Anchor = styled.a`
  text-decoration: none;
  border-radius: 3px;
  box-shadow: 0 6px #bcb8b8;
  color: white;
  padding: 2px;
  font-size: 14px;
  font-weight: bold;
  width: 90px;
  cursor: pointer;
  height: 25px;
  border: 0.5px solid #000000;
  margin: 1rem 0.5rem;
  &:active {
    transform: scale(0.96);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.25);
`
