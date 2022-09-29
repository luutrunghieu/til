const { createStore } = require('./store');

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

let store = createStore(counterReducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: 'counter/incremented' });
store.dispatch({ type: 'counter/incremented' });
store.dispatch({ type: 'counter/decremented' });

unsubscribe();
store.dispatch({ type: 'counter/incremented' });
