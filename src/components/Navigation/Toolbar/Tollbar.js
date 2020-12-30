import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './Tollbar.css'

const tollbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <NavigationItems />
    </header>
);

export default tollbar;