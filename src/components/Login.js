import React,{useContext, useState} from 'react';
import { Redirect } from 'react-router-dom';
import DataContext from '../DataContext';
import ErrorMsj from './ErrorMsj';

const Login = () => {
    const {userData,setUserData} = useContext(DataContext);
    const {logged} = userData; 
    
    //datos rescatados del formulario
    const [inputData, setInputData] = useState({
        inputUser: '',
        inputPassword: ''
    });
    //datos a usar en el fetch
    // const [loginData, setLoginData] = useState({})

    //msj de error
    const [errorMsj, setErrorMsj] = useState('');
 
    //destructuring de los datos del form
    const {inputUser,inputPassword} = inputData;

    //manejo datos form
    const handleInput = (e) => {
        setInputData({...inputData,[e.target.name]:e.target.value})
    }
    
    //seteo de datos para context
    // const handleLogin = (data) =>{
    //     setUserData({
    //         user: inputData.inputUser,
    //         token: data.token,
    //         logged: true
    //     })
    // }

    // const loginAsync = async() => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(inputData)
    //     }
    //     let resp = await fetch('http://localhost:8080/login', requestOptions)
    //     resp = resp.json();
    //     console.log(resp)
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const requestOptions = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user : inputUser,
                password: inputPassword
            })
        }

        fetch('http://localhost:8080/login', requestOptions)
        .then(resp => resp.json())
        .then(data => {
            // response = data;
            console.log(data);
            if (data.token){
                localStorage.setItem('testuser', JSON.stringify({
                    user: inputData.inputUser,
                    token: data.token
                }) )
                setUserData({
                    user: inputData.inputUser,
                    token: data.token,
                    logged: true
                });
            }else{
                setErrorMsj('Datos incorrectos');
            }
        })
        .catch(e=>console.log(e))

        //fix "Unchecked runtime.lastError: The message port closed before a response was received"
        return true
    }

    return(
        <>
            {logged && <Redirect to='/profile'/>}
            <form>
                <h1>LOGIN</h1>
                <input type="text" className="input" name='inputUser' value={inputUser} placeholder="USUARIO" onChange={handleInput}/>
                <input type="text" className="input" name='inputPassword' value={inputPassword} placeholder="PASSWORD" onChange={handleInput}/>
                <button className="btn-primary" onClick={handleSubmit}>LOGIN</button>
                {
                    errorMsj&&<ErrorMsj msj={errorMsj}/>
                }
            </form>
        </>
    )

}

export default Login;