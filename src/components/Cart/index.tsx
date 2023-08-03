import { CartAndTitleWrapper, CartItemAmountRemoveButton, CartItemInfoWrapper, CartItemWrapper, CartSummary, CartWrapper, ConfirmOrderButton } from "./styles";
import { AmountButton } from "../buttons/AmountButton";
import { RemoveButton } from "../buttons/RemoveButton";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {

    const { cartState, totalPrice, totalPriceString } = useContext(CartContext)

    return(
        <CartAndTitleWrapper>
            <h1 className="completeYourOrderCartHeader">Cafés selecionados</h1>

            <CartWrapper>
                    

                    {
                        cartState.length > 0 ? (
                                            cartState.map(item => {
                                                return(
                                                <CartItemWrapper key={item.coffeeName}>

                                                    <img className="cartItemImage" src={item.coffeeImage} alt="" />

                                                    <CartItemInfoWrapper>
                                                        <h3>{item.coffeeName}</h3>
                                                        
                                                        <CartItemAmountRemoveButton>
                                                            <AmountButton coffee={item}/>
                                                            <RemoveButton coffee={item} />
                                                        </CartItemAmountRemoveButton>
                                                        
                                                    </CartItemInfoWrapper>
                                
                                                    <div className="cartItemPrice">
                                                        <span>R$ {item.coffeePrice}</span>
                                                    </div>
                                
                                                </CartItemWrapper>
                                                );
                                            })
                                                ) : (
                                                        <CartItemWrapper>

                                                            <img className="cartItemImageNone" src='' alt="" />

                                                            <CartItemInfoWrapper>
                                                                <h3>Selecione algum produto!</h3>
                                                                
                                                            </CartItemInfoWrapper>
                                        
                                                        </CartItemWrapper>
                                        )}



                {
                        cartState.length > 0 ? (
                                    <>
                                        <CartSummary>
                                            <div><p>Total de itens</p><p>R$ { totalPriceString }</p></div>
                                            <div><p>Entrega</p><p>R$ 3,50</p></div>
                                            <div className="summaryTotal"><p>Total</p><p>R$ { totalPriceString }</p></div>
                                        </CartSummary>

                                            <ConfirmOrderButton type="submit">
                                                        Confirmar pedido
                                            </ConfirmOrderButton>
                                    </>

                        ) : (
                            <>
                                <CartSummary>
                                    <div><p>Total de itens</p><p>R$ { totalPrice }</p></div>
                                    <div><p>Entrega</p><p>R$ 0,00</p></div>
                                    <div className="summaryTotal"><p>Total</p><p>R$ {totalPrice}</p></div>
                                </CartSummary>

                                <ConfirmOrderButton disabled={true}>
                                    Confirmar pedido
                                </ConfirmOrderButton>
                            </>
                        )

                }                                                    

            </CartWrapper>
        </CartAndTitleWrapper>
    );
}