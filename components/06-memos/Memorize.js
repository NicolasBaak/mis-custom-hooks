import React, {useState} from 'react';
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
;

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

  return (
  <>
    <h1>Memorize: <Small value={counter} /></h1>
    <hr/>

 
    <div className='d-grid gap-3'>

        <button
            className='btn btn-primary '
            onClick={increment}
        >
            +1
        </button>


        <button
            className='btn btn-primary'
            onClick={()=>{setShow(!show)}}
        >
            Show/Hide { JSON.stringify(show)}
        </button>
    </div>

   
  </>);
};
