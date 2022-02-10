import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

 const [ state, setState] = useState({
     counter1: 10,
     counter2: 20,
     counter3: 20,
     counter4: 20,
     counter5: 20,
 });

 const { counter1, counter2 } = state;
 console.log(counter1);

  return (<>
        <h1>Counter {counter1}</h1>
        <h1>Counter {counter2}</h1>
        <hr/>
        <button 
            className='btn btn-primary'
            onClick={ ()=>{
                setState({
                    ...state,
                    counter1: counter1+1,
                    counter2
                });
            }}
        >
                +1
        </button>
  </>);
};
