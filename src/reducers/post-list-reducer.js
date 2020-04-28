export default (state = {}, action) => {
  const { user, title, body, upvotes, id } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        user: user,
        title: title,
        body: body,
        upvotes: upvotes,
        id: id
      }
    });
  case 'DELETE_POST':
    const newState = { ...state };
    delete newState[id];
    return newState;

  default:
    return state;
  }
};