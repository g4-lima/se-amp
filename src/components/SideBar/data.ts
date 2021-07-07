import { ListPMProducts } from '../../pages/ProductsPM/Data';
import { ListPulpProducts } from '../../pages/PulpProducts/data';

export const List = [
    {
        category: 'Máquina de Papel',
        id: 1,
        sections: [...ListPMProducts],
    },
    {
        category: 'Celulose',
        id: 2,
        sections: [...ListPulpProducts],
    },
];
