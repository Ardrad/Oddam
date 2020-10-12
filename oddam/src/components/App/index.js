import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "../../components/HomePage/home";

import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';


import * as ROUTES from '../constants/routes';
import { withAuthentication } from '../Session';
import SignOutButton from "../SignOut";
import Navigation from "../Navigation";

const App = () => (

    <Router>

        <div>
            <Route exact path='/' component={Home}/>
            <Route exact path='/rejestracja' component={SignUpPage}/>
            <Route exact path='/logowanie' component={SignInPage}/>
            {/*<Route exact path='/wylogowano' component={SignOutButton()}/>*/}
            {/*<Route exact path='/oddaj-rzeczy' component={GivePage}/>*/}

        </div>

    </Router>

);

export default withAuthentication(App);