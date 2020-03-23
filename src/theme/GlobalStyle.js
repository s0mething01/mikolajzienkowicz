import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }
    * {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        font-size: 1.6rem;
        font-family: 'Raleway', sans-serif;
    }
    #pageWrapper {
        overflow: hidden;
    }
    html {
        font-size: 62.5%;
        @media only screen and (max-width: 1300px) {
            font-size: 57.5%;
        }
        @media only screen and (max-width: 962px) {
            font-size: 55%;
        }

        @media only screen and (max-width: 768px) {
            font-size: 60%;
        }
        @media only screen and (max-width: 500px) {
            font-size: 55%;
        }
        @media only screen and (max-width: 450px) {
            font-size: 48%;
        }
        @media only screen and (max-width: 380px) {
            font-size: 44%;
        }
        @media only screen and (max-width: 340px) {
            font-size: 42%;
        }
    }
    ul {
        list-style: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    button {
        font-family: 'Raleway', sans-serif;
        background-color: transparent;
        border: none;
    }
    label {
        box-sizing: border-box;
    }
    input, textarea {
        font-family: 'Raleway', sans-serif !important; 
        border-radius: 0 !important;
    }
`;

export default GlobalStyle;