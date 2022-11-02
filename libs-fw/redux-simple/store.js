const createStore = (reducer) => {
  let currentState = reducer(undefined, {});
  let listeners = [];
  return {
    getState: () => currentState,
    subscribe: (newListener) => {
      listeners.push(newListener);
      const unsubscribe = () => {
        listeners = listeners.filter((l) => l !== newListener);
      };

      return unsubscribe;
    },
    dispatch: (action) => {
      currentState = reducer(currentState, action);
      listeners.forEach((listener) => listener());
    },
  };
};

module.exports = {
  createStore,
};
