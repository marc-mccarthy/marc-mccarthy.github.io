import styled from 'styled-components';

export const Page = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MyResume = styled.iframe`
  margin: 1rem;
  border: 1px solid blue;
  width: 80vw;
  height: 60vh;
  @media (min-width: 870px) {
    height: 80vh;
  }
  @media (min-width: 1040px) {
    width: 50rem;
  }
`