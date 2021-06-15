import React from 'react';

import { Container } from './styles';
import { ListPMProducts } from '../../pages/ProductsPM/Data';

interface IList {
    name: string;
    id: number;
}
}

const CategoriesList: React.FC = () => {
    const List = ( ListPMProducts:IList ) => (
        <ul>

        </ul>
    );

    return (
        <Container>
            <h1>Papel e Celulose</h1>
            <h1>Maquina de Papel</h1>
        </Container>
    );
};

export default CategoriesList;
