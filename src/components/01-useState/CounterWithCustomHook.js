import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './Counter.css'

export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter(10);

    return (
        <>
          <h1>Counter with Hook: {state}</h1>
          <hr></hr>

          <button onClick={increment} className="btn btn-primary mr-1">+</button>
          <button onClick={reset} className="btn btn-primary mr-1">Reset</button>
          <button onClick={decrement} className="btn btn-primary">-</button>
        </>
    )
}
