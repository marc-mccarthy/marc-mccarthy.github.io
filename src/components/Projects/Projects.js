import React from 'react'
import greenerFootprintsWirefame from '../../wireframes/greener-footprints-wireframe.png';
import movieSagasWireframe from '../../wireframes/movie-sagas-wireframe.png';
import reactGalleryWireframe from '../../wireframes/react-gallery-wireframe.png';
import reduxFeedbackLoopWirefame from '../../wireframes/redux-feedback-loop-wireframe.png';
import sqlToDoListWireframe from '../../wireframes/sql-to-do-list-wireframe.png';
import policeConductWirefame from '../../wireframes/police-conduct-wireframe.png';
import { Page, Card, ProjectsGrid, CardLink, CardName, CardImage, CardDescription } from './Projects.styles';

let projects = [
  {
    projectName: 'Greener Foot(prints)',
    image: greenerFootprintsWirefame,
    description: '🍃 Travel emissions footprint calculator based on variables integrated with many features.',
    host: 'https://greener-footprints.herokuapp.com',
    github: 'https://github.com/marc-mccarthy/greener-footprints',
  },
  {
    projectName: 'Police Conduct',
    image: policeConductWirefame,
    description: '👨🏻‍✈️ A place to publish details for your police encounter per incident, good or bad.',
    host: 'https://police-conduct.marcmccarthy.io',
    github: 'https://github.com/marc-mccarthy/police-conduct',
  },
  {
    projectName: 'Movie Sagas',
    image: movieSagasWireframe,
    description: '🍿 Small database of some great movies with CRUD features and a Top 10 Page.',
    host: 'https://movie-sagas.marcmccarthy.io',
    github: 'https://github.com/marc-mccarthy/movie-sagas',
  },
  {
    projectName: 'React Gallery',
    image: reactGalleryWireframe,
    description: '🖼️ Picture gallery CRUD application for some of my favorite life moments.',
    host: 'https://react-gallery.marcmccarthy.io',
    github: 'https://github.com/marc-mccarthy/react-gallery',
  },
  {
    projectName: 'Redux Feedback Loop',
    image: reduxFeedbackLoopWirefame,
    description: '🖲️ Provide feedback for how well your retaining programming concepts.',
    host: 'https://redux-feedback-loop.marcmccarthy.io',
    github: 'https://github.com/marc-mccarthy/redux-feedback-loop',
  },
  {
    projectName: 'SQL To-Do List',
    image: sqlToDoListWireframe,
    description: '✏️ A To-Do List that keeps track of whatever really. Rebuilding with React.',
    host: 'https://sql-to-do-list.marcmccarthy.io',
    github: 'https://github.com/marc-mccarthy/sql-to-do-list',
  },
]

function Projects() {
  return (
    <Page>
      <h2>Current Projects</h2>
      <ProjectsGrid>
        {projects.map((project, index) => {
          return (
            <Card key={index}>
              <CardLink href={project.host}>
                <CardName>{project.projectName}</CardName>
                <CardImage src={project.image} alt={project.name} />
                <CardDescription>{project.description}</CardDescription>
              </CardLink>
              <CardLink href={project.github}>
                <h5>GitHub Link</h5>
              </CardLink>
            </Card>
          )
        })}
      </ProjectsGrid>
    </Page>
  );
}

export default Projects;
