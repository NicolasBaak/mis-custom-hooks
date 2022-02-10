import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inpuRef = useRef();
    console.log(inpuRef);
    const handleClick = ()=>{
        inpuRef.current.select();
    }

  return (
  <>
    <h1>Focus Screen</h1>
    <hr/>

    <input
        ref={inpuRef}
        className='form-control'
        placeholder='Su nombre'
    />

    <button 
        className='btn btn-outline-primary mt-5'
        onClick={handleClick}
    >
        Focus
    </button>

  </>);
};
