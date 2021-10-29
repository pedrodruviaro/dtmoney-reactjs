import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #2ecc71;
        
        --blue-light: #6933ff;
        
        --text-light: #363f5f;
        --text-body: #969cb3;
        
        --background: #f0f2f5;
        --shape: #ffffff;
    }

    * {
        font-family: 'Poppins', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%; // ~ 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; // ~ 14px
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled]{
        opacity: .6;
        cursor: not-allowed;
    }
`;
