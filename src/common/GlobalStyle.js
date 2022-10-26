import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body {
        width: 100vw;
        height: 100vh;
    }

    a {
        color: black;
        text-decoration: none;
    }
`;

export default GlobalStyle;
