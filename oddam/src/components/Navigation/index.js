import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
    </AuthUserContext.Consumer>
);
const NavigationAuth = () => (
    <ul className={"nav"}>
        <li>

        </li>
        <li>

        </li>
        <li>

        </li>
        <li>

        </li>
        <li>
            <SignOutButton />
        </li>
    </ul>
);
const NavigationNonAuth = () => (
    <ul className={"nav"}>
       <li>
           <link to={ROUTES.SIGN_UP}>Zaloguj</link>
       </li>
        <li>
            <Link to={ROUTES.SIGN_IN}>Załóż konto</Link>
        </li>
    </ul>
);

export default Navigation;