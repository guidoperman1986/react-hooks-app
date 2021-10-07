import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => {
    test('should return the default state', () => {
        const state = todoReducer(demoTodos,{type:''});
        expect(state).toEqual(demoTodos);
        
    })

    test('should add Todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender GraphQL',
            done: false
        }
        const state = todoReducer(demoTodos, {type: 'add', payload: newTodo})
        expect(state.length).toEqual(3)
        expect(state).toEqual([...demoTodos, newTodo])
    })
    
    test('should delete one TODO', () => {
        const state = todoReducer(demoTodos, {type: 'delete', payload: 3});
        expect(state.length).toEqual(2)
    })

    test('should Toggle one TODO', () => {
        const state = todoReducer(demoTodos, {type: 'toggle', payload: 2});
        expect(state[1].done).toEqual(true)
    })
    
    

    
})
