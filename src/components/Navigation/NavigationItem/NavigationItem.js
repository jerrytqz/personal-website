import React from 'react';
import {NavLink} from 'react-router-dom'; 

import classes from './NavigationItem.module.css';

const NavigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink 
            to={props.link}
            end={props.end}
            className={({ isActive }) => isActive ? classes.active : ""}
        >
            {props.children}
        </NavLink>
    </li>
)

export default NavigationItem; 
