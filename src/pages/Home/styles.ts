import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const BackgroundImage = styled.div`
    position: relative;

    img {
        width: 99.9%;
        height: 100vh;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }
`;

export const TextBox = styled.div`
    position: absolute;

    width: 52vw;
    height: 44vh;
    background: rgba(249, 249, 249, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    border-radius: 4px;

    top: 36vh;
    right: 6vw;
`;

export const Text1 = styled.h1`
    font-size: 2.8vw;
    font-weight: 500;
    line-height: 7vh;
    text-align: right;
    padding: 5.8vh 2.8vw;

    color: #3e3e3e;
`;

export const Text2 = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.8vw;
    text-align: center;
    padding: 0 8vw;
    margin-top: 3.2vh;

    color: #00a62f;
`;

export const AboutUsBox = styled.div`
    margin: 16vh auto;

    display: grid;
    grid-template-columns: 1fr 1fr;

    width: 88vw;
    height: 21vh;

    a {
        width: 100%;

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 0 4px 4px 0;

        border-radius: 0 4px 4px 0;
        background: #d2d2d2;

        cursor: pointer;
        text-decoration: none;

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
    }
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

export const CardTitle = styled.div`
    background: #808080;
    border-radius: 4px 4px 0 0;
    height: 10vh;
    width: 100%;
    margin-top: 3vh;

    cursor: pointer;

    h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 1.6vw;

        margin-top: 3vh;

        text-align: center;

        color: #f9f9f9;
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 4vw;

    margin-bottom: 14vh;

    .card {
        display: flex;
        flex-direction: column;
        text-decoration: none;

        cursor: pointer;

        &:hover {
            img {
                opacity: 1;
                transition: 180ms;
            }
        }

        &:hover ${CardTitle} {
            background: ${shade(0.2, '#808080')};
            transition: 180ms;

            h3 {
                font-size: 1.62vw;
                transition: 200ms;
            }
        }
    }
`;

export const IndustryTitle = styled.h2`
    margin-top: 2vh;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 2.2vw;

    color: #808080;
`;

export const Card = styled.a`
    display: flex;
    flex-direction: column;

    cursor: pointer;

    &:hover {
        img {
            opacity: 1;
            transition: 180ms;
        }
    }

    &:hover ${CardTitle} {
        background: ${shade(0.2, '#808080')};
        transition: 180ms;

        h3 {
            font-size: 1.62vw;
            transition: 200ms;
        }
    }
`;

export const CardImage = styled.div`
    width: 100%;
    height: 24vh;

    img {
        border-radius: 0 0 4px 4px;
        width: 100%;
        height: 100%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        opacity: 0.9;
        object-fit: cover;
    }
`;

export const BoxInfo = styled.div`
    position: relative;
    width: 8vw;
    height: 5vh;
    z-index: 1;
    top: -8vh;
    left: 17vw;
    border-radius: 4px;

    background: rgba(249, 249, 249, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 1.2vw;
        text-align: center;
        padding: 1vh;

        color: #00a62f;
    }
`;

export const Credits = styled.p`
    font-size: 0.8vw;
    font-weight: 200;
    margin-left: 5.5vw;
    z-index: 1;
    bottom: -48vh;
    margin-top: -15vh;

    color: #808080;
    position: relative;
`;
