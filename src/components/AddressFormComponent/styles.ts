import { styled } from "styled-components";

export const AddressForm = styled.form`

    input {
        padding: .75rem;
        margin: 0;
        border: 0;
        outline: none;
        border-radius: 4px;

        background-color: ${props => props.theme['base-input']};
        color: ${props => props.theme['base-text']};
        
        font-family: Roboto;
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