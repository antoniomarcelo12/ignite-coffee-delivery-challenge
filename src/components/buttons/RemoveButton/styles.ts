import { styled } from "styled-components";

export const RemoveButtonWrapper = styled.button`
    display: flex;
    gap: .25rem;

    padding: 8px 14px;
    border: none;
    border-radius: 6px;

    background-color: ${props => props.theme['base-button']};
    transition: background-color .2s;

    cursor: pointer;
    
    span {
        color: ${props => props.theme['base-text']};

        font-family: 'Roboto';
        font-size: .75rem;
        font-style: normal;
        line-height: 160%;
    }

    svg {
        color: ${props => props.theme['purple']};
    }

    &:hover {
        background-color: ${props => props.theme['base-hover']};
    }
`