import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --main-color: #22859C;
        --secondary-color: #EBF1F1;
        --accent-color: #ECF0EF;
        --white-color: #ffffff;
        --header-height: 40px;
    }

    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }


    body {
        margin: 0;
        padding: 0;
        font-size: 14px;
        line-height: 140%;
        background: var(--secondary-color);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
