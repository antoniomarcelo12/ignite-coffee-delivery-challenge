import { styled } from "styled-components";

export const CoffeCardWrapper = styled.div`
    height: 310px;
    width: 256px;
    border-radius: 6px 36px 6px 36px;
    background-color: ${props => props.theme['base-card']};
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: -2rem;
        height: 120px;
        width: 120px;
    }

    .CoffeeCardType {
        background-color: ${props => props.theme['yellow-light']};
        color: ${props => props.theme['yellow-dark']};
        margin-top: .75rem;
        padding: 4px 8px;
        border-radius: 100px;
        font-family: Roboto;
        font-size: .625rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        text-transform: uppercase;
    }

    .CoffeeName {
        font-family: 'Baloo 2';
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; 
        color: ${props => props.theme['base-subtitle']};
        margin-top: 1rem;
    }

    .CoffeeDescription {
        font-family: Roboto;
        font-size: .75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        color: ${props => props.theme['base-label']};
        width: 216px;
        text-align: center;
        margin-top: .5rem;
        margin-bottom: 33px;
    }

    .CoffeePrice {
        color: ${props => props.theme['base-text']};

        font-family: 'Baloo 2';
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 800;
        line-height: 130%;
        
        span {
            margin-right: 5px;
            font-family: 'Roboto';
            font-size: 1rem;
            font-style: normal;
            font-weight: 700;
        }

    }

`

export const CoffeDetails = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;

    p {
        margin-right: 1rem;
    }
`

export const CardAmountCart = styled.div`
    display: flex;
    gap: .5rem;
`