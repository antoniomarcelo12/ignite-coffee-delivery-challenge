import { HeaderAndOrderInfoWrapper, OrderCompleteWrapper, Header, OrderInfo } from "./styles";
import { MapPin, Timer, CurrencyDollar  } from "phosphor-react";

import SuccessImg from '../../assets/successPageIllustration.png'
import { useContext } from "react";
import { AddressContext } from "../../contexts/AddressContext";
import { PaymentMethodContext } from "../../contexts/PaymentMethodContext";

export function OrderComplete() {

    const { addressState } = useContext(AddressContext)
    const { paymentMethod } = useContext(PaymentMethodContext)


    return(
        <OrderCompleteWrapper>
                <HeaderAndOrderInfoWrapper>
                    <Header>
                        <h1>Uhu! Pedido confirmado</h1>
                        <p>Agora é só aguardar que logo o café chegará até você</p>
                    </Header>
                    <OrderInfo>
                        <div>
                            <span className="orderCompleteMapPinSvg"><MapPin weight="fill" size={16} /></span>
                            <div>
                                <p>Entrega em <strong>Rua { addressState.rua }, { addressState.numero }</strong></p>
                            <p>{ addressState.bairro} - { addressState.cidade}, { addressState.uf }</p>
                            </div>
                        </div>
                        <div>
                            <span className="orderCompleteTimerSvg"><Timer weight="fill" size={16} /></span>
                            <div>
                                <p>Previsão de entrega</p>
                                <p><strong>20 min - 30 min</strong></p>
                            </div>
                        </div>
                        <div>
                            <span className="orderCompleteCurrencyDollarSvg"><CurrencyDollar weight="fill" size={16} /></span>
                            <div>
                                <p>Pagamento na entrega</p>
                                <p><strong>{ paymentMethod }</strong></p>
                            </div>
                        </div>
                    </OrderInfo>
                </HeaderAndOrderInfoWrapper>

                <img src={SuccessImg} alt="" />
        </OrderCompleteWrapper>
    );
}