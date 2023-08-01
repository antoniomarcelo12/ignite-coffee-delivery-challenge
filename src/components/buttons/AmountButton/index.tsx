import { useContext } from "react";
import { ProductType } from "../../../contexts/AllProductsProvider";
import { CardAmountButtonWrapper } from "./styles";
import { Minus, Plus } from 'phosphor-react'
import { CartContext, CoffeeCartType } from "../../../contexts/CartContext";

interface AmountButtonProps {
    coffee: CoffeeCartType;
}

export function AmountButton({ coffee }: AmountButtonProps) {
    let localCoffeeAmount = 0

    const { cartState, addItemToCart, removeItemFromCart } = useContext(CartContext)
    

    cartState.forEach(el => {
        if(el.coffeeName === coffee.coffeeName) {
            localCoffeeAmount = el.coffeeAmount
        }
    })

    return(
        <CardAmountButtonWrapper>
            <button className='decreaseAmountButton' onClick={() => removeItemFromCart(coffee)}><Minus /></button>
            <span>{ localCoffeeAmount }</span>
            <button className="increaseAmountButton" onClick={() => addItemToCart(coffee)}><Plus /></button>
        </CardAmountButtonWrapper>
    );
}