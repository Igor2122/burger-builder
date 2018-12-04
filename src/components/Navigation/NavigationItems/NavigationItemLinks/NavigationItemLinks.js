import React from 'react';
import classes from './NavigationItemLinks.css';
import { NavLink } from 'react-router-dom';

const navigationItemLinks = (props) => (

        <li className=
            {classes.NavigationItemsLinks}>
            <NavLink to={props.link} 
            exact={props.exact}
            activeClassName={classes.active}>
            {props.children} </NavLink>
        </li>

);

export default navigationItemLinks;
