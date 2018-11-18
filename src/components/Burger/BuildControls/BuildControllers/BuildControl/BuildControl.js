import React from 'react';
import classes from 'BuidControl.css';

const buildControl = (props) => {
    <div className={classes.BuidControl}> 
        <div className={classes.label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
}


export default buildControl;