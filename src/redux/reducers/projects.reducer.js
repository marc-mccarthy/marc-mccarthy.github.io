const projectsReducer = (state = [], action) => {
	switch (action.type) {
		case "GET_PROJECTS":
			return action.payload;
		case "RESET_FORM":
			return (state = {});
		default:
			return state;
	}
};

export default projectsReducer;
