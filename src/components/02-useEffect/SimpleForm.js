import React, {useState, useEffect} from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({name: '', email: ''});

    const {name, email} = formState;


    useEffect(()=>{
      // console.log('hey')
    }, [])

    useEffect(()=>{
      // console.log('formState')
    }, [formState])

    useEffect(()=>{
      // console.log('email')
    }, [email])



    const handleInputChange = ({target}) => {
      setFormState({
        ...formState,
        [ target.name ]: target.value
      })
    }


    return (
        <>
          <h1>useEffect</h1>  
          <hr></hr>

          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              className="form-control"
              autoComplete="off"
              value={name}
              placeholder="name"
              onChange={handleInputChange}
            >              
            </input>

          </div>

          <div className="form-group">
            <input 
              type="text" 
              name="email" 
              className="form-control mt-2"
              autoComplete="off"
              value={email}
              placeholder="email"
              onChange={handleInputChange}
            >              
            </input>

          </div>

          { (name === '123') && <Message />}

        </>
    )
}
