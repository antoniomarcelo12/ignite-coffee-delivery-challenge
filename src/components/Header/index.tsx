import { HeaderCartIconWrapper, HeaderContentWrapper, HeaderLocationWrapper, HeaderWrapper } from "./styles";
import CoffeeDeliveryLogoImg from '../../assets/CoffeeDeliveryLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from "react-router-dom";

export function Header() {
    return(
        <HeaderWrapper>
            <Link to='/'>
                <img src={CoffeeDeliveryLogoImg} alt="" />
            </Link>

            <HeaderContentWrapper>
                <HeaderLocationWrapper>
                    <MapPin width={22} weight="fill" />
                    <p>Porto Alegre, RS</p>
                </HeaderLocationWrapper>

                <HeaderCartIconWrapper>
                    <Link to='/cart'>
                        <ShoppingCart width={22} weight="fill" />
                    </Link>
                </HeaderCartIconWrapper>
            </HeaderContentWrapper>
        </HeaderWrapper>
    );
}