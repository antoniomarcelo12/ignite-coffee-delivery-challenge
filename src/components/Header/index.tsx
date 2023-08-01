import { HeaderCartIconWrapper, HeaderContentWrapper, HeaderLocationWrapper, HeaderWrapper } from "./styles";
import CoffeeDeliveryLogoImg from '../../assets/CoffeeDeliveryLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { useContext, useEffect } from "react";

export function Header() {

    const {totalItemsOnCart} = useContext(CartContext)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition( location => {
            console.log(location);
          });
    }, [])

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
                        {
                        totalItemsOnCart > 0 ? <p>{ totalItemsOnCart }</p> : null
                        }
                    </Link>
                </HeaderCartIconWrapper>
            </HeaderContentWrapper>
        </HeaderWrapper>
    );
}