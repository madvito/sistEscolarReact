import React, {useContext, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import DataContext from '../DataContext';

const Logout = () => {
    const {setUserData} = useContext(DataContext);
    
    //intento de fix para Warning: Cannot update a component (`App`) while rendering a different component (`Logout`). To locate the bad setState() call inside `Logout`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
    useEffect(()=>{

        localStorage.removeItem('testuser')
        setUserData({
            user: '',
            token: '',
            logged: false
        });
    },[])

    return (
        
        <Redirect to='/login' />
        
        
    )
}

export default Logout
