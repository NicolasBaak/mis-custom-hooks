import React, {useEffect} from 'react';

export const Message = () => {

    useEffect(() => {

        const mouseMove = (e)=>{
            console.log(';D');
        }
      window.addEventListener('mousemove', mouseMove);
      
      return () => {
          console.log('Desomponente montado');
          window.removeEventListener('mousemove', mouseMove);
      };
    }, []);
    
  return (
      <>
        <h3>Eres genial!</h3>
      </>
  );
};
