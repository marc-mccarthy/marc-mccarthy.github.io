import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './About.css';
import { Anchor, Page, Content, Category, TechTitle, TechList, TechItem, BadgeLink, ToDoList, ToDoItem } from './About.styles'
import LoadingBar from '../LoadingBar/LoadingBar';

function About() {
  const dispatch = useDispatch();

  const technologies = useSelector(store => store.technologiesReducer);
  const services = useSelector(store => store.servicesReducer);
  const futureToDos = useSelector(store => store.futureToDosReducer);

  useEffect(() => {
    dispatch({ type: 'GET_TECHNOLOGIES_SAGA' });
    dispatch({ type: 'GET_SERVICES_SAGA' });
    dispatch({ type: 'GET_FUTURETODOS_SAGA' });
  }, []);

  return (
    <div>
      {technologies.length === 0 || services.length === 0 || futureToDos.length === 0 ? (
        <LoadingBar />
      ) : (
      <Page>
        <Content>
          <Category>
            <TechTitle>
              Technologies Used:
            </TechTitle>
            <TechList>
              {technologies.map((tech, index) => {
                return (
                  <TechItem key={index}>
                    <Anchor href={tech.link} target="_blank" rel="noopener"><BadgeLink src={tech.logo} alt={tech.tech_name}></BadgeLink></Anchor>
                  </TechItem>
                );
              })}
            </TechList>
          </Category>
          <Category>
            <TechTitle>
              Services Used:
            </TechTitle>
            <TechList>
              {services.map((service, index) => {
                return (
                  <TechItem key={index}>
                    <Anchor href={service.link}><BadgeLink src={service.logo} alt={service.service_name}></BadgeLink></Anchor>
                  </TechItem>
                );
              })}
            </TechList>
          </Category>
          <Category>
            <TechTitle>
              Future To-Do's:
            </TechTitle>
            <ToDoList>
              {futureToDos.map((todo, index) => {
                return (
                  <ToDoItem key={index}>
                    <input type='checkbox' id={index} />
                    <label for={index}>
                      {todo.future_to_do}
                    </label>
                  </ToDoItem>
                );
              })}
            </ToDoList>
          </Category>
        </Content>
      </Page>
      )}
    </div>
  );
}

export default About;
