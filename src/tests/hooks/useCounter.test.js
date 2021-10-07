import { useCounter } from "../../hooks/useCounter"
import { renderHook, act } from '@testing-library/react-hooks';

describe('test en useCounter', ()=>{
    test('debe retornar valores por defecto', ()=>{
        const { result } = renderHook(()=>useCounter());

        expect(result.current.counter).toEqual(10);
        expect(typeof result.current.increment).toEqual('function');
        expect(typeof result.current.decrement).toEqual('function');
        expect(typeof result.current.reset).toEqual('function');
    });

    test('debe tener el counter en 100', ()=>{
        const { result } = renderHook(()=>useCounter(100));

        expect(result.current.counter).toEqual(100);
        
    })

    test('should increment the counter in 1', () => {
        const { result } = renderHook(()=>useCounter(100));
        const { increment } = result.current;
        act(()=>{
            increment();
        })

        const {counter}= result.current;
        expect(counter).toEqual(101)
    })

    test('should decrement', () => {
        const { result } = renderHook(()=>useCounter(100));
        const { decrement } = result.current;

        act(()=>{
            decrement();
        })

        const {counter}= result.current;
        expect(counter).toBe(99);
    })

    test('should reset', () => {
        const { result } = renderHook(()=>useCounter(100));
        const { decrement, reset } = result.current;

        act(()=>{
            decrement();
            reset();
        })

        const { counter } = result.current;
        expect(counter).toEqual(100);

    })
    
    
    



})