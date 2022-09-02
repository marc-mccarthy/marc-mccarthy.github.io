import React from 'react'
import './About.css';
import { Anchor, Page, Content, Category, TechTitle, TechList, TechItem, ToDoItem } from './About.styles'

let technologies = [
  {
    techName: 'JavaScript',
    link: 'https://www.javascript.com',
    logo: 'https://img.shields.io/badge/JavaScript-323330?style=plastic&logo=javascript&logoColor=F7DF1E',
  },
  {
    techName: 'React.js',
    link: 'https://reactjs.org',
    logo: 'https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB',
  },
  {
    techName: 'Redux.js',
    link: 'https://redux.js.org',
    logo: 'https://img.shields.io/badge/Redux-593D88?style=plastic&logo=redux&logoColor=white',
  },
  {
    techName: 'React Router',
    link: 'https://www.npmjs.com/package/react-router',
    logo: 'https://img.shields.io/badge/React_Router-CA4225?style=plastic&logo=react-router&logoColor=white',
  },
  {
    techName: 'Redux-Saga.js',
    link: 'https://redux-saga.js.org',
    logo: 'https://img.shields.io/badge/Redux%20saga-86D46B?style=plastic&logo=redux%20saga&logoColor=999999',
  },
  {
    techName: 'Node.js',
    link: 'https://nodejs.org/en',
    logo: 'https://img.shields.io/badge/Node.js-339933?style=plastic&logo=nodedotjs&logoColor=white',
  },
  {
    techName: 'PostgreSQL',
    link: 'https://www.postgresql.org',
    logo: 'https://img.shields.io/badge/PostgreSQL-316192?style=plastic&logo=postgresql&logoColor=white',
  },
  {
    techName: 'Express.js',
    link: 'https://expressjs.com',
    logo: 'https://img.shields.io/badge/Express.js-000000?style=plastic&logo=express&logoColor=white',
  },
  {
    techName: 'Git Versioning',
    link: 'https://git-scm.com',
    logo: 'https://img.shields.io/badge/git-%23F05033.svg?style=plastic&logo=git&logoColor=white',
  },
  {
    techName: 'Styled Components',
    link: 'https://styled-components.com',
    logo: 'https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white',
  },
  {
    techName: 'Material UI',
    link: 'https://mui.com',
    logo: 'https://img.shields.io/badge/Material--UI-0081CB?style=plastic&logo=material-ui&logoColor=white',
  },
  {
    techName: 'NPM.js',
    link: 'https://www.npmjs.com/',
    logo: 'https://img.shields.io/badge/npm-CB3837?style=plastic&logo=npm&logoColor=white',
  },
  {
    techName: 'jQuery',
    link: 'https://jquery.com',
    logo: 'https://img.shields.io/badge/jQuery-0769AD?style=plastic&logo=jquery&logoColor=white',
  },
  {
    techName: 'HTML5',
    link: 'https://en.wikipedia.org/wiki/HTML',
    logo: 'https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=html5&logoColor=white',
  },
  {
    techName: 'CSS3',
    link: 'https://en.wikipedia.org/wiki/CSS',
    logo: 'https://img.shields.io/badge/CSS3-1572B6?style=plastic&logo=css3&logoColor=white',
  },
  {
    techName: 'Chart.js',
    link: 'https://www.chartjs.org',
    logo: 'https://img.shields.io/badge/chart.js-F5788D.svg?style=plastic&logo=chart.js&logoColor=white',
  },
  {
    techName: 'Markdown',
    link: 'https://www.markdownguide.org',
    logo: 'https://img.shields.io/badge/Markdown-000000?style=plastic&logo=markdown&logoColor=white',
  },
  {
    techName: 'Bootstrap',
    link: 'https://getbootstrap.com',
    logo: 'https://img.shields.io/badge/Bootstrap-563D7C?style=plastic&logo=bootstrap&logoColor=white',
  },
  {
    techName: 'React Native',
    link: 'https://reactnative.dev',
    logo: 'https://img.shields.io/badge/react_native-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB',
  },
  {
    techName: 'Passport (Auth)',
    link: 'https://www.passportjs.org',
    logo: '',
  },
  {
    techName: 'React Hook Form',
    link: 'https://react-hook-form.com/',
    logo: 'https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=plastic&logo=reacthookform&logoColor=white',
  },
  {
    techName: 'Jest',
    link: 'https://jestjs.io',
    logo: 'https://img.shields.io/badge/-jest-%23C21325?style=plastic&logo=jest&logoColor=white',
  },

];

