import { useFetch } from "../../hooks/useFetch"
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en useFetch', () => {
    test('should return information', () => {
        const { result } = renderHook(()=>useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        const {data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);

    })

    test('should have info, loading in false', async () => {
        const { result, waitForNextUpdate } = renderHook(()=>useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        await waitForNextUpdate({timeout: 5000});

        const { data, loading, error } = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);

    })

    test('should manage the error', async() => {
        // https://reqres.in/api/users?page=2

        const { result, waitForNextUpdate } = renderHook(()=>useFetch('https://reqres.in/apid/users?page=2'));
        await waitForNextUpdate({timeout: 5000});

        const {data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la informacion');
    })
    
    
    
    
})
