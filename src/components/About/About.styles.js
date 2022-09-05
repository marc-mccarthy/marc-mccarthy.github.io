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
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const TechItem = styled.li`
  font-family: 'Sansita';
  margin: 0.25rem;
`

export const ToDoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ToDoItem = styled.li`
  margin: 0.7rem;
  font-family: Sansita, monospace;
  font-size: 18px;
`

export const BadgeLink = styled.img`
  border-radius: 8px;
  box-shadow: 0 6px #969696;
  cursor: pointer;
  height: 25px;
  border: 0.5px solid #000000;
  &:active {
    transform: scale(0.96);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.25);
`

export const Anchor = styled.a`
  text-decoration: none;
`
