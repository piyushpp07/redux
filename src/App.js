import './App.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';

//dispatch is use to send the data to redux store
//selector used to find the data from the redux store 

function App() {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: 'INC' })
  }
  const decrement = () => {
    dispatch({ type: 'DEC' })
  }
  const addBy = () => {
    dispatch({ type: 'ADD', payload: 10 })
  }
  const counter = useSelector((state) => state.counter);
  return (
    <div >
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>addBy 10</button>
    </div>
  );
}

export default App;
