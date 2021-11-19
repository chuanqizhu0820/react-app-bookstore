const baseId = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appId = 'uMZpDiBI8HUR43rKW9ot';

export const initialState = [];

export const addBook = (payload) => (dispatch) => {
  dispatch({ type: 'ADD_BOOK', payload });
  fetch(`${baseId}/${appId}/books`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    .then((response) => response.json());
};

export const removeBook = (payload) => (dispatch) => {
  dispatch({ type: 'REMOVE_BOOK', payload });
  const itemId = payload.item_id;
  fetch(`${baseId}/${appId}/books/${itemId}`,
    {
      method: 'DELETE',
    })
    .then((response) => response.json());
};

export const loadBook = () => (dispatch) => {
  fetch(`${baseId}/${appId}/books`)
    .then((response) => response.json())
    .then((data) => {
      const valueArr = Object.values(data).flat();
      const keyArr = Object.keys(data);
      const objArr = valueArr.map((item, idx) => {
        const obj = { item_id: keyArr[idx] };
        return { ...obj, ...item };
      });
      dispatch({ type: 'LOAD_BOOK', payload: objArr });
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter((item) => item.item_id !== action.payload.item_id);
    case 'LOAD_BOOK':
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
