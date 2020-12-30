import React from 'react';

import Aux from '../../hoc/Auxiliar';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Tollbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = ( props ) => (
    <Aux>
        <Toolbar />
        <SideDrawer/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;