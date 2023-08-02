import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
    padding: 2rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const HeaderContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;

    `

export const HeaderLocationWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};

    padding: .5rem;
    border-radius: 6px;

    svg {
        color: #8047F8;
    }
`

export const HeaderCartIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme['yellow-light']};
    
    border-radius: 6px;

    position: relative;
    
    a {
        padding: .5rem;
    }

    svg {
        color: ${props => props.theme['yellow-dark']};
    }

    p {
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: ${props => props.theme['yellow-dark']};
        color: ${props => props.theme['white']};
        padding: .5rem;
        border-radius: 100%;
        height: 20px;
        width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;

        font-family: 'Roboto';
        font-size: .875rem;
        
        line-height: 130%;


    }
`