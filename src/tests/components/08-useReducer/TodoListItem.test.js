import React from 'react';
import { shallow } from "enzyme";
import { TodoListItem } from '../../../components/08-useReducer/components/TodoListItem';

import { demoTodos } from '../../fixtures/demoTodos'

describe('Pruebas en TodoListItem', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoListItem todo={demoTodos[0]} i={0} handleDelete={handleDelete} handleToggle={handleToggle} />)

    test('should create', () => {
        expect(wrapper).toMatchSnapshot();
        
    })

    test('should call handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(1);
    })

    test('should call handleToggle', () => {
        wrapper.find('li').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(1);
    })

    test('should show text correctly', () => {
        expect(wrapper.find('p').text()).toBe(`1. ${ demoTodos[0].desc }`)
    })

    test('should show linethrough', () => {
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(<TodoListItem todo={todo} />)

        expect(wrapper.find('p').hasClass('complete')).toBeTruthy();

    })


    
    
    
    
})


