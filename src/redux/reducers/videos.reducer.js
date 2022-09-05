const videosReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_VIDEOS':
      return action.payload;
    case 'RESET_FORM':
      return state = {};
    default:
      return state;
  }
};

export default videosReducer;
