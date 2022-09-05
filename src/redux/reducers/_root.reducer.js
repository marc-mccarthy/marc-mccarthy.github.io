import { combineReducers } from 'redux';

import interestsReducer from './interests.reducer'
import futureToDosReducer from './futureToDos.reducer';
import pagesReducer from './pages.reducer';
import projectsReducer from './projects.reducer';
import resumeReducer from './resume.reducer';
import servicesReducer from './services.reducer';
import technologiesReducer from './technologies.reducer';
import videosReducer from './videos.reducer';
import contactLinksReducer from './contactLinks.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  interestsReducer,
  futureToDosReducer,
  pagesReducer,
  projectsReducer,
  resumeReducer,
  servicesReducer,
  technologiesReducer,
  videosReducer,
  contactLinksReducer,
});

export default rootReducer;
