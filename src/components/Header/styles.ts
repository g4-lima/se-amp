import styled from 'styled-components';

export const Conteiner = styled.div`
    position: absolute;
    width: 88vw;
    height: 12vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 4vh auto;

    display: flex;
    flex-direction: row;
    align-items: center;

    background: #f9f9f9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    justify-content: space-between;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        max-width: 10.8vw;
        /* min-width: 24vw; */
        max-height: 12vh;
        /* min-height: 80px; */
        box-shadow: none;
    }

    img + img {
        max-width: 7.2vw;
        /* min-width: 100px; */
        max-height: 8.2vh;
        /* min-height: 60px; */
        box-shadow: none;
    }
`;

export const Links = styled.div`
    display: flex;
    flex-direction: row;

    margin-left: -26vw;

    a {
        margin-right: 1.8vw;
        text-decoration: none;

        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 1vw;

        color: #808080;
    }
`;

export const SearchBar = styled.div`
    padding: 1.2vw;
    width: 12vw;
    background: #d2d2d2;
    border-radius: 4px;
    margin-right: 1.2vw;

    h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 0.6vw;

        color: #808080;
    }
`;

export const ChangeLanguage = styled.div`
    position: absolute;

    display: flex;
    flex-direction: row;

    width: 5vw;

    right: 5vw;
    top: 0.8vh;
`;

export const Flags = styled.a`
    img {
        width: 1.8vw;
        height: 3.2vh;

        cursor: pointer;
    }

    img + img {
        margin-left: 0.8vw;
    }
`;
