import { ReactNode, createContext, useState } from "react";

interface PaymentMethodProps {
    children: ReactNode
}

type PAYMENT_METHOD = 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro' | undefined

interface PaymentMethodType {
    paymentMethod: PAYMENT_METHOD;
    selectPaymentMethod: (method: PAYMENT_METHOD) => void;
}



export const PaymentMethodContext = createContext({} as PaymentMethodType)

export function PaymentMethodProvider({ children }: PaymentMethodProps) {

    const [paymentMethod, setPaymentMethod] = useState<PAYMENT_METHOD>(undefined)



    function selectPaymentMethod(method: PAYMENT_METHOD) {
        setPaymentMethod(method)
    }

    return (
        <PaymentMethodContext.Provider value={{paymentMethod, selectPaymentMethod}}>
            { children }
        </PaymentMethodContext.Provider>
    );

}