import { useContext } from "react";
import { CoffeeCard } from "../CoffeCard/indext";
import { CoffeeCardWrapper, CoffeeListWrapper } from "./styles";
import { AllProductsContext } from "../../contexts/AllProductsProvider";

export function CoffeeList() {
    const { AllProductsData } = useContext(AllProductsContext)

    return(
        <CoffeeListWrapper>
            <h1>Nossos cafés</h1>
            <CoffeeCardWrapper>
                {
                    AllProductsData.map(coffee => {
                        return <CoffeeCard key={coffee.coffeeName} coffee={{...coffee, coffeeAmount: 0}} />
                    })
                }
            </CoffeeCardWrapper>
        </CoffeeListWrapper>
    );
}