import { Trash } from "phosphor-react";
import { RemoveButtonWrapper } from "./styles";
import { useContext } from "react";
import { CartContext, CoffeeCartType } from "../../../contexts/CartContext";

interface RemoveButtonProps {
    coffee: CoffeeCartType
}

export function RemoveButton({ coffee }: RemoveButtonProps) {

    const { removeProductFromCart } = useContext(CartContext)

    return(
        <RemoveButtonWrapper className="removeButton" onClick={() => removeProductFromCart(coffee)}>
            <Trash size={16} />
            <span>REMOVER</span>
        </RemoveButtonWrapper>
    );
}