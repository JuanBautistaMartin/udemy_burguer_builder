import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliar';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    render () {

        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        };

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <Modal show={this.state.pruchasing}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <BuildControls 
                    ingredientAdded={this.addIngredientsHandler} 
                    ingredientRemoved={this.removeIngre3dientHandler}
                    disabled={disabledInfo} 
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    }

    updatePurchasable(ingredients) {
        const sum = 
            Object.keys(ingredients)
                .map(igKey => {
                    return ingredients[igKey];
                })
                .reduce((sum, el) => {
                    return sum + el;
                }, 0);
        this.setState({purchasable: sum > 0});
    }

    addIngredientsHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = this.state.ingredients[type] + 1;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENTS_PRICE[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchasable(updatedIngredients);
    }

    removeIngre3dientHandler = (type) => {
        /* 
         * Filtering if there's 0 elements of an ingredients, don't remove 1 
         * because the total of ingredients will be a negative number, e.g -1, and throws an error 
        */
        if(this.state.ingredients[type]) {
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedIngredients[type] -1;

            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - INGREDIENTS_PRICE[type];

            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            });

            this.updatePurchasable(updatedIngredients);
        }
    }

    purchaseHandler = (props) => {
        this.setState({pruchasing: true});
    }
}

export default BurgerBuilder;