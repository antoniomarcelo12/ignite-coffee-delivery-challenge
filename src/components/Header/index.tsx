import { HeaderCartIconWrapper, HeaderContentWrapper, HeaderLocationWrapper, HeaderWrapper } from "./styles";
import CoffeeDeliveryLogoImg from '../../assets/CoffeeDeliveryLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { useContext, useEffect, useState } from "react";
import axios from 'axios'; // Importe o pacote geocoder

export function Header() {

    const {totalItemsOnCart} = useContext(CartContext)

    let latitude = 0
    let longitude = 0

    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition( location => {
            latitude = location.coords.latitude
            longitude = location.coords.longitude

            axios.get(`https://api.opencagedata.com/geocode/v1/json?key=aacaa1f039934fb4a2c19d0ea358baf5&q=${latitude}+${longitude}`).then((resp) => {
                setCity(resp.data.results[0].components.city)
                setState(resp.data.results[0].components.state_code)
            })
          },
          (err) => {
            console.log(err)
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
                    {
                        city==='' ? <p>User denied Geolocation</p> : <p>{city}, {state}</p>
                    }
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