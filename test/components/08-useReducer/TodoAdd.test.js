import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', () => {
    const handleAddTodo = jest.fn();
    
    const wrapper = shallow(
        <TodoAdd
        handleAddTodo={handleAddTodo}
        />
    );


    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar a handleAddTodo', ()=>{
        const fromSubmit = wrapper.find('form').prop('onSubmit');
        fromSubmit({preventDefault(){}});
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    });
   
    test('Debe de llamar a handleAddTodo', ()=>{
        const value = 'Aprender React'
        wrapper.find('input').simulate('change',  
        {
            target: 
                {   
                    value,
                    name: 'descripcion'
                }
        }
        );

        const fromSubmit = wrapper.find('form').prop('onSubmit');
        fromSubmit({preventDefault(){}});

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith(expect.any(Object));
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        expect(wrapper.find('input').prop('value')).toBe('');
    });

  
});
