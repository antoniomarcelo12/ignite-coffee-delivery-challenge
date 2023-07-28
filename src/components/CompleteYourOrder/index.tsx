import { AddressFormComponent } from "../AddressFormComponent";
import { Cart } from "../Cart";
import { PaymentCartComponent } from "../PaymentCartComponent";
import { AddressWrapper, AdressHeader, CompleteYourOrderCartWrapper, CompleteYourOrderAddressWrapper, CompleteYourOrderWrapper } from "./styles";
import { MapPinLine } from 'phosphor-react'

export function CompleteYourOrder() {
    return(
        <CompleteYourOrderWrapper>
            <CompleteYourOrderAddressWrapper>
                <h1 className="completeYourOrderAddressHeader">Complete seu pedido</h1>
                
                    <AddressWrapper>
                        <AdressHeader>
                            <MapPinLine size={22} />
                                <div>
                                    <h1>Endereço de entrega</h1>
                                    <p>Informe o endereço onde deseja receber seu pedido</p>
                                </div>
                        </AdressHeader>

                        <AddressFormComponent />
                    </AddressWrapper>
                
                <PaymentCartComponent />
                
            </CompleteYourOrderAddressWrapper>

            <CompleteYourOrderCartWrapper>
                <Cart />
            </CompleteYourOrderCartWrapper>

                
        </CompleteYourOrderWrapper>
    );
}