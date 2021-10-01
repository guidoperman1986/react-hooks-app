import React, {useRef, useLayoutEffect} from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const {counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pTag = useRef()

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
    }, [])

    return (
        <div>
            <h1>Layout</h1>
            <hr></hr>

            <blockquote className="blockquote text-right derecho">
                <p ref={ pTag } className="mb-4"> { quote } </p>
                {/* <footer className="blockquote-footer">{ author }</footer> */}
            </blockquote>

            <button className="btn btn-primary" onClick={increment}>Siguiente quote</button>

        </div>
    )
}
