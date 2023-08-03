import { styled } from "styled-components";

export const OrderCompleteWrapper = styled.div`
    max-width: 74rem;
    display: flex;
    align-items: end;
    gap: 6.375rem;

    margin-top: 5rem;

`

export const HeaderAndOrderInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
    h1 {
        color: ${props => props.theme['yellow-dark']};
        
        font-family: 'Baloo 2';
        font-size: 2rem;
        font-style: normal;
        font-weight: 800;
        line-height: 130%;

        margin-bottom: .25rem;
    }

    p {
        color: ${props => props.theme['base-subtitle']};

        font-family: 'Roboto';
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;

        margin-bottom: 2.5rem;
    }
    
`

export const OrderInfo = styled.div`

    border: 1px solid ${props => props.theme['purple']};
    border-radius: 6px 36px;

    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > div {
        display: flex;
        gap: .875rem;

    }

    span {
        background-color: red;
        padding: .5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        color: #fff;

        height: 30px;
        width: 30px;

        border-radius: 50%;

    }
    .orderCompleteMapPinSvg {
        background-color: ${props => props.theme['purple']}
    }
    .orderCompleteTimerSvg {
        background-color: ${props => props.theme['yellow']}
    }
    .orderCompleteCurrencyDollarSvg {
        background-color: ${props => props.theme['yellow-dark']}
    }
`

// export const BannerFooterWrapperItem = styled.div<BannerFooterWrapperItemProps>`
//     display: flex;
//     align-items: center;
//     gap: .75rem;
//     span {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         padding: .5rem;
//         border-radius: 50%;

//         background-color: ${props => props.theme[BackItemColors[props.$BackColor]]}
//     }
//     p {
//         font-family: Roboto;
//         font-size: .875rem;
//         font-weight: 400;
//         line-height: 130%;
//         color: ${props => props.theme['base-text']}

//     }

// `