import React,{useContext, useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import DataContext from '../DataContext'
const MuestaDatos = () => {
    const {userData}=useContext(DataContext);
    const [result,setResult] = useState([]);
    const {logged,token} = userData;
    useEffect(()=>{
        if (logged){
            fetch('http://localhost:8080/datos',{headers:{token}})
                .then(data => data.json())
                // .then(resp => console.log(resp.data))
                .then(resp => setResult(resp.data))
                .catch(e=>console.log(e))
        }
    },[])

    const handleClick = (res) => {
        alert(`titulo:${res.title} - contenido:${res.content}`);
    }
    return (
        <div>
            {!logged&&<Redirect to='/login' />}
            <h1>Muestra Datos</h1>
            {result.map((res, index)=><div key={index} onClick={()=>handleClick(res)}>{res.title} - {res.content}</div>)}

        </div>
    )
}

export default MuestaDatos
