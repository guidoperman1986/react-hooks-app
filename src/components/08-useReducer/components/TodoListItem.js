import React from 'react'

export const TodoListItem = ({todo, i, handleDelete, handleToggle}) => {
    return (
        <li className="list-group-item text-center" 
            key={todo.id}
            onClick={ () => handleToggle(todo.id) }
            > 
            <p className={ `${todo.done && 'complete'}` }>
                {i + 1}. { todo.desc }
            </p>
            <button 
                className="btn btn-danger" 
                onClick={ ()=>handleDelete(todo.id) }
            >Borrar</button>
        </li>
    )
}
