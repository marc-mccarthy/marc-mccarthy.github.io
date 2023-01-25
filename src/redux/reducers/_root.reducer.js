import { combineReducers } from "redux";

import interestsReducer from "./interests.reducer";
import futureToDosReducer from "./futureToDos.reducer";
import pagesReducer from "./pages.reducer";
import projectsReducer from "./projects.reducer";
import resumeReducer from "./resume.reducer";
import servicesReducer from "./services.reducer";
import technologiesReducer from "./technologies.reducer";
import videosReducer from "./videos.reducer";
import contactLinksReducer from "./contactLinks.reducer";

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
