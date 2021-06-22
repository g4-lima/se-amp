import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    background: #f9f9f9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    width: 21vw;
    height: 148vh;
`;

export const Level1 = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4vw;
    margin-left: 0.2vw;
    margin-right: 0.1vw;
    margin-top: 1vh;
    cursor: pointer;

    color: #808080;

    .line1 {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 2vh;
    }

    svg {
        margin-right: 0.4vw;
    }
`;

export const Level2 = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2vw;
    text-align: left;
    margin-bottom: 5vh;
    margin-left: 1.5vw;
    cursor: pointer;

    color: #808080;
    background-color: #f9f9f9;

    p {
    }

    svg {
        margin-right: 0.2vw;
    }

    .line2 {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    &:hover {
        color: ${shade(0.5, '#808080')};
    }
`;

export const Level3 = styled.p`
    font-size: 1.1vw;
    line-height: 4vh;
    margin-left: 3.8vw;
    margin-top: -2vh;
    cursor: pointer;
    margin-bottom: 2vh;

    &:hover {
        text-decoration: underline;
    }
`;
