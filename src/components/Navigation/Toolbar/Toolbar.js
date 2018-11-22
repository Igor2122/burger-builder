import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamButton from '../../UI/Button/HambButton/HambButton';
import HambrgrIcon from '../../../assets/images/HambrgrIcon.png';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <HamButton showToolbar={props.toggleToolBar}> 
            <img className={classes.HabrgrLogo} src={HambrgrIcon} alt="Show Menu" />
        </HamButton>
        <HamButton />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DispNoneDesctop}>
            <NavigationItems />
        </nav>
    </header>
    );

export default toolbar;