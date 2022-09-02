import styled from 'styled-components';

export const Page = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`

export const Category = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TechTitle = styled.h2`
  font-size: 1.5rem;
  font-family: Lobster;
`

export const TechList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const TechItem = styled.li`
  font-family: 'Sansita';
`

export const Anchor = styled.a`
  &:link, &:visited {
      color: black;
      padding: 5px 5px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      width: 15rem;
      border-radius: 0.5rem;
  }
  &:hover, &:active {
      background-color: blue;
      color: white;
  }
`

export const ToDoItem = styled.div`
  margin: 0.7rem;
`

