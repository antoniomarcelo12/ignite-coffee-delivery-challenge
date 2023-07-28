import { CardAmountButtonWrapper } from "./styles";
import { Minus, Plus } from 'phosphor-react'

export function AmountButton() {
    return(
        <CardAmountButtonWrapper>
            <button className='decreaseAmountButton'><Minus /></button>
            <span>1</span>
            <button className="increaseAmountButton"><Plus /></button>
        </CardAmountButtonWrapper>
    );
}