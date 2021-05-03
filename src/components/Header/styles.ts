import styled from 'styled-components';

export const Conteiner = styled.div`
    z-index: 0;
    position: absolute;
    width: 88vw;
    height: 12vh;
    top: 4vh;
    margin: 8px 68px;

    display: flex;
    flex-direction: row;
    align-items: center;

    background: #f9f9f9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 140px;
        height: 80px;
    }

    img + img {
        width: 100px;
        height: 60px;
    }
`;

export const Links = styled.div`
    display: flex;
    flex-direction: row;

    padding: 24px;
    margin-left: 32px;

    a {
        margin-right: 32px;
        text-decoration: none;

        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;

        color: #808080;
    }
`;

export const SearchBar = styled.div`
    padding: 24px;
    background: #d2d2d2;
    border-radius: 4px;

    h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;

        color: #808080;
    }
`;
