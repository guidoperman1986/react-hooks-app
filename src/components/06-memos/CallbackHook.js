import React, {useState, useCallback} from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css'

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    /* const increment = () => {
        setCounter(counter + 1);
    }
    */

    const increment = useCallback(
        (num) => {
            setCounter(c => c + num)
        },
        [setCounter],
    )

    return (
        <div>
            <h1>useCallbackHook: { counter }</h1>
            <hr></hr>

            <ShowIncrement increment={increment}></ShowIncrement>
        </div>
    )
}
