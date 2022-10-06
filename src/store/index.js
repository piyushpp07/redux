import { createStore } from 'redux';

const reducerFxn = (state = { counter: 0 }, action) => {

   //synchronous function
   //we should not mutate the orignal state it will crash the app

   if (action.type === 'INC') {
      return { counter: state.counter + 1 };
   }
   if (action.type === 'DEC') {
      return { counter: state.counter - 1 };
   }
   if (action.type === 'ADD') {
      return { counter: state.counter + action.payload }
   }
   return state;
}

const store = createStore(reducerFxn);
export default store;