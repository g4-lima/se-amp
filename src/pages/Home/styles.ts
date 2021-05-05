import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const BackgroundImage = styled.div`
    position: relative;

    img {
        width: 98.9vw;
        height: 100vh;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

export const TextBox = styled.div`
    position: absolute;

    width: 48vw;
    height: 40vh;
    background: rgba(249, 249, 249, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    border-radius: 4px;

    top: 40vh;
    right: 6vw;
`;

export const Text1 = styled.h1`
    font-size: 2.4vw;
    font-weight: 500;
    line-height: 6.8vh;
    text-align: right;
    padding: 4.8vh 4.4vw;

    color: #3e3e3e;
`;

export const Text2 = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6vw;
    /* line-height: 29px; */
    text-align: center;
    padding: 0 8vw;
    margin-top: 2.4vh;

    color: #00a62f;
`;

export const AboutUsBox = styled.div`
    margin: 16vh auto;

    display: grid;
    grid-template-columns: 1fr 1fr;

    width: 88vw;
    height: 21vh;
`;

export const AboutUsText = styled.div`
    background: #f9f9f9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px 0 0 4px;
    width: 100%;

    p {
        padding: 1.4vw;
        text-align: right;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 1.2vw;
        line-height: 4vh;
        color: #3e3e3e;
    }
`;

export const AboutUsButton = styled.a`
    width: 100%;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0 4px 4px 0;

    border-radius: 0 4px 4px 0;
    background: #d2d2d2;

    cursor: pointer;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4vw;
    text-align: center;
    padding-top: 9vh;

    color: #808080;

    &:hover {
        background: ${shade(0.1, '#d2d2d2')};
        transition: 180ms;
        color: #00a62f;
    }
`;

export const Industries = styled.div`
    max-width: 88vw;
    margin: auto;

    h1 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 3vw;
        text-align: center;

        color: #00a62f;

        margin-bottom: 8vh;
    }
`;

export const Collum1 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 4vw;
`;

export const IndustryTitle = styled.h2`
    margin-top: 2vh;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 2.2vw;

    color: #808080;
`;

export const CardTitle = styled.div`
    background: #c4c4c4;
    border-radius: 4px 4px 0 0;
    height: 10vh;
    width: 100%;
    margin-top: 3vh;
`;

export const CardImage = styled.div`
    width: 100%;
    height: 30vh;
    margin-top: 10vh;

    img {
        border-radius: 0 0 4px 4px;
    }
`;
