import React from 'react';

import classes from './Toolbar.module.css'; 
import NavigationItems from '../NavigationItems/NavigationItems'; 
import Logo from '../../Logo/Logo'; 
import Button from '../../../shared/UI/Button/Button';

const Toolbar = (props) => {
    return (
        <header className={classes.Container}>
            <Button buttonClass={classes.SidebarButton} onClick={props.onSidebarOpen}>
                <span className={classes.Line}/>
                <span className={classes.Line}/>
                <span className={classes.Line}/>
            </Button>
            <Logo/>
            <nav className={classes.Min768Block}>
                <NavigationItems toolbar/>
            </nav>
        </header>
    );
};

export default Toolbar; 
