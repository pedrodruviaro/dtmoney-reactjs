import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 200ms ease-in-out;

        &:hover,
        &:focus {
            filter: brightness(0.9);
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--shape);
    padding: 0.25rem;
    font-size: 1.15rem;
    font-weight: 600;

    > div {
        border-radius: 50%;
        background-color: #2ecc71;
        height: 30px;
        aspect-ratio: 1;
        display: grid;
        place-items: center;
        color: var(--shape);
        font-size: 1.75rem;
    }
`;
