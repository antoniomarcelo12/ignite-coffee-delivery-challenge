import { useContext } from "react";
import { PaymentButtons, PaymentHeader, PaymentWrapper } from "./styles";
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { PaymentMethodContext } from "../../contexts/PaymentMethodContext";

export function PaymentCartComponent() {

    const {selectPaymentMethod} = useContext(PaymentMethodContext)

    function selectCredit() {
        document.getElementById('credit')?.classList.add('active')
        document.getElementById('debit')?.classList.remove('active')
        document.getElementById('money')?.classList.remove('active')

        selectPaymentMethod('Cartão de crédito')
    }

    function selectDebit() {
        document.getElementById('debit')?.classList.add('active')
        document.getElementById('credit')?.classList.remove('active')
        document.getElementById('money')?.classList.remove('active')

        selectPaymentMethod('Cartão de débito')
    }

    function selectMoney() {
        document.getElementById('money')?.classList.add('active')
        document.getElementById('credit')?.classList.remove('active')
        document.getElementById('debit')?.classList.remove('active')

        selectPaymentMethod('Dinheiro')
    }

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
                <button type="button" id='credit' onClick={selectCredit}><CreditCard />CARTÃO DE CRÉDITO</button>
                <button type="button" id='debit' onClick={selectDebit}><Bank />CARTÃO DE DÉBITO</button>
                <button type="button" id='money' onClick={selectMoney}><Money />DINHEIRO</button>
            </PaymentButtons>
        </PaymentWrapper>
    );
}