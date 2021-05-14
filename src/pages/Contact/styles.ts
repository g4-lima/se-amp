import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 88vw;
    margin: 20vh auto;
`;

export const TopBar = styled.div`
    margin-left: 2vw;
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 1.2vw;

        color: #808080;
        margin-left: 1vw;
    }

    button {
        cursor: pointer;

        display: flex;
        flex-direction: row;
        align-items: center;

        background: none;

        p {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 1.2vw;

            color: #808080;
            margin-left: 1vw;
        }

        &:hover {
            p {
                color: ${shade(0.6, '#808080')};
            }
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4vw;
    margin-top: 8vh;
`;

export const Contacts = styled.div`
    width: 100%;
    height: 68vh;
    padding: 2.5vw;

    background: #f9f9f9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    display: flex;
    flex-direction: column;

    h1 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 2.2vw;

        color: #00a62f;
    }

    .infos {
        display: flex;
        flex-direction: row;

        p {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 1.2vw;
            margin-left: 2vw;

            color: #808080;
        }
    }

    .adress {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;

        color: #808080;
    }
`;
