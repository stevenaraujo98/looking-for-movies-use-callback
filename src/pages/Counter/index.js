import React, { useCallback, useState } from 'react';

const functions = new Set();

export default () => {
    const [counter, setCounter] = useState(0)
    const [anotherCounter, setAnotherCounter] = useState(0)

    const handleDecrementClick = useCallback(() => {
        setCounter(counter-1)
    }, [counter])
    const handleIncrementClick = useCallback(() => {
        setCounter(counter+1)
        setAnotherCounter(anotherCounter + 1)
    }, [counter])
    const doSomething = useCallback(() => {
        alert(10);
    }, [anotherCounter])

    functions.add(handleDecrementClick);
    functions.add(handleIncrementClick);
    functions.add(doSomething);
    console.log(functions);

    return (
        <div>
            <p>{counter}</p>
            <button onClick={handleDecrementClick}>-</button>
            <button onClick={handleIncrementClick}>+</button>
        </div>
    )
}