import React, {useContext} from 'react';
import { UserContext } from './UserContex';
export const HomeScreen = () => {

  const {user, setUser} = useContext(UserContext);
  console.log(user);

  const handleClick = ()=>{
    setUser({});
  }
  return (
  <>
    <h1>HomeScreen</h1>
    <hr/>
    <pre className=''>
      {JSON.stringify(user, null, 3)}
    </pre>

    <button
      className='btn btn-primary'
      onClick={handleClick}
    >
      LogOut
    </button>
  </>
  );
};
