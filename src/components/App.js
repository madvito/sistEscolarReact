import React,{useState} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Navbar from './navbar';
import Info from './Info';
import Test from './Test'
import Login from './Login';
import Profile from './Profile';
import DataContext from '../DataContext';
import Logout from './Logout';
import MuestaDatos from './MuestaDatos';
const App = () => {
    const localUser = JSON.parse(localStorage.getItem('testuser')) || {};
    
    const [userData, setUserData] = useState({
        user: localUser.user || '',
        token: localUser.token || '',
        logged: localUser.token?true:false
    })
    

    return(
        <>
        <DataContext.Provider value={{userData,setUserData}}>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/test' component={Test} />
                    <Route path='/info' component={Info} />
                    <Route path='/login' component={Login} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/logout' component={Logout} />
                    <Route path='/mostrar' component={MuestaDatos} />
                </Switch>

            </Router>
        </DataContext.Provider>
        </>
    )
}

export default App;