const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//Nos ayuda a para hacer moldes de como se verian los objetos o clases
export interface Hero {
    id: number;
    name: string;
    owner: string; //o tambien owners: 'DC'|'Marvel' si sabemos que no va a crecer
}
//Tipo de dato personalizado
export type owner = 'DC' | 'Marvel';

export const owners = ['DC','Marvel'];

export default heroes;