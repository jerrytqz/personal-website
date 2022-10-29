import React from 'react';
import classes from './Sidebar.module.css'; 

import NavigationItems from '../NavigationItems/NavigationItems'; 
import Backdrop from '../../../shared/UI/Backdrop/Backdrop';
import Button from '../../../shared/UI/Button/Button';

const Sidebar = (props) => (
    <>
        <div className={[classes.Container, props.show ? classes.Show : ''].join(' ')}>
            <header className={classes.Header}>
                <Button buttonClass={classes.SidebarButton} onClick={props.onSidebarClose}>
                    <span className={classes.HamburgerLine}/>
                    <span className={classes.HamburgerLine}/>
                    <span className={classes.HamburgerLine}/>
                </Button>
            </header>
            <hr className={classes.HeaderNavDivider}/>
            <nav className={classes.NavItems}>
                <NavigationItems/>
            </nav>
            <footer className={classes.Footer}><p style={{margin: 0}}>© 2022 JerryTQ</p></footer>
        </div>
        <Backdrop show={props.show} onClick={props.onSidebarClose}/>
    </>
);

export default Sidebar; 
