import styled from 'styled-components';

export const Container = styled.div`
    width: 88vw;
    margin: 23vh auto;
    display: flex;
    flex-direction: row;
`;

export const LeftList = styled.div`
    background: #f9f9f9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    width: 18.5vw;
    height: 120vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    margin-left: 2.8vw;
`;

export const PageBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    top: 0;
    height: 4vh;
    width: 100%;

    p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 1.2vw;

        color: #808080;
        margin-right: 1vw;
    }

    svg {
        margin-right: 1vw;
    }
`;

export const ProductsGroup = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-left: 0.5vw;
    margin-top: 8vh;

    h2 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 2vw;

        color: #00a62f;
    }

    & + & {
        margin-top: 12vh;
    }
`;

export const ProductsCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1vw;

    margin-top: 3vh;

    .card {
        width: 12vw;
        height: 25vh;

        background: #f9f9f9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        text-decoration: none;

        .card-title {
            width: 100%;
            height: 35%;
            background: #808080;
            border-radius: 4px 4px 0px 0px;

            h3 {
                font-family: Montserrat;
                font-weight: 500;
                font-size: 1.4vw;
                text-align: center;
                padding: 1.2vw;

                color: #f9f9f9;
            }
        }

        &:hover {
            background: #808080;
            transition: 400ms;

            h3 {
                font-size: 1.5vw;
                transition: 200ms;
            }
        }
    }
`;
