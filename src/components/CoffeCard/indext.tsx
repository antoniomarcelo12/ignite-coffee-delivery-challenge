import { CoffeDetails, CoffeCardWrapper, CardAmountCart } from "./styles";
import CoffeeSampleImage from '../../assets/CoffeeSampleImage.png'
import { AmountButton } from "../buttons/AmountButton";
import { AddToCartButton } from "./components/AddToCartButton";

export function CoffeeCard() {
    return(
        <CoffeCardWrapper>
            <img src={CoffeeSampleImage} alt="" />
            <p className="CoffeeCardType">Tradicional</p>
            <p className="CoffeeName">Expresso Tradicional</p>
            <p className="CoffeeDescription">O tradicional café feito com água quente e grãos moídos</p>
            <CoffeDetails>
                <p className="CoffeePrice"><span>R$</span>9,90</p>
                <CardAmountCart>
                    <AmountButton />
                    <AddToCartButton />
                </CardAmountCart>
            </CoffeDetails>
        </CoffeCardWrapper>
    );
}