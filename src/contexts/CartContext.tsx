import { ReactNode, createContext, useEffect, useState } from "react";

interface CartContextProviderProps {
    children: ReactNode
}

export interface CoffeeCartType {
    coffeeName: string;
    coffeeDescription: string;
    coffeePrice: number;
    coffeeImage: string;
    coffeeTypes: string[];
    coffeeAmount: number;
}

interface CartContextType {
    cartState: CoffeeCartType[];
    addItemToCart: (coffeeToAdd: CoffeeCartType) => void;
    removeItemFromCart: (coffeeToRemove: CoffeeCartType) => void;
    removeProductFromCart: (ProductToRemove: CoffeeCartType) => void;
    totalItemsOnCart: number;
    totalPrice: number;
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {

    const [cartState, setCartState] = useState<CoffeeCartType[]>([])
    let totalItemsOnCart = 0
    let totalPrice = 0

    
    function addItemToCart(itemToAdd: CoffeeCartType) {
        const updatedCart = [...cartState]
        
        const indexOfItemInCart = cartState.findIndex((item) => item.coffeeName === itemToAdd.coffeeName)
        
        
        if(indexOfItemInCart !== -1) {
            updatedCart[indexOfItemInCart] = {
                ...cartState[indexOfItemInCart], coffeeAmount: updatedCart[indexOfItemInCart].coffeeAmount + 1
            }
        } else {
            updatedCart.push({...itemToAdd, coffeeAmount: 1})
        }
        
        setCartState(updatedCart)

    }

    function removeItemFromCart(itemToRemove: CoffeeCartType) {
        const updatedCart = [...cartState]
        const indexOfItemInCart = cartState.findIndex((item) => item.coffeeName === itemToRemove.coffeeName)

        if(indexOfItemInCart !== -1) {

            if(updatedCart[indexOfItemInCart].coffeeAmount > 1) {
                updatedCart[indexOfItemInCart] = {
                    ...cartState[indexOfItemInCart], coffeeAmount: updatedCart[indexOfItemInCart].coffeeAmount - 1
                }
            } else {
                updatedCart.splice(indexOfItemInCart, 1)
            }

        }

        setCartState(updatedCart)
    }

    function removeProductFromCart(productToRemove: CoffeeCartType) {
        const updatedCart = [...cartState]
        const indexOfItemInCart = cartState.findIndex((item) => item.coffeeName === productToRemove.coffeeName)


        updatedCart.splice(indexOfItemInCart, 1)

        setCartState(updatedCart)
    }
    
    cartState.forEach(el => {
        totalItemsOnCart += el.coffeeAmount
        totalPrice += (el.coffeePrice * el.coffeeAmount)
        totalPrice = +totalPrice.toFixed(2)
    })

    console.log("cartState", cartState)

    return(
        <CartContext.Provider value={{cartState, addItemToCart, removeItemFromCart, totalItemsOnCart, totalPrice, removeProductFromCart}}>
            { children }
        </CartContext.Provider>
    );
}