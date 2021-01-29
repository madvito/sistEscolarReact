import React from 'react'
import {Link} from 'react-router-dom'

const PrivateComponents = () => {
    return (
        <>
            <li><Link to='/profile'>Perfil</Link></li>
            <li><Link to='/mostrar'>Mostrar</Link></li>
        </>
    )
}

export default PrivateComponents
