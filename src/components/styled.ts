import styled from "styled-components";

export const StyledStartButton = styled.button`
    display: flex;
    align-items: center;
    font-size: 2rem;
    border: none;
    border-radius: 8px;
    padding: 0.3rem 1rem;
    background: #073a5d;
    color: #FFF;
    box-shadow: -1px 5px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
    margin-top: 1rem;

    &:hover {
        cursor: pointer;
        transform: translateY(-1px);
        background: #0b4973;
    }
`