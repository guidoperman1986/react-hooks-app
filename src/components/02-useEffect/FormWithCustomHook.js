import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({name: '', email: '', password: ''});

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('email cambio');
        
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
          <h1>FormWithCustomHook</h1>  
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

          <div className="form-group">
            <input 
              type="password" 
              name="password" 
              className="form-control mt-2"
              autoComplete="off"
              value={password}
              placeholder="password"
              onChange={handleInputChange}
            >              
            </input>

          </div>

          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}
