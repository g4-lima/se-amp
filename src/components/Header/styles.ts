import styled from 'styled-components';
import { shade } from 'polished';

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

    z-index: 1;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 2vw;

    img {
        max-width: 7.2vw;
        max-height: 8.2vh;
        box-shadow: none;
    }

    img + img {
        max-width: 10.8vw;
        max-height: 12vh;
        box-shadow: none;
    }
`;

export const Links = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-left: -28vw;

    a {
        margin-right: 2vw;
        text-decoration: none;

        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 1.1vw;

        color: #808080;

        &:hover {
            color: ${shade(0.4, '#808080')};
            font-size: 1.11vw;
            font-weight: bold;
        }
    }
`;

export const SearchBar = styled.div`
    padding: 0.7vw;
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

    .search-form {
        display: flex;
        flex-direction: row;
        align-items: center;

        .search-input {
            background-color: #d2d2d2;
            width: 100%;
        }

        svg {
            background: #d2d2d2;
        }

        .search-button {
            cursor: pointer;
            background: #d2d2d2;
        }
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
    z-index: 1;

    img {
        width: 1.7vw;
        height: 3.2vh;

        cursor: pointer;
    }

    img + img {
        margin-left: 0.8vw;
    }
`;
