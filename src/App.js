import React, {useState} from "react";


function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () =>{
    setCount(count + 1);
  }

  const handleDecrement = () =>{
    setCount(count - 1);
  }
  const handleReset = () =>{
    setCount(0);
  }

  return (
    <div className="App">
      <h1>Counter App</h1>

      <Displaycount 
        count = {count}
        onReset = {handleReset}
      />

      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>

    </div>
  );
}

const Displaycount = ({count, onReset}) => {
    return(
      <div>
        <p>count: {count} </p>
        <span> { count <10 ? "insuffisant" : "suffisant"} </span>
       { count == 0 || <button onClick ={onReset}> reset </button> }
      </div>
    )
}

export default App;
