const pagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_PAGES':
      return action.payload;
    case 'RESET_FORM':
      return state = {};
    default:
      return state;
  }
};

export default pagesReducer;
