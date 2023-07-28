import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button, text-area {
        font-size: 1rem;
    }

    body {
        font-family: 'Roboto';
        max-width: 74rem;
        margin: 0 auto;
        overflow-x: hidden;
        padding-bottom: 10rem;
        background-color: #fafafa;


        @media (max-width: 1200px) {
            padding: 0 2rem;
        }
    }

    a {
        text-decoration: none;
    }
`