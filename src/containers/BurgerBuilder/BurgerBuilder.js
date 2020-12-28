import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliar';
import Burger from '../../components/Burguer/Burger';

class BurguerBuilder extends Component {
    render () {
        return (
            <Aux>
                <Burger />
                <div>Builder Controls</div>
            </Aux>
        );
    }
}

export default BurguerBuilder;