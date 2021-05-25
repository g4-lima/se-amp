import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    bottom: 2vh;
    right: 5.5vw;

    .whats-button {
        background: rgba(0, 166, 47, 0.8);
        color: #f9f9f9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        cursor: pointer;
        width: 9vw;
        height: 5vh;
        padding: 1vh;

        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 1vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        .icon {
            width: 2vw;
        }

        &:hover {
            background: rgba(0, 166, 47, 0.9);
        }
    }
`;
