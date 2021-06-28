import styled from 'styled-components';

export const Container = styled.div`
    width: 99.5%;
    height: 24vh;

    display: flex;
    flex-direction: column;

    margin-top: 24vh;
`;

export const Line = styled.div`
    width: 100%;
    height: 0px;

    border: 2px solid #f22020;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const InfoBox = styled.div`
    width: 100%;
    height: 100%;

    background: #3e3e3e;

    display: flex;
    flex-direction: row;

    justify-content: space-between;

    padding: 0 5.5vw;
`;

export const Names = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6vh;

    p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 1vw;
        line-height: 2vw;
        text-align: left;

        color: #e8e8e8;
    }
`;

export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6vh;

    p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 1.1vw;
        line-height: 2.5vw;
        text-align: right;

        color: #e8e8e8;
    }
`;
