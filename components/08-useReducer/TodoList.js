import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos, handleDelete, handleToggle }) => {
  return (
  <>
   {/* TodoListItem, todo, index, handleDelete, handleToggle */}
    <ul className='list-group list-group-flush'>
          {todos.map( (todo, i)=>(
              
              <TodoListItem 
                key={todo.id}
                todo={todo}
                i={i}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                /> 
          ))}
        </ul>
  </>);
};
