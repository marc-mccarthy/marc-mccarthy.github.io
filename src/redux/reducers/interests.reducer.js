const interestsReducer = (state = [], action) => {
	switch (action.type) {
		case "GET_INTERESTS":
			return action.payload;
		case "RESET_FORM":
			return (state = {});
		default:
			return state;
	}
};

export default interestsReducer;
