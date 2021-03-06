import React from 'react';

import { Container, Line, InfoBox, Names, Contacts } from './style';

const Footer: React.FC = () => {
    return (
        <Container>
            <Line />
            <InfoBox>
                <Names>
                    <p>Sharp-e Ltda. - Importação e Exportação</p>
                    <p>AMP AfterMarketPartner - Representante Comercial</p>
                    <p>Copyright © 2021</p>
                </Names>
                <Contacts>
                    <p>amp@aftermarketpasrtner.com</p>
                    <p>19 3305 2372 | 3305 2382</p>
                </Contacts>
            </InfoBox>
        </Container>
    );
};

export default Footer;
