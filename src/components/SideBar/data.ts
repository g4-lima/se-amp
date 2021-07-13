import { ListPMProducts } from '../../pages/ProductsPM/Data';
import { ListPulpProducts } from '../../pages/PulpProducts/data';
import { ListConvertionProducts } from '../../pages/ConvertionProducts/data';
import { ListWoodChipsProducts } from '../../pages/WoodChipsProducts/data';
import { ListPelletProducts } from '../../pages/PelletProducts/data';

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
    {
        category: 'Conversão',
        id: 3,
        sections: [...ListConvertionProducts],
    },
    {
        category: 'Cavacos de Madeira',
        id: 4,
        sections: [...ListWoodChipsProducts],
    },
    {
        category: 'Pellets',
        id: 5,
        sections: [...ListPelletProducts],
    },
];
