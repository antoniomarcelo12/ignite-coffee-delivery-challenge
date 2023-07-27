import { CartButton } from './styles';
import { ShoppingCart } from 'phosphor-react'

export function AddToCartButton() {
    return(
        <CartButton>
            <ShoppingCart weight='fill' color='#fff' size={22} />
        </CartButton>
    );
}