const contactLinksReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_CONTACT_LINKS':
      return action.payload;
    case 'RESET_FORM':
      return state = {};
    default:
      return state;
  }
};

export default contactLinksReducer;
