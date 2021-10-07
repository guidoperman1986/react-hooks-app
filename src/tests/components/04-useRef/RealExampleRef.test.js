import React, { useState } from 'react';
import { shallow } from 'enzyme'
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';



describe('Pruebas en RealExampleRef', () => {
    const wrapper = shallow(<RealExampleRef />)
    test('should create', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    })
    
    test('should show MultipleCustomHooks component', ()=>{
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
    
})
