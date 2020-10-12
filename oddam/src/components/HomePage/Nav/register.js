import React, {useContext} from 'react';

import {Link} from "react-router-dom";
import AuthUserContext from "../../Session/context";

const Register = () => {
    const user = useContext(AuthUserContext)
    if(user!==null){
        return   <Link to='/wylogowano' className='auth-button'>Wyloguj</Link>
    }
    return <Link to='/rejestracja' className='auth-button'>Załóż konto</Link>
}

export default Register;