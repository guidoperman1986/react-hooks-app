import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en LoginScreen', () => {
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={
            { setUser }
        }>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot();

    })

    test('should run setUser with arguments', () => {
        // wrapper.find('button').simulate('click');
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith({
            id: '2525',
            name: 'Guido'
        })
    })
    
    
})
