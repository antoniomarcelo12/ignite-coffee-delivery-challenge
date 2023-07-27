import { HeaderCartIconWrapper, HeaderContentWrapper, HeaderLocationWrapper, HeaderWrapper } from "./styles";
import CoffeeDeliveryLogoImg from '../../assets/CoffeeDeliveryLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
    return(
        <HeaderWrapper>
            <img src={CoffeeDeliveryLogoImg} alt="" />

            <HeaderContentWrapper>
                <HeaderLocationWrapper>
                    <MapPin width={22} weight="fill" />
                    <p>Porto Alegre, RS</p>
                </HeaderLocationWrapper>

                <HeaderCartIconWrapper>
                    <ShoppingCart width={22} weight="fill" />
                </HeaderCartIconWrapper>
            </HeaderContentWrapper>
        </HeaderWrapper>
    );
}