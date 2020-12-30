import React from 'react';
import Aux from '../../../hoc/Auxiliar';
import Button from '../../../components/UI/Button/Button';

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
            <p>
                <strong>
                    Total Price: {props.price.toFixed(2)}
                </strong>
            </p>
            <p>Continue to CheckOut?</p>
            <Button 
                buttonType="Danger"
                clicked={props.purchasedCanceled}>CANCEL</Button>
            <Button 
                buttonType="Success"
                clicked={props.pruchaseContinue}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;