import { CardAmountButtonWrapper } from "./styles";

export function AmountButton() {
    return(
        <CardAmountButtonWrapper>
            <button className='decreaseAmountButton'>-</button>
            <span>1</span>
            <button className="increaseAmountButton">+</button>
        </CardAmountButtonWrapper>
    );
}