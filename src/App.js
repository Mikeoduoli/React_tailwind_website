import { useState, useEffect } from 'react';
import './App.css';

//Components
// const Person = (props) => {
//   return(
//     <>
//     <h1>Name: {props.name}</h1>
//     <h2>Last Name: {props.lastName}</h2>
//     <h2>Age: {props.age}</h2>
//     </>
//   )
// }

const App = () => {
  // const name = 'John';
  // const isNameShowing = false;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("You've changed the counter to " + counter);
  }, [counter]);

  return (
    <div className="App">
      {/* <h1>Hello, {name}!</h1>
      <h1>Hello, {isNameShowing ? name : 'someone'}!</h1>
      <Person name= {'John'} lastName={'Doe'} age={25}/>
      <Person name= {'Joy'} lastName={'Dave'} age={23}/> */}

      {/* React State */}
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
