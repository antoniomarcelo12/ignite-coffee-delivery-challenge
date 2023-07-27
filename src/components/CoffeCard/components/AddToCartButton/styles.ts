import { styled } from "styled-components";

export const CartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    background-color: ${props => props.theme['purple-dark']};
    border: none;
    border-radius: 6px;
    outline: none;

    &:hover {
        background-color: ${props => props.theme['purple']};

        transition: background-color .2s; 
    }
`