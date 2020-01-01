const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      }
    case 'INCREMENT_BY':
      return {
        counter: state.counter + action.value
      }
    case 'DECREMENT_BY':
      return {
        counter: state.counter - action.value
      }
    default:
      return state;
  }
};

export default reducer;