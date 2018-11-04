const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const SET = 'SET';

export default function reducer(state = { counter : 0 }, action) {
    console.log('Action: ' + action.type);
    switch (action.type) {
      case INCREMENT:
        return { ...state, counter: state.counter + 1 };
      case DECREMENT:
        return { ...state, counter: state.counter - 1 };
      case RESET:
        return { ...state, counter: 0 };
      case SET:
        return { ...state, counter: action.amount };
      default:
        return state;
    }
}

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function reset() {
  return {
    type: RESET
  }
}

export function set(amount) {
  return {
    type: SET,
    amount,
  }
}