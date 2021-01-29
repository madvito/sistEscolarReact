import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import LoginButton from './LoginButton';
import DataContext from '../../DataContext';
import PrivateComponents from './PrivateComponents';

const Navbar = () => {
    const {userData} = useContext(DataContext);
   
    // console.log('datacontext', userData.logged);
    const {logged} = userData;
    return(
        <nav className="navbar">
            <ul>
                <li><Link to='/test'>Test</Link></li>
                <li><Link to='/info'>Info</Link></li>
                {
                    logged&&<PrivateComponents />
                    // logged&&<li><Link to='/profile'>Perfil</Link></li>
                    
                }  
            </ul>
            <LoginButton logged={logged}/>
        </nav>
    )
}

export default Navbar;