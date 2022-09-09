import styled from 'styled-components';
import devices from '../../devices/devices';

export const Page = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${devices.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const Card = styled.div`
  margin: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 17rem;
  min-width: 10rem;
  height: 25rem;
  border: 1px solid gray;
  box-shadow: 5px 5px #ccc;
  transition: 0.3s;
  :hover {
    box-shadow: 0 10px 20px 0 rgba(0,0,0,5);
  }
`

export const CardName = styled.h4`
  font-family: 'Sansita';
  padding: 1rem;
  width: 15rem;
  height: auto;
`

export const CardImage = styled.img`
  width: 15rem;
  height: auto;
`

export const CardDescription = styled.p`
  font-family: 'Sansita';
  color: black;
  width: 15rem;
  height: 4rem;
`

export const CardTitle = styled.h4`
  font-family: 'Sansita';
  color: black;
  width: 15rem;
  height: auto;
`

export const CardLink = styled.a`
  font-family: 'Sansita';
  color: black;
  text-decoration: none;
  font-size: 1rem;
`
