import React from 'react';
import Logo from '../../Logo/Logo';

import classes from './Tollbar.css'

const tollbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <nav>
            ...
        </nav>
    </header>
);

export default tollbar;