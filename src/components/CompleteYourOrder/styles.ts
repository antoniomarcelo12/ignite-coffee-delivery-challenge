import { styled } from "styled-components";

export const CompleteYourOrderWrapper = styled.form`//
    display: flex;
    gap: 2rem;
`

export const CompleteYourOrderAddressWrapper = styled.div`//
    margin-top: 2.5rem; 
    width: 50%; 

    display: flex;
    flex-direction: column;
    
    .paymentWrapperClass {
        margin-top: .75rem;
    }

    .completeYourOrderAddressHeader {
        color: ${props => props.theme['base-subtitle']};
        
        margin-bottom: 1rem;
        
        font-family: 'Baloo 2';
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 130%; 
     }
    
`

export const AddressWrapper = styled.div`//
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    border-radius: 6px;
    min-width: 270px;
    
    
    background-color: ${props => props.theme['basecard']};
    
    
    padding: 2.5rem;
`

export const AdressHeader = styled.div`//
    display: flex;
    gap: .5rem;
    
    svg {
        color: ${props => props.theme['yellow-dark']};
        
    }
    
    h1 {
        color: ${props => props.theme['base-subtitle']};

        font-family: 'Roboto';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }
    
    p {
        color: ${props => props.theme['base-text']};
        
        font-family: 'Roboto';
        font-size: .875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }
`

export const CompleteYourOrderCartWrapper = styled.div`//
    display: flex;
     flex-wrap: wrap; 
     gap: 2rem; 

`

export const RandomButton = styled.button`
    
`