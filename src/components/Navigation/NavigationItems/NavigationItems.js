import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItemLinks/NavigationItemLinks';

const navigationItems = (props) => (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>
                Burger Builder 
            </NavigationItem>
            
            <NavigationItem link="/">
                Burger Builder 
            </NavigationItem>
        </ul>
    );
    
export default navigationItems;