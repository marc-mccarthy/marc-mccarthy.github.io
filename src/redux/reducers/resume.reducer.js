const resumeReducer = (state = [], action) => {
	switch (action.type) {
		case "GET_RESUME":
			return action.payload;
		case "RESET_FORM":
			return (state = {});
		default:
			return state;
	}
};

export default resumeReducer;
