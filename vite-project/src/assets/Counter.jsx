/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Counter() {


    const [counter, setCounter] = useState(0); // use of useState to start at 0

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        if (counter !== 0) { // to not go bellow 0
            setCounter(counter - 1);
        }
    };


    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {counter}</p>
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    );
};

export default Counter;