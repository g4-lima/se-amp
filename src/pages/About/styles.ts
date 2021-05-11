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
