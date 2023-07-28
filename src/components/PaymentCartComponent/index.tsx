import { PaymentButtons, PaymentHeader, PaymentWrapper } from "./styles";
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'

export function PaymentCartComponent() {
    return(
        <PaymentWrapper className="paymentWrapperClass">
            <PaymentHeader>
                <CurrencyDollar size={22} />
                <div>
                    <h1>Pagamento</h1>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
            </PaymentHeader>
            <PaymentButtons>
                <button><CreditCard />CARTÃO DE CRÉDITO</button>
                <button><Bank />CARTÃO DE DÉBITO</button>
                <button><Money />DINHEIRO</button>
            </PaymentButtons>
        </PaymentWrapper>
    );
}