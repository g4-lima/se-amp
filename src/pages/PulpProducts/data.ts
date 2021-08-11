/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
export const ListPulpProducts = [
    {
        name: 'Pátio de Madeira',
        id: 1,
        products: [
            {
                id: 1,
                name: 'Peças para picadores',
                img: require('../../assets/images/celulose/chipperParts.png')
                    .default,
            },
            {
                id: 2,
                name: 'Transporte',
                img: require('../../assets/images/celulose/rosca.png').default,
            },
        ],
    },
    {
        name: 'Linha de Fibras, Caustificação e Secagem',
        id: 2,
        products: [
            {
                id: 1,
                name: 'Depuradores',
                img: require('../../assets/images/celulose/basket.png').default,
            },
            {
                id: 2,
                name: 'Cleaners',
                img: require('../../assets/images/celulose/cleaner.png')
                    .default,
            },
            // {
            //     id: 3,
            //     name: 'Lavadores',
            // },
            {
                id: 4,
                name: 'Válvulas',
                img: require('../../assets/images/celulose/valve.png').default,
            },
            {
                id: 5,
                name: 'Bombas',
                img: require('../../assets/images/celulose/pump.png').default,
            },
            {
                id: 6,
                name: 'Filtros',
                img: require('../../assets/images/celulose/filter.png').default,
            },
            // {
            //     id: 7,
            //     name: 'Cortadeira e Embalagem',
            // },
            // {
            //     id: 8,
            //     name: 'Caixa de Entrada',
            // },
            // {
            //     id: 9,
            //     name: 'Equipamentos',
            // },
        ],
    },
];
