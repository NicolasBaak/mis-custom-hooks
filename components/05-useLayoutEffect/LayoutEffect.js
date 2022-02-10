import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);
    
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

    const { data } = useFetch( url );

    const { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
      console.log( pTag.current.getBoundingClientRect() );
    }, [quote]);
    
    return (
    <>
        <h1>Layout Effect!</h1>
        <hr/>
           
        <blockquote className='blockquote text-end'>
            <p 
                className='mb-5'
                ref={pTag}
            > 
                {quote} 
            </p>

        </blockquote>
            

        <div className='text-end'>
            <button 
                className='btn btn-primary mt-2 '
                onClick={increment}
        >
                Siguiente Frase
            </button>
        </div>
    </>
    );
};
