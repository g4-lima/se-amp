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

        margin-top: 8vh;
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

            color: #808080;
        }

        .history-box {
            background: #f9f9f9;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 4px;

            width: 50vw;
            height: 48vh;

            p {
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 1.1vw;
                line-height: 2vw;
                padding: 3.5vw 6vw 3vw 0vw;
                text-align: center;

                color: #808080;
            }
        }
    }
`;
