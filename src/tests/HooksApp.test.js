import React from 'react';
import { shallow } from "enzyme";
import { HooksApp } from '../HooksApp';

describe('Pruebas en <HookApp />', ()=>{
    test('should create', ()=>{
        const wrapper = shallow(<HooksApp />)

        expect(wrapper).toMatchSnapshot();


    })




})