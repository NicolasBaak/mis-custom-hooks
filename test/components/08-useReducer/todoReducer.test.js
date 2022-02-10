import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => {
    
    test('Debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {}); 
        expect(state).toBe(demoTodos);
    });
    
    //Debe de agregar un nuevo estado
    test('Debe de agregar un TODO', () => {
        const action = {
            type: 'add',
            payload: {
                id: 3,
                desc: 'Aprender Node',
                done: false
            }
        }

        const state = todoReducer(demoTodos, action); 
        expect(state).toEqual([...demoTodos, action.payload]);

        expect(state.length).toBe(3);
    });

    test('Debe de borrar un todo', () => {
      const action = {
          type: 'delete',
          payload: 1
      };

      const state = todoReducer(demoTodos, action);
      expect(state.length).toBe(1);
      expect( state ).toEqual( [ demoTodos[1] ]);
    });
    
    test('Debe de hacer el toggle del todo', () => {
        const action = {
          type: 'toggle',
          payload: 1
        };

      const state = todoReducer(demoTodos, action);

        expect(state[0].done).toBe(true);;
        expect( state[1] ).toEqual(demoTodos[1]);
    });
    
});
