import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [ {descripcion}, handleInputChange, reset ] = useForm({
        descripcion: ''
      });

    const handleSubmit = (e)=>{
        e.preventDefault();

        
      if(descripcion.trim().length<=1){
        return; 
      }

      const newTodo = {
        id: new Date().getTime(),
        desc: descripcion,
        done: false
      }

      handleAddTodo(newTodo)
      reset();
    }
  return (
  <>
     <h4>Agregar TODO</h4>
            <hr/>

            <form onSubmit={ handleSubmit }>
              <input
                type='text'
                className='form-control'
                name='descripcion'
                placeholder='Aprender ...'
                autoComplete='off'
                value={descripcion}
                onChange={handleInputChange}
              />

              <button
                type='submit'
                className='btn btn-outline-primary mt-1 w-100'
              >
                Agregar
              </button>
            </form>
  </>);
};
