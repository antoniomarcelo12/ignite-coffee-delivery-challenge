import { styled } from "styled-components";

export const AddressFormStyle = styled.div`

    input {
        padding: .75rem;
        margin: 0;
        border: 0;
        outline: none;
        border-radius: 4px;

        background-color: ${props => props.theme['base-input']};
        color: ${props => props.theme['base-text']};
        
        font-family: 'Roboto';
        font-size: .875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;

    }

    &::placeholder {
        color: ${props => props.theme['base-label']};

    }
`

export const CepRuaWrapper = styled.div`
    display: flex;
    flex-direction: column;


    .cepInput {
        width: 200px;
    }
    
    .ruaInput {
        flex: 1;
        margin-top: 1rem;
    }
`

export const LastInfoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: .765rem;

    position: relative;

    &::after {
        content: 'optional';
        position: absolute;
        top: 25%;
        right: 10px;

        font-style: italic;

        font-family: 'Roboto';
        font-size: .75rem;
        font-weight: 400;
        line-height: 130%;
        color: ${props => props.theme['base-label']};

    }

    .numeroInput {
        width: 40%;
        margin-top: 1rem;
    }

    .complementoInput {
        /* width: 57%; */
        width: calc(60% - .765rem);
        margin-top: 1rem;
    }

    .bairroInput {
        width: 40%;
        margin-top: 1rem;

    }

    .cidadeInput {
        width: 40%;
        margin-top: 1rem;
    }

    .ufInput {
        width: 14%;
        margin-top: 1rem;

    }
`