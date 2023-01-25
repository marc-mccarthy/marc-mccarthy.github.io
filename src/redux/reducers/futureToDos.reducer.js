const futureToDosReducer = (state = [], action) => {
	switch (action.type) {
		case "GET_FUTURETODOS":
			return action.payload;
		case "RESET_FORM":
			return (state = {});
		default:
			return state;
	}
};

export default futureToDosReducer;
