import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Work Sans', sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    li {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
    }
`;
