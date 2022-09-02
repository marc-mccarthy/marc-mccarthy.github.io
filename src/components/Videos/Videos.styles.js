import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  @media (min-width: 1040px) {
    margin-left: 20%;
    margin-right: 20%;
  }
`

export const VideoContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AspectRatio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56%;
`

export const Frame = styled.iframe`
  border: 2px solid grey;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`
