import React from 'react';

import Aux from '../../hoc/Auxiliar';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Tollbar';

const Layout = ( props ) => (
    <Aux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;