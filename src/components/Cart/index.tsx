import { CartAndTitleWrapper, CartItemAmountRemoveButton, CartItemInfoWrapper, CartItemWrapper, CartSummary, CartWrapper, ConfirmOrder } from "./styles";
import CartItemImage from '../../assets/coffeeSamples/expresso-tradicional.png'
import { AmountButton } from "../buttons/AmountButton";
import { RemoveButton } from "../buttons/RemoveButton";

export function Cart() {
    return(
        <CartAndTitleWrapper>
            <h1 className="completeYourOrderCartHeader">Cafés selecionados</h1>

            <CartWrapper>
                <CartItemWrapper>

                    <img className="cartItemImage" src={CartItemImage} alt="" />
                    
                    <CartItemInfoWrapper>
                        <h3>Expresso Tradicional</h3>
                        
                        <CartItemAmountRemoveButton>
                            <AmountButton />
                            <RemoveButton />
                        </CartItemAmountRemoveButton>
                        
                    </CartItemInfoWrapper>

                    <div className="cartItemPrice">
                        <span>R$ 9,90</span>
                    </div>

                </CartItemWrapper>

                <CartSummary>
                    <div><p>Total de itens</p><p>R$ 29,70</p></div>
                    <div><p>Entrega</p><p>R$ 3,50</p></div>
                    <div className="summaryTotal"><p>Total</p><p>R$ 33,20</p></div>
                </CartSummary>

                <ConfirmOrder>
                    Confirmar pedido
                </ConfirmOrder>

            </CartWrapper>
        </CartAndTitleWrapper>
    );
}