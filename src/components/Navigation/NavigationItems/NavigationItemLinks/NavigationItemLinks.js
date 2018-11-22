import React from 'react';
import classes from './NavigationItemLinks.css';

const navigationItemLinks = (props) => (

        <li className=
            {classes.NavigationItemsLinks}>
            <a href={props.link} 
            className={props.active ? classes.active : null}>{props.children}</a>
        </li>

);

export default navigationItemLinks;
