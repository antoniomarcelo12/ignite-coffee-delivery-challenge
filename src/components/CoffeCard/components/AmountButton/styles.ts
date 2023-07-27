import { styled } from "styled-components";

export const CardAmountButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    border-radius: 6px;

    color: ${props => props.theme['base-title']};
    background-color: ${props => props.theme['base-button']};
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    padding: .5rem;

    button {
        border: 0;
        background-color: ${props => props.theme['base-button']};
        color: ${props => props.theme['purple']};
        width: 14px;
    }

    .decreaseAmountButton:hover,
    .increaseAmountButton:hover {
        color: ${props => props.theme['purple-dark']};
    }

    span {
        margin: 0 4px;
    }

`