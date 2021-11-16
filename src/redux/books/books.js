export const initialState = [];

export const addBook = (payload) => ({
  type: 'ADD_BOOK',
  payload,
});
export const removeBook = (payload) => ({
  type: 'REMOVE_BOOK',
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

export default reducer;
