import styled from "styled-components";

export const Container = styled.form`
    h2 {
        color: var(--text-light);
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;

        background-color: #e7e9ee;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;
        transition: filter 200ms ease-in-out;

        &:hover,
        &:focus {
            filter: brightness(0.9);
        }
    }
`;
