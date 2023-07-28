import { styled } from "styled-components";

export const CartAndTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    

    .completeYourOrderCartHeader {
        color: ${props => props.theme['base-subtitle']};
        
        margin-bottom: 1rem;

        font-family: 'Baloo 2';
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 130%;
    }

`

export const CartWrapper = styled.div`
    border-radius: 6px 44px 6px 44px;
    background-color: ${props => props.theme['base-card']};

    padding: 40px;
`

export const CartItemWrapper = styled.div`
    display: flex;
    gap: 1.25rem;

    padding-bottom: 1.5rem;
    border-bottom: 1px ${props => props.theme['base-button']} solid;

    .cartItemImage {
        width: 64px;
        height: 64px;
    }

    .cartItemPrice {
        color: ${props => props.theme['base-text']};
        text-align: right;
        
        font-family: 'Roboto';
        font-size: 1rem;
        font-weight: 700;
        line-height: 130%;
    }

    &:not(:first-child) {
        padding-top: 1.5rem;
    }

`

export const CartItemInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    h3 {
        color: ${props => props.theme['base-subtitle']};
        
        font-family: 'Roboto';
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%;
    }
    
`

export const CartItemAmountRemoveButton = styled.div`
    display: flex;
    gap: .5rem;
`

export const CartSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
    margin-top: 2rem;

    color: ${props => props.theme['base-text']};
    
    font-family: 'Roboto';
    font-size: .875rem;
    font-weight: 400;
    line-height: 130%;

    div {
        display: flex;
        justify-content: space-between;
    }

    .summaryTotal {
        color: ${props => props.theme['base-subtitle']};

        font-family: 'Roboto';
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 130%;
    }
`

export const ConfirmOrder = styled.button`
    width: 100%;
    
    border: none;
    border-radius: 6px;
    margin-top: 2rem;

    cursor: pointer;

    padding: .75rem .5rem;
    background-color: ${props => props.theme['yellow']};
    color: ${props => props.theme['white']};

    transition: background-color .2s;

    font-family: 'Roboto';
    font-size: .875rem;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;

    &:hover {
        background-color: ${props => props.theme['yellow-dark']}
    }
`