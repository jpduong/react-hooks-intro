import React, { useState } from "react";

const App = () => {
  const [array, setArray] = useState([0, 0]);
  const [age, setAge] = useState(26);

  const increaseAge = () => {
    setAge(age + 1);
  };

  const addTodo = () => {
    setArray(prevState => [...prevState, 0]);
  };

  return (
    <div>
      <p>Array of 0s: {array}</p>
      <button onClick={addTodo}>Add 0 to Array</button>
      <p>Age: {age}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
};

export default App;
