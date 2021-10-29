import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background-color: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-light);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            svg {
                font-size: 1.5rem;
            }
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.hightlight-background {
            background-color: var(--green);
            color: #fff;
        }
    }
`;
