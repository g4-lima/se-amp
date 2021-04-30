import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border:0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #E8E8E8;
        --webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
    }
`;
