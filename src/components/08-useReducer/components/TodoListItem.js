import React from 'react'

export const TodoListItem = ({todo, i, handleDelete, handleToggle}) => {
    return (
        <li className="list-group-item text-center" 
            key={todo.id}
            onClick={ () => handleToggle(todo.id) }
            > {i + 1}. { todo.desc }
            <p className={ `${todo.done && 'complete'}` }>
                    <button 
                        className="btn btn-danger" 
                        onClick={ ()=>handleDelete(todo.id) }
                    >Borrar</button>
            </p>
        </li>
    )
}
