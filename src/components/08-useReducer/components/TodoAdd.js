import React from 'react';
import { useForm } from '../../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo, }) => {
    const [ {description}, handleInputChange, reset ] = useForm({description: ''});

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo);

        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    name="description"
                    placeholder="Aprender..."
                    autoComplete="off"
                    className="form-control"
                    onChange={ handleInputChange }
                    value={description}
                ></input>

                <button 
                    type="submit"
                    className="btn btn-outline-primary btn-block mt-1"
                >Agregar</button>
            </form>


        </>


    )
}