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
        margin-bottom: 4.5vw;
    }
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;

    margin-bottom: 14vh;

    .history {
        h3 {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 1.8vw;
            margin-bottom: 0.7vw;

            color: #808080;
        }

        .history-box {
            background: #f9f9f9;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 4px;
            padding: 3vw 5vw;

            width: 50vw;
            height: 50vh;

            p {
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 1.2vw;
                line-height: 1.55vw;
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
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 4px;
        }

        p {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 1.1vw;
            margin-top: 0.5vw;

            text-align: center;

            color: #f22020;
        }
    }
`;

export const StructureContainer = styled.div`
    .structure {
        h3 {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 1.8vw;
            margin-bottom: 0.7vw;

            color: #808080;
        }
    }
`;

export const StructureBox = styled.div`
    display: flex;
    flex-direction: column;

    .sctructure-text {
        background: #f9f9f9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px 4px 0 0;

        width: 100%;
        height: 8vh;

        p {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 1.3vw;

            text-align: center;

            color: #808080;

            padding: 1.2vw;
        }
    }

    .structure-images {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        img {
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            width: 100%;
            height: 70vh;
            object-fit: cover;

            margin-bottom: 10vh;
        }

        .img1 {
            border-radius: 0 0 0 4px;
        }

        .img3 {
            border-radius: 0 0 4px 0;
        }
    }
`;
