import styled from 'styled-components';

export const Container = styled.div`
    width: 88vw;
    margin: 23vh auto;
    display: flex;
    flex-direction: row;
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
        font-weight: 500;
        font-size: 1.8vw;

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
        width: 12.4vw;
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
            display: flex;
            justify-content: center;
            align-items: center;

            h3 {
                font-family: Montserrat;
                font-weight: 500;
                font-size: 1.3vw;
                line-height: 1.6vw;
                display: inline-block;
                vertical-align: middle;
                text-align: center;

                color: #f9f9f9;
            }
        }

        &:hover {
            background: #808080;
            transition: 400ms;

            h3 {
                font-size: 1.35vw;
                transition: 200ms;
                line-height: 1.6vw;
            }

            img {
                opacity: 1.5;
                width: 78%;
            }
        }

        img {
            display: block;
            margin-right: auto;
            margin-left: auto;
            opacity: 0.9;
            width: 75%;
        }
    }
`;
