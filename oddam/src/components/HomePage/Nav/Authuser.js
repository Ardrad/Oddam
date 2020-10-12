import React, {useContext} from 'react';
import Login from "./Login";
import Register from "./register";
import AuthUserContext from "../../Session/context";
import {Link} from "react-router-dom";
import Hello from "./Hello";

const Authuser = () => {
    const user = useContext(AuthUserContext)
    if(user!==null){
        return    <div className='auth-container'>
            <Hello mail={user.email}/>
            <Login/>
            <Register/>
        </div>
    }
    return (
        <div className='auth-container'>
            <Login/>
            <Register/>
        </div>
    )
}

export default Authuser;