import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 88vw;
    margin: 20vh auto;
`;

export const TopBar = styled.div`
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

            &:hover {
                color: ${shade(0.4, '#808080')};
            }
        }
    }
`;

export const Contents = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 1.8vw;
        text-align: center;

        color: #00a62f;

        margin-top: 5vh;
        margin-bottom: 3vw;
    }
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;

    .history {
        h3 {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 1.7vw;
            margin-bottom: 0.7vw;

            color: #808080;
        }

        .history-box {
            background: #f9f9f9;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 4px;
            padding: 3vw 5vw;

            width: 50vw;
            height: 56vh;

            p {
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 1.1vw;
                line-height: 2vw;
                text-align: center;
                margin-bottom: 2vw;

                color: #808080;
            }
        }
    }

    .abtcp-container {
        margin: 5.5vh 7.5vw;
        width: 100%;

        display: flex;
        flex-direction: column;

        img {
            width: 25vw;
        }

        p {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 1vw;
            margin-top: 0.5vw;

            text-align: center;

            color: #f22020;
        }
    }
`;
