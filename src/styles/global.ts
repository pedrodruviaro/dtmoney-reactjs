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

    /* MODAL */
    .react-modal-overlay{
        background-color: rgba(0,0,0, .5);
        position: fixed;
        inset: 0 0 0 0;
        display: grid;
        place-items: center;
    }


    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background-color: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: .25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: none;
        background-color: transparent;
        display: grid;
        place-items: center;
        font-size: 1.15rem;
        transition: filter 200ms ease-in-out;

        &:hover,
        &:focus {
            filter: brightness(0.9);
        }
    }

`;
