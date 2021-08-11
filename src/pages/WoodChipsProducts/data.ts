/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
export const ListWoodChipsProducts = [
    {
        name: 'Picadores',
        id: 1,
        products: [
            {
                id: 1,
                name: 'Facas',
                img: require('../../assets/images/biomass/chipperKnife.png')
                    .default,
            },
            {
                id: 2,
                name: 'Peças de Desgaste',
                img: require('../../assets/images/biomass/chipperParts.png')
                    .default,
            },
        ],
    },
    {
        name: 'Pátio de Madeira',
        id: 2,
        products: [
            {
                id: 1,
                name: 'Rosca Trasnportadora',
                img: require('../../assets/images/biomass/rosca.png').default,
            },
            {
                id: 2,
                name: 'Rolos Transportadores',
                img: require('../../assets/images/biomass/rolo.png').default,
            },
        ],
    },
];
