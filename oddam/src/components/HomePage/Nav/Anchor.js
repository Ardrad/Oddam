import React from 'react';
import {Link} from "react-scroll"

const Anchor = (props) => {

    return <Link to={props.whereTo} activeClass="active" spy={true} smooth={true} duration={500}><li className='nav-list-element'>{props.typed}</li></Link>
}

export default Anchor