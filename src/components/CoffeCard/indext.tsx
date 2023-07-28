import { CoffeDetails, CoffeCardWrapper, CardAmountCart } from "./styles";
import { AmountButton } from "../buttons/AmountButton";
import { AddToCartButton } from "./components/AddToCartButton";
import { ProductType } from "../../contexts/AllProductsProvider";

interface CoffeeCardProps {
    coffee: ProductType
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
    return(
        <CoffeCardWrapper>
            <img src={coffee.coffeeImage} alt="" />
            <div className="CoffeeCardType">
                {
                    coffee.coffeeTypes.map(type => <p key={type}>{type}</p>)
                }
            </div>
            <p className="CoffeeName">{coffee.coffeeName}</p>
            <p className="CoffeeDescription">{coffee.coffeeDescription}</p>
            <CoffeDetails>
                <p className="CoffeePrice"><span>R$</span>{coffee.coffeePrice}</p>
                <CardAmountCart>
                    <AmountButton />
                    <AddToCartButton />
                </CardAmountCart>
            </CoffeDetails>
        </CoffeCardWrapper>
    );
}