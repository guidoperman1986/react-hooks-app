import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Guido',
        email: 'guido@globant.com'
    }

    test('should return a default form', () => {
        // form, funciones
        const { result } = renderHook(()=>useForm(initialForm));
        const [ formValues, handleInputChange, reset ] = result.current;

        expect(formValues).toEqual(initialForm)
        expect(typeof handleInputChange).toEqual('function')
        expect(typeof reset).toEqual('function')
    })

    test('should change form name value', () => {
        const { result } = renderHook(()=>useForm(initialForm));
        const [ , handleInputChange ] = result.current;

        act(()=>{
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Guido Perman'
                }
            })
        })

        const [ formValues ] = result.current;
        expect( formValues ).toEqual({...initialForm, name :'Guido Perman'})
    })

    test('should re-establish the form with reset', () => {
        const { result } = renderHook(()=>useForm(initialForm));
        const [ , handleInputChange, reset ] = result.current;

        act(()=>{
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Guido Perman'
                }
            })

            reset();
        })

        const [ formValues ] = result.current;
        expect( formValues ).toEqual(initialForm);
    })
    


    
    
    
})
