import React from 'react';
import classes from './HamButton.css';

const button = (props) => (
    <button 
        className={classes.ButtonReset}
        onClick={props.showToolbar}>{props.children}
    </button>
);


export default button;