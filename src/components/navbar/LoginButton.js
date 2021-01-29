import React from 'react'
import {Link} from 'react-router-dom'

const LoginButton = ({logged=false}) => {
    return (
        <div>
        {
            logged?<Link to='/logout'>Logout</Link> : <Link to='/login'>Login</Link>
        } 
        </div>
    )
}

export default LoginButton
