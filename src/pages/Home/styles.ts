import styled from 'styled-components';

export const Container = styled.div``;

export const BackgroundImage = styled.div`
    position: relative;

    img {
        width: 98.9vw;
        height: 100vh;
    }
`;

export const TextBox = styled.div`
    position: absolute;

    width: 48vw;
    height: 36vh;
    background: rgba(249, 249, 249, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    top: 40vh;
    right: 8vw;
`;

export const Text1 = styled.h1`
    font-size: 40px;
    line-height: 42px;
    text-align: right;
    padding: 40px 54px;

    color: #3e3e3e;
`;

export const Text2 = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 29px;
    text-align: center;
    padding: 0 140px;
    margin-top: 16px;

    color: #00a62f;
`;
