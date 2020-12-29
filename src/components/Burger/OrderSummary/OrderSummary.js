import React from 'react';
import Aux from '../../../hoc/Auxiliar';

const orderSummary = (props) => {
    const ingredientsSummary = 
        Object.keys(props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>
                            {igKey}: {props.ingredients[igKey]}
                        </span>
                    </li>
                )
            });

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to CheckOut?</p>
        </Aux>
    );
};

export default orderSummary;