let services = [
  {
    serviceName: 'Amazon Web Services',
    link: 'https://aws.amazon.com',
    logo: 'https://img.shields.io/badge/AWS-%23FF9900.svg?style=plastic&logo=amazon-aws&logoColor=white',
  },
  {
    serviceName: 'Google Maps Javascript API',
    link: 'https://mapsplatform.google.com',
    logo: 'https://img.shields.io/badge/google-4285F4?style=plastic&logo=google&logoColor=white',
  },
  {
    serviceName: 'Google Maps Directions API',
    link: 'https://mapsplatform.google.com',
    logo: 'https://img.shields.io/badge/google-4285F4?style=plastic&logo=google&logoColor=white',
  },
  {
    serviceName: 'Carbon Interface API',
    link: 'https://www.carboninterface.com',
    logo: '',
  },
  {
    serviceName: 'GitHub',
    link: 'https://github.com',
    logo: 'https://img.shields.io/badge/github-%23121011.svg?style=plastic&logo=github&logoColor=white',
  },
  {
    serviceName: 'Dokku',
    link: 'https://dokku.com',
    logo: '',
  },
  {
    serviceName: 'Heroku',
    link: 'https://www.heroku.com',
    logo: 'https://img.shields.io/badge/heroku-%23430098.svg?style=plastic&logo=heroku&logoColor=white',
  },
  {
    serviceName: 'Digital Ocean',
    link: 'https://www.digitalocean.com/',
    logo: 'https://img.shields.io/badge/Digital_Ocean-0080FF?style=plastic&logo=DigitalOcean&logoColor=white',
  },
  {
    serviceName: 'Vultr',
    link: 'https://www.vultr.com',
    logo: 'https://img.shields.io/badge/Vultr-007BFC.svg?style=plastic&logo=vultr',
  },
  {
    serviceName: 'Vercel',
    link: 'https://vercel.com',
    logo: 'https://img.shields.io/badge/vercel-%23000000.svg?style=plastic&logo=vercel&logoColor=white',
  },
  {
    serviceName: 'Postman',
    link: 'https://www.postman.com',
    logo: 'https://img.shields.io/badge/Postman-FF6C37?style=plastic&logo=postman&logoColor=white',
  },
  {
    serviceName: 'Visual Studio Code',
    link: 'https://code.visualstudio.com',
    logo: 'https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=plastic&logo=visual-studio-code&logoColor=white',
  },
  {
    serviceName: 'Figma',
    link: 'https://www.figma.com',
    logo: 'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white',
  },
];

let futureToDos = [
  {
    futureToDo: 'Dig deeper into Jest testing.',
  },
  {
    futureToDo: 'Redo previous apps to be mobile first developed',
  },
  {
    futureToDo: 'Use React Native with mobile versions of apps.',
  },
  {
    futureToDo: 'Learn Typescript and Object Oriented Programming.',
  },
  {
    futureToDo: 'Learn .NET and C#.',
  },
  {
    futureToDo: 'Incorporate React Hook Form into the Contact page.',
  },
  {
    futureToDo: 'Add Movies, TV Shows, and Video Games to About Me page.',
  },
];

function About() {
  return (
    <Page>
      <Content>
        <Category>
          <TechTitle>
            Technologies Used:
          </TechTitle>
          <TechList>
            {technologies.map((tech, index) => {
              return (
                <TechItem
                  key={index}
                >
                  <Anchor href={tech.link}>{tech.techName}</Anchor>
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
                <TechItem
                  key={index}
                >
                  <Anchor href={service.link}>{service.serviceName}</Anchor>
                </TechItem>
              );
            })}
          </TechList>
        </Category>
        <Category>
          <TechTitle>
            Future To-Do's:
          </TechTitle>
          <TechList>
            {futureToDos.map((todo, index) => {
              return (
                <ToDoItem>
                  <input type='checkbox' id={index} />
                  <label for={index}>
                    {todo.futureToDo}
                  </label>
                </ToDoItem>
              );
            })}
          </TechList>
        </Category>
      </Content>
    </Page>
  );
}

export default About;
