import styled from 'styled-components';

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
    margin: 100px auto;

    width: 86vw;
    height: 24vh;

    background: #f9f9f9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`;

export const AboutUsButton = styled.a``;
