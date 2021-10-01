import React, {useRef} from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr></hr>

            <input ref={inputRef} className="form-control" placeholder="Su Nombre"></input>

            <button onClick={ handleClick } className="btn btn-outline-primary mt-5">Focus</button>
        </div>



    )
}
