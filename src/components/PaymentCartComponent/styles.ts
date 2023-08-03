import { styled } from "styled-components";

export const PaymentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;

    background-color: ${props => props.theme['base-card']};
`

export const PaymentHeader = styled.div`
    display: flex;
    gap: .5rem;

    svg {
        color: ${props => props.theme['purple']};
    }

    h1 {
        color: ${props => props.theme['base-subtitle']};

        margin-bottom: 2px;

        font-family: 'Roboto';
        font-size: 1rem;
        font-weight: 400;
    }

    p {
        color: ${props => props.theme['base-text']};

        font-family: 'Roboto';
        font-size: .875rem;
        font-weight: 400;
        line-height: 130%;
    }

`
export const PaymentButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    gap: .75rem;

    .active {
        background-color: ${props => props.theme['purple-light']};
        border: 1px solid ${props => props.theme['purple']};
    }

    button {
        background-color: ${props => props.theme['base-button']};
        color: ${props => props.theme['base-text']};
        border: none;
        padding: 1rem;

        font-family: 'Roboto';
        font-size: .75rem;
        font-weight: 400;
        line-height: 160%;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: .75rem;

        border-radius: 6px;
    }

    @media (max-width: 750px) {
        flex-direction: column;
    }
`