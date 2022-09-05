const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

// routes included
const contactRouter = require('./routes/contact.router');
const futureToDosRouter = require('./routes/futureToDos.router');
const interestsRouter = require('./routes/interests.router');
const pagesRouter = require('./routes/pages.router');
const projectsRouter = require('./routes/projects.router');
const resumeRouter = require('./routes/resume.router');
const servicesRouter = require('./routes/services.router');
const technologiesRouter = require('./routes/technologies.router');
const videosRouter = require('./routes/videos.router');
const contactLinksRouter = require('./routes/contactLinks.router');

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/contact', contactRouter);
app.use('/futureToDos', futureToDosRouter);
app.use('/interests', interestsRouter);
app.use('/pages', pagesRouter);
app.use('/projects', projectsRouter);
app.use('/resume', resumeRouter);
app.use('/services', servicesRouter);
app.use('/technologies', technologiesRouter);
app.use('/videos', videosRouter);
app.use('/contactLinks', contactLinksRouter);

// serve static files
app.use(express.static('build'));

// app set
const PORT = process.env.PORT || 5001;

// listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
