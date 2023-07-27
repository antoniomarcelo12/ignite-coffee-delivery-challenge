import { styled } from "styled-components";

export const CoffeeListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    max-width: 1440px;

    margin-top: 7rem;

    h1 {
        color: ${props => props.theme['base-subtitle']};
        font-family: 'Baloo 2';
        font-size: 32px;
        font-style: normal;
        font-weight: 800;
        line-height: 130%;
    }
`

export const CoffeeCardWrapper = styled.div`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
